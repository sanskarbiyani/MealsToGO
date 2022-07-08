import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  position: absolute;
  z-index: 990;
  top: 50px;
  width: 92%;
  left: 4%;
  border-radius: 5px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Search Location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          // if (!text.length) {
          //   return;
          // }
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
