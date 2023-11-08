import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
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

const formStyle = {
  width: "100%",
  maxWidth: "400px",
};

const inputFieldStyle = {
  marginBottom: "30px",
  fontWeight: 700,
  color: "white",
};

const updateButtonStyle = {
  marginTop: "16px",
};

const backButtonStyle = {
  position: "absolute",
  top: "20px",
  left: "20px",
};

export default function Account() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name,
        email: session.user.email,
      });

      // Check if the email exists in the user_profiles table when the page loads
      checkAndCreateUserProfile();
    }
  }, [session?.user]);

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormChanged(true);
  };

  const handleBack = () => {
    router.push("/");
  };

  const checkAndCreateUserProfile = async () => {
    if (formData.email) {
      const existingProfile = await supabase
        .from("user_profiles")
        .select("id")
        .eq("email", formData.email);

      if (existingProfile.data.length === 0) {
        // If email doesn't exist, create a new user profile
        try {
          const { data, error } = await supabase.from("user_profiles").upsert(
            [
              {
                email: formData.email,
                name: formData.name,
              },
            ],
            {
              returning: "minimal",
            }
          );

          if (error) {
            console.error("Error creating user profile", error);
          } else {
            console.log("User profile created successfully");
          }
        } catch (error) {
          console.error("Error creating user profile", error);
        }
      }
    }
  };

  const updateProfile = async () => {
    try {
      const { data, error } = await supabase.from("user_profiles").upsert(
        [
          {
            email: formData.email,
            name: formData.name,
          },
        ],
        {
          returning: "minimal",
        }
      );

      if (error) {
        console.error("Error updating user profile", error);
      } else {
        console.log("User profile updated successfully");
        setFormChanged(false);
      }
    } catch (error) {
      console.error("Error updating user profile", error);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <div className="bg-purple-100">
      <Container style={containerStyle}>
        <IconButton
          color="primary"
          aria-label="go-back"
          onClick={handleBack}
          style={backButtonStyle}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="mb-10">
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Welcome to your account, {session?.user?.name}!
          </Typography>
        </div>
        <form style={formStyle}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            style={inputFieldStyle}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            fullWidth
            disabled
            style={inputFieldStyle}
          />
          {formChanged && (
            <Button
              color="primary"
              aria-label="update-profile"
              onClick={updateProfile}
              fullWidth
              style={updateButtonStyle}
            >
              Update Profile
            </Button>
          )}
        </form>
        <IconButton
          color="primary"
          aria-label="sign-out"
          onClick={() => signOut()}
        >
          Sign Out
        </IconButton>
      </Container>
    </div>
  );
}
