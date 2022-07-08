import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import {
  RestuarantCard,
  RestuarantCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  OpenNow,
  Icon,
} from "./restaurant-info-card.styles";

export const RestuarantInfo = ({ restuarant = {} }) => {
  const {
    name = "Some Restuarant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemp = true,
    placeId,
  } = restuarant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestuarantCard elevation={12}>
      <Favourite restaurant={restuarant} />
      <RestuarantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title"> {name} </Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`start-${placeId}-${index}`}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemp && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenNow xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address> {address} </Address>
      </Info>
    </RestuarantCard>
  );
};
