import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { session_id } = req.query;
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items"],
      });

      res.status(200).json(session);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve session." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
