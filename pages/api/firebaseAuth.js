// firebaseAuth.js
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import app from "../../lib/firebaseLib";

const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update user profile with the provided name
    await updateProfile(userCredential.user, { displayName: name });

    // Save user data to Firestore
    const userRef = doc(db, "users", userCredential.user.uid);
    await setDoc(userRef, {
      name,
      email,
      // You may choose not to store the password in Firestore for security reasons
      // Instead, store a hashed or encrypted version of the password
      // password,
    });

    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
};
