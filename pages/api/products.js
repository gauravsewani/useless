import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch only active products
      const products = await stripe.products.list({ active: true, limit: 100 }); // Adjust limit as needed
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products." });
    }
  } else if (req.method === "POST") {
    const { name, description, imageUrl, price, metadata } = req.body;
    try {
      const product = await stripe.products.create({
        name,
        description,
        images: [imageUrl],
        metadata,
      });
      const priceObj = await stripe.prices.create({
        unit_amount: price,
        currency: "usd",
        product: product.id,
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to create product." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
