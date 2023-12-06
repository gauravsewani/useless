import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../lib/firebaseLib";
import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
};

const backButtonStyle = {
  position: "absolute",
  top: "20px",
  left: "20px",
};

const contentStyle = {
  marginTop: "20px",
};

const buttonStyle = {
  marginTop: "16px",
};

const Account2 = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // If no user is logged in, redirect to the login/signup page
        router.push("/firebase");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to the login/signup page after logout
      router.push("/firebase");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (!user) {
    // If the user is not yet determined, you can show a loading indicator or a message
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-blue-100">
      <Container style={containerStyle}>
        <IconButton
          color="primary"
          aria-label="go-back"
          onClick={() => router.push("/firebase")}
          style={backButtonStyle}
        >
          <ArrowBackIcon />
        </IconButton>
        <div style={contentStyle}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Welcome to your account, {user.displayName}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {user.email}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogout}
            style={buttonStyle}
          >
            Logout
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Account2;
