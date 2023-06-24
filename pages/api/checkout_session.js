import Stripe from "stripe";
// Create a Stripe instance with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET);

// Export a default function that handles the API request
export default async function handler(req, res) {
  // Check if the request method is POST
  const data = req.body;

  if (req.method === "POST") {
    try {
      // Create a Checkout Session with the cart products from the request body
      const session = await stripe.checkout.sessions.create({
        line_items: req.body.map((product) => ({
          // TODO: replace this with the `price` of the product you want to sell
          price: product.id,
          quantity: product.quantity,
        })),
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      // Return the session ID as a JSON response
      res.status(200).json({ sessionId: session?.id });
    } catch (err) {
      // Handle any errors and return a 500 status code
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    // If the request method is not POST, return a 405 status code
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
