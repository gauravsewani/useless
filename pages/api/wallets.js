import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("wallets").select("*");
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json({ wallets: data });
    }
  } else {
    res.status(400).json({ error: "Invalid HTTP method" });
  }
}
