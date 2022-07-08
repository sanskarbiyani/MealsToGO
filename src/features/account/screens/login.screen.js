import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  LoginInput,
  AuthButton,
} from "../components/accounts.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Spacer size="small">
        <Text variant="heading"> Meals To Go </Text>
      </Spacer>
      <Spacer size="small" position="bottom">
        <Text variant="subHeading"> Login </Text>
      </Spacer>
      <AccountContainer>
        <Spacer size="large">
          <LoginInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </Spacer>
        <Spacer size="large">
          <LoginInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error"> {error} </Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          icon="backburger"
          mode="contained"
          onPress={() => navigation.goBack()}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
