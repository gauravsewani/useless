import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    // Get all ownership records for a specific NFT
    const { data: ownerships, error } = await supabase
      .from("nft_ownerships")
      .select("*")
      .eq("nft_id", id);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json(ownerships);
  }

  if (method === "POST") {
    // Create a new ownership record for a specific NFT
    const { nft_id, owner_wallet, quantity } = req.body;
    const { data: ownership, error } = await supabase
      .from("nft_ownerships")
      .insert([{ nft_id, owner_wallet, quantity }]);

    if (error) return res.status(500).json({ error: error.message });

    return res.status(201).json(ownership[0]);
  }

  return res.status(404).json({ error: "Route not found" });
}
