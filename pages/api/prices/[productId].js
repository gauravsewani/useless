import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  const { productId } = req.query;

  if (req.method === "GET") {
    try {
      const prices = await stripe.prices.list({
        product: productId,
        active: true,
        limit: 1, // Fetch only the latest active price
      });

      if (prices.data.length > 0) {
        const latestPrice = prices.data[0];

        // Ensure the unit_amount is a valid number
        if (latestPrice.unit_amount && !isNaN(latestPrice.unit_amount)) {
          res.status(200).json(latestPrice);
        } else {
          res
            .status(404)
            .json({ error: "Invalid price value for this product." });
        }
      } else {
        res
          .status(404)
          .json({ error: "No active prices found for this product." });
      }
    } catch (error) {
      console.error("Error fetching prices:", error.message);
      res.status(500).json({ error: "Failed to fetch price." });
    }
  } else if (req.method === "PUT") {
    const { price } = req.body;
    try {
      // Update the product's metadata with the new price
      const updatedProduct = await stripe.products.update(productId, {
        metadata: { price: price.toString() },
      });

      if (!price || isNaN(price)) {
        res.status(400).json({ error: "Invalid price value provided." });
        return;
      }
      console.log("Updated price in product metadata:", price);

      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "Failed to update price." });
    }
  } else if (req.method === "DELETE") {
    try {
      // Deactivate all prices associated with the product
      const prices = await stripe.prices.list({ product: productId });
      for (let price of prices.data) {
        await stripe.prices.update(price.id, { active: false });
      }
      res.status(200).json({ message: "Prices deactivated successfully." });
    } catch (error) {
      res.status(500).json({ error: "Failed to deactivate prices." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
