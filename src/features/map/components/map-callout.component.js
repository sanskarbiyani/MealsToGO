import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";

export const MapCallout = ({ restraunt }) => {
  return <CompactRestaurantInfo restaurant={restraunt} isMap={true} />;
};
