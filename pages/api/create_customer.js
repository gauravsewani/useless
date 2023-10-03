import Stripe from "stripe";

// Create a Stripe instance with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const newCustomer = await stripe.customers.create();
      const customerId = newCustomer.id;

      // Return the new customer ID
      res.status(200).json({ customerId: customerId });
    } catch (err) {
      console.error("Error creating customer:", err);
      res.status(500).json({ message: "Error creating customer." });
    }
  } else {
    // If the request method is not POST, return a 405 status code
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
