import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iyeftawiaccpupkbxcbr.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
