import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [video, setVideo] = useState("");
  const [cmp, setCmp] = useState("");
  const [colorName, setColorName] = useState("");
  const [colorNumber, setColorNumber] = useState("");
  const [rarity, setRarity] = useState("");
  const [remaining, setRemaining] = useState("");
  const [totalNumber, setTotalNumber] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState(0);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEditProduct = (product) => {
    setIsAddingProduct(false);
    setName(product.name);
    setDescription(product.description);
    setImageUrl(product.images[0] || "");
    setVideo(product.metadata.video || "");
    setCmp(product.metadata.cmp || "");
    setColorName(product.metadata.colorName || "");
    setColorNumber(product.metadata.colorNumber || "");
    setRarity(product.metadata.rarity || "");
    setRemaining(product.metadata.remaining || "");
    setTotalNumber(product.metadata.totalNumber || "");
    setDiscount(product.metadata.discount || "");
    // Fetch the price for this product (assuming one price per product for simplicity)
    setPrice(product.metadata.price);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setName("");
    setDescription("");
    setImageUrl("");
    setVideo("");
    setCmp("");
    setColorName("");
    setColorNumber("");
    setRarity("");
    setRemaining("");
    setTotalNumber("");
    setDiscount("");
    setPrice(0);
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleSaveChanges = async () => {
    const metadata = {
      video,
      cmp,
      colorName,
      colorNumber,
      rarity,
      remaining,
      totalNumber,
      discount,
      price,
    };

    if (isAddingProduct) {
      // Add new product
      try {
        const newProduct = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            imageUrl,
            price: 0,
            metadata,
          }), // Convert dollars to cents
        });
        fetchProducts();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      // Update the product and price details
      try {
        await fetch(`/api/products/${selectedProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, description, imageUrl, metadata }),
        });

        fetchProducts();
        toast.success("Product saved successfully!");
      } catch (error) {
        toast.error("Error saving product.");
        console.error("Error updating product:", error);
      }
    }
    setIsModalOpen(false);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });
      fetchProducts();
      setIsModalOpen(false);
      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setName("");
    setDescription("");
    setImageUrl("");
    setVideo("");
    setCmp("");
    setColorName("");
    setColorNumber("");
    setRarity("");
    setRemaining("");
    setTotalNumber("");
    setDiscount("");
    setPrice(0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Stripe Products</h1>

      <button
        onClick={handleAddProduct}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Product
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded text-white p-4">
            <img
              src={product.images[0] || "https://via.placeholder.com/150"}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <button
              onClick={() => handleEditProduct(product)}
              className="bg-blue-500 text-white p-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded min-w-screen max-h-screen overflow-y-scroll max-w-screen-xl flex"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-1/2 pr-4">
              <h2 className="text-xl font-bold mb-4">
                {isAddingProduct ? "Add Product" : "Edit Product"}
              </h2>

              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Product Name:
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Product Name"
                  className="border p-2 w-full"
                />
              </div>

              {/* Product Description */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Product Description:
                </label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Product Description"
                  className="border p-2 w-full"
                />
              </div>

              {/* Image URL */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Image URL:
                </label>
                <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Image URL"
                  className="border p-2 w-full"
                />
              </div>

              {/* Video URL */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Video (Imgur link):
                </label>
                <input
                  type="text"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                  placeholder="Video URL"
                  className="border p-2 w-full"
                />
                <small className="block text-gray-600">
                  For video, use an Imgur link.
                </small>
              </div>

              {/* CMP */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">CMP:</label>
                <input
                  type="text"
                  value={cmp}
                  onChange={(e) => setCmp(e.target.value)}
                  placeholder="CMP"
                  className="border p-2 w-full"
                />
              </div>

              {/* Color Name */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Color Name:
                </label>
                <input
                  type="text"
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value)}
                  placeholder="Color Name"
                  className="border p-2 w-full"
                />
              </div>

              {/* Color Number */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Color Number:
                </label>
                <input
                  type="number"
                  value={colorNumber}
                  onChange={(e) => setColorNumber(parseInt(e.target.value))}
                  placeholder="Color Number"
                  className="border p-2 w-full"
                />
              </div>

              {/* Rarity */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Rarity:</label>
                <input
                  type="text"
                  value={rarity}
                  onChange={(e) => setRarity(e.target.value)}
                  placeholder="Rarity"
                  className="border p-2 w-full"
                />
              </div>

              {/* Remaining */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Remaining:
                </label>
                <input
                  type="number"
                  value={remaining}
                  onChange={(e) => setRemaining(parseInt(e.target.value))}
                  placeholder="Remaining"
                  className="border p-2 w-full"
                />
              </div>

              {/* Total Number */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Total Number:
                </label>
                <input
                  type="number"
                  value={totalNumber}
                  onChange={(e) => setTotalNumber(parseInt(e.target.value))}
                  placeholder="Total Number"
                  className="border p-2 w-full"
                />
              </div>

              {/* Discount */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Discount:
                </label>
                <input
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(parseInt(e.target.value))}
                  placeholder="Discount"
                  className="border p-2 w-full"
                />
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Price (in dollars):
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  placeholder="Price"
                  className="border p-2 w-full"
                />
              </div>

              {/* Buttons */}
              <button
                onClick={handleSaveChanges}
                className="bg-green-500 text-white p-2 rounded mr-2"
              >
                Save Changes
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white p-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteProduct(selectedProduct.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete Product
              </button>
            </div>

            {/* Preview Section */}
            <div className="w-1/2 pl-4 border-l">
              <h3 className="text-lg font-bold mb-2">Preview:</h3>
              <div className="border rounded p-4">
                <img
                  src={imageUrl || "https://via.placeholder.com/150"}
                  alt={name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl mb-2">{name}</h2>
                <p className="mb-2">{description}</p>
                <p className="text-green-500">${price}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
