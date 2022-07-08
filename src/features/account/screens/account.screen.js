import React, { useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AnimationWrapper,
} from "../components/accounts.style";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const AccountScreen = ({ navigation }) => {
  const { checkUser } = useContext(AuthenticationContext);
  return checkUser ? (
    <LoadingView>
      <Loading size="40" animating={true} color={Colors.blue300} />
    </LoadingView>
  ) : (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/Watermelon.json")}
        />
      </AnimationWrapper>
      <Spacer size="large">
        <Text variant="heading">Meals To Go</Text>
      </Spacer>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
