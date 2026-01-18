import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const createUserWithEmailAndPasswordfunc = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInWithEmailAndPasswordfunc = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signInWithPopupfunc = () => signInWithPopup(auth, googleProvider);

  const signOutfunc = () => signOut(auth);

  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordfunc,
    signInWithEmailAndPasswordfunc,
    signInWithPopupfunc,
    signOutfunc,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
