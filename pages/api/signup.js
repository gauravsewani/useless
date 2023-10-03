// pages/api/signup.js

import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  const { email, password, name } = req.body;

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return res.status(401).json({ error: error.message });

  // Optionally, save the user's name or other data to a profile table
  const { data, error: insertError } = await supabase
    .from("users")
    .insert([{ id: user.user.id, name }]); // Adjusted line

  if (insertError) return res.status(500).json({ error: insertError.message });

  // Return a response
  res.status(200).json({ user });
}
