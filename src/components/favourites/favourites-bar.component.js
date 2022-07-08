import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info.component";

const FavouritesView = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesView>
      <Spacer size="large" position="left">
        <Text variant="caption"> Favourites </Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigate("RestaurantDetail", { restaurant });
                }}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesView>
  );
};
