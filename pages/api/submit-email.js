import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    const { data, error } = await supabase.from("emails").insert([{ email }]);
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Error submitting email" });
    } else {
      res.status(200).json({ message: "Email submitted successfully" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
