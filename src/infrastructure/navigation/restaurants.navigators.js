import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestuarantsScreen } from "../../features/restuarants/screens/resturant.screen";
import { RestaurantDetailScreen } from "../../features/restuarants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        cardOverlayEnabled: false,
        gestureEnabled: true,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestuarantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
