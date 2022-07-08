import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const AuthenticationStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: false,
        gestureEnabled: true,
      }}
    >
      <AuthenticationStack.Screen name="Main" component={AccountScreen} />
      <AuthenticationStack.Screen name="Login" component={LoginScreen} />
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
    </AuthenticationStack.Navigator>
  );
};
