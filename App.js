import "./ignoreWarning";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { Navigator } from "./src/infrastructure/navigation/index";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { initializeApp } from "firebase/app";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyDa3P42g72hXHxPIH5OcVog_CgmkqJXKTI",
  authDomain: "mealstogo-4818a.firebaseapp.com",
  projectId: "mealstogo-4818a",
  storageBucket: "mealstogo-4818a.appspot.com",
  messagingSenderId: "227494340633",
  appId: "1:227494340633:web:d028c31058ebe118b3e288",
};

initializeApp(firebaseConfig);

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigator />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
