import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  try {
    const { method } = req;

    if (method === "GET") {
      const { data: nfts, error } = await supabase.from("nfts").select("*");
      if (error) throw error;

      res.status(200).json(nfts);
    } else if (method === "POST") {
      const {
        nft_name,
        nft_description,
        nft_image_url,
        nft_owner_wallet,
        nft_price,
        nft_contract_address,
        nft_token_id,
        nft_metadata_url,
      } = req.body;

      const { data: newNft, error } = await supabase
        .from("nfts")
        .insert([
          {
            nft_name,
            nft_description,
            nft_image_url,
            nft_owner_wallet,
            nft_price,
            nft_contract_address,
            nft_token_id,
            nft_metadata_url,
          },
        ])
        .single();
      if (error) throw error;

      res.status(201).json(newNft);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
