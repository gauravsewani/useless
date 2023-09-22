import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function Account() {
  const { data: session } = useSession();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    setTimeout(() => {
      if (!session) {
        router.push("/login");
      }
    }, 1000); // 1 second delay
  }, [session, router]);

  if (!hasMounted) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // This will be replaced by the redirect after 1 second
  }

  return (
    <div>
      <h1>Welcome to your account, {session.user.name}!</h1>

      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
