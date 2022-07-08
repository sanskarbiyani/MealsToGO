import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

export const RestuarantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestuarantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.sizes[1]} ${(props) => props.theme.sizes[0]};
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body}
    font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OpenNow = styled(SvgXml)`
  width: 20px;
  height: 20px;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
