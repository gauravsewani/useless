import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    // Get all sales records for a specific NFT
    const { data: sales, error } = await supabase
      .from("nft_sales")
      .select("*")
      .eq("nft_id", id);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json(sales);
  }

  if (method === "POST") {
    // Create a new sales record for a specific NFT
    const { nft_id, seller_wallet, buyer_wallet, quantity, total_price } =
      req.body;
    const { data: sale, error } = await supabase
      .from("nft_sales")
      .insert([{ nft_id, seller_wallet, buyer_wallet, quantity, total_price }]);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(201).json(sale[0]);
  }

  return res.status(404).json({ error: "Route not found" });
}
