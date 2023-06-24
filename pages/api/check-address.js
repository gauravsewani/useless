import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  const { address } = req.query;

  try {
    const { data, error } = await supabase
      .from("wallets")
      .select("*")
      .eq("wallet_id", address)
      .limit(1);

    if (error) {
      throw new Error("Error checking wallet: " + error.message);
    }

    if (!data) {
      throw new Error("Wallet not found in database.");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
