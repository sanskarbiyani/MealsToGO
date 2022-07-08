import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native";
import { RestuarantInfo } from "../components/resturant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { Search } from "../components/search.components";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const RestraurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestuarantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const [toggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <Search
        isFavouriteToggled={toggled}
        onFavouriteToggled={() => setIsToggled(!toggled)}
      />
      {toggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading && (
        <LoadingView>
          <Loading size="40" animating={true} color={Colors.blue300} />
        </LoadingView>
      )}
      <RestraurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestuarantInfo restuarant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
