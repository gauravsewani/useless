import Stripe from "stripe";

// Create a Stripe instance with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET);

export default async function handler(req, res) {
  let customerId = req.body.customerId;

  if (!customerId) {
    try {
      const newCustomer = await stripe.customers.create();
      customerId = newCustomer.id;
    } catch (err) {
      console.error("Error creating customer:", err);
      res.status(500).json({ message: "Error creating customer." });
      return;
    }
  }

  if (req.method === "POST") {
    try {
      // Map over the items and create line items using priceId and price in cents
      const lineItems = req.body.items.map((product) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.image],
            },
            unit_amount: parseInt(product.price) * 100,
          },
          quantity: product.quantity,
        };
      });

      // Create a Checkout Session with the mapped line items
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        line_items: lineItems,
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      // Return the session ID as a JSON response
      res.status(200).json({ sessionId: session?.id });
    } catch (err) {
      console.error("Stripe API Error:", err);
      res.status(500).json({ statusCode: 500, message: err.message });
      return;
    }
  } else {
    // If the request method is not POST, return a 405 status code
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
