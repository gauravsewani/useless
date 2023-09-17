import { signIn, useSession, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <button onClick={() => signOut("google")}>logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
