import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "../../../lib/supabaseClient";

export default NextAuth({
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
        name: { label: "Name", type: "text", placeholder: "John Smith" },
        action: { label: "Action", type: "hidden" }, // action: "signup" or "signin"
      },
      async authorize(credentials) {
        const { action } = credentials;
        try {
          if (action === "signup") {
            return await handleSignup(credentials);
          } else {
            return await handleSignin(credentials);
          }
        } catch (error) {
          console.error(error.message);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const { email, name, image } = user;

        // Check if user already exists
        const { data: existingUser, error: fetchError } = await supabase
          .from("users")
          .select("email")
          .eq("email", email)
          .maybeSingle();

        if (fetchError) {
          console.error("Error fetching user from Supabase:", fetchError);
          return false;
        }

        // If user doesn't exist, insert them
        if (!existingUser) {
          const { error: insertError } = await supabase.from("users").insert([
            {
              name: name,
              email: email,
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
      return true;
    },
  },

  pages: {
    signIn: "/login",
  },
  secret: process.env.SECRET,
});

async function handleSignup(credentials) {
  const { email, password, name } = credentials;
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, name, password }]);
  if (error) throw new Error(error.message);
  return { email, name }; // return the user object
}

async function handleSignin(credentials) {
  const { email, password } = credentials;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("User not found");
  if (data.password !== password) throw new Error("Invalid password");
  return data; // return the user object
}
