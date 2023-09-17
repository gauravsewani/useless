import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "../../../lib/supabaseClient";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { id, name, email, image } = user;

      // Check if the user already exists in the Supabase table
      const { data, error: fetchError } = await supabase
        .from("users")
        .select("id")
        .eq("id", id)
        .single();

      if (fetchError) {
        console.error("Error fetching user from Supabase:", fetchError);
        return false;
      }

      // If the user doesn't exist, insert them into the table
      if (!data) {
        const { error: insertError } = await supabase.from("users").upsert([
          {
            id,
            name,
            email,
            image,
          },
        ]);

        if (insertError) {
          console.error("Error inserting user into Supabase:", insertError);
          return false;
        }
      }

      return true;
    },
  },
});
