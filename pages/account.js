import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function Account() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If the session status is "loading", show a loading message
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If the session status is "unauthenticated", redirect to login
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="text-white flex flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-bold mb-10">
        Welcome to your account, {session.user.name}!
      </h1>
      <button
        className="border p-2 rounded-lg bg-white text-black"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
