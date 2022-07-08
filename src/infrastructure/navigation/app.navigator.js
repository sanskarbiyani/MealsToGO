import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components";
import { RestaurantsNavigator } from "./restaurants.navigators";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );

const TAB_ICONS = {
  Restaurant: {
    true: "md-restaurant",
    false: "md-restaurant-outline",
  },
  Map: {
    true: "md-map",
    false: "md-map-outline",
  },
  Setting: {
    true: "md-settings",
    false: "md-settings-outline",
  },
};

const createScreenOption = (route, theme) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ size, color, focused }) => {
      const icon = iconName[focused];
      return <Ionicons name={icon} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.colors.ui.error,
    tabBarInactiveTintColor: theme.colors.ui.primary,
    headerShown: false,
  };
};

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => createScreenOption(route, theme)}
          >
            <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Setting" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
