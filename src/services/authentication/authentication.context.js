import React, { createContext, useState } from "react";
import { loginRequest, RegisterRequest } from "./authentication.service";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkUser, setCheckUser] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    }
    if (checkUser) {
      setCheckUser(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log("Authentication Error: ", err);
        if (err.code === "auth/invalid-email") {
          setError("Error: Please check your email and try again.");
        } else if (err.code === "auth/wrong-password") {
          setError("Error: Please check your password and try again.");
        }
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match.");
      return;
    }
    setIsLoading(true);
    RegisterRequest(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log("Authentication Error: ", err);
        if (err.code === "auth/invalid-email") {
          setError("Error: Please check your email and try again.");
        } else if (err.code === "auth/wrong-password") {
          setError("Error: Please check your password and try again.");
        } else if (
          err.code === "auth/weak-password" ||
          err.code === "auth/invalid-password"
        ) {
          setError("Error: Weak Password. Enter a strong password.");
        } else if (err.code === "auth/email-already-exists") {
          setError(
            "Error: Email already exists. Please try again with different email"
          );
        } else {
          setError(err.code);
        }
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    // console.log("Logout Function called.");
    signOut(auth)
      .then(() => {
        // console.log("Signout Successfull.");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        checkUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
