import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "../../../lib/supabaseClient";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if the user exists in Supabase
        const { data: user, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .single();

        if (error && !user) {
          // If user not found, create a new entry in Supabase
          const { data, error } = await supabase
            .from("users")
            .insert([{ email: credentials.email, name: credentials.name }]);
          if (error) return null;
          return { email: data.email, name: data.name };
        }

        if (user) return { email: user.email, name: user.name };
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/account",
    signOut: "/login",
    error: "/login",
    verifyRequest: "/login",
    newUser: null,
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { id, name, email, image } = user;

        // Check if the user already exists in the Supabase table
        const { data, error: fetchError } = await supabase
          .from("users")
          .select("id")
          .eq("email", email)
          .maybeSingle();

        if (fetchError) {
          console.error("Error fetching user from Supabase:", fetchError);
          return false;
        }

        // If the user doesn't exist, insert them into the table
        if (!data) {
          const { error: insertError } = await supabase.from("users").insert([
            {
              name,
              email,
              image_url: image,
              is_google_user: true,
            },
          ]);

          if (insertError) {
            console.error(
              "Error inserting Google user into Supabase:",
              insertError
            );
            return false;
          }
        }
      }

      // Handle logic for other providers or credentials-based login if needed

      return true;
    },
  },
});
