import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function InsertForm() {
  const [formData, setFormData] = useState({
    video: "",
    name: "",
    price: "",
    cmp: "",
    colorname: "",
    colornumber: "",
    rarity: "",
    remaining: "",
    totalnumber: "",
    discount: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.from("shop").insert([formData]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
      // Clear form fields after successful insertion
      setFormData({
        video: "",
        name: "",
        price: "",
        cmp: "",
        colorname: "",
        colornumber: "",
        rarity: "",
        remaining: "",
        totalnumber: "",
        discount: "",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <label className="mb-2">
        Video:
        <input
          type="text"
          name="video"
          value={formData.video}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        CMP:
        <input
          type="text"
          name="cmp"
          value={formData.cmp}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Color Name:
        <input
          type="text"
          name="colorname"
          value={formData.colorname}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Color Number:
        <input
          type="text"
          name="colornumber"
          value={formData.colornumber}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Rarity:
        <input
          type="text"
          name="rarity"
          value={formData.rarity}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Remaining:
        <input
          type="text"
          name="remaining"
          value={formData.remaining}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Total Number:
        <input
          type="text"
          name="totalnumber"
          value={formData.totalnumber}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <label className="mb-2">
        Discount:
        <input
          type="text"
          name="discount"
          value={formData.discount}
          onChange={handleInputChange}
          className="border rounded p-2"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
