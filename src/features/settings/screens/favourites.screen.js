import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestuarantInfo } from "../../restuarants/components/resturant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "react-native-paper";

const FavouriteRestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea>
      <FavouriteRestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestuarantInfo restuarant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
