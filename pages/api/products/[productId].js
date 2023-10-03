import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  const { productId } = req.query;

  if (req.method === "GET") {
    try {
      const product = await stripe.products.retrieve(productId);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product." });
    }
  } else if (req.method === "PUT") {
    const { name, description, imageUrl, metadata } = req.body;
    try {
      const updatedProduct = await stripe.products.update(productId, {
        name,
        description,
        images: [imageUrl],
        metadata,
      });
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: "Failed to update product." });
    }
  } else if (req.method === "DELETE") {
    try {
      // Delete the product directly
      await stripe.products.del(productId);
      res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
      console.error("Error deleting product:", error);
      res
        .status(500)
        .json({ error: `Failed to delete product. Reason: ${error.message}` });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
