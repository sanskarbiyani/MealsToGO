import React, { useContext, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";
import { IconButton, Colors } from "react-native-paper";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraContainer = styled.View`
  height: 90%;
`;

const ButtonTab = styled.View`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  justify-content: center;
  background-color: #f5f5f4;
`;

const MainContainer = styled.View`
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPersmission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = useRef();
  const { onProfileImageUpdate } = useContext(AuthenticationContext);

  const handleShuttleClick = async () => {
    if (cameraReady) {
      const image = await cameraRef.current.takePictureAsync();
      onProfileImageUpdate(image.uri);
      navigation.goBack();
    } else {
      console.log("Camera Not Ready.");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPersmission === null) {
    return <View />;
  }
  if (hasPersmission === false) {
    return (
      <View>
        <Text variant="error">Permission not granted to access internet</Text>
      </View>
    );
  }

  return (
    <MainContainer>
      <Camera
        type={type}
        onCameraReady={() => {
          if (!cameraReady) {
            setCameraReady(true);
          }
        }}
        ref={(camera) => (cameraRef.current = camera)}
        // onFacesDetected={(results) => {
        //   console.log("Face Detected at: ", results);
        // }}
      >
        <CameraContainer />
      </Camera>
      <ButtonTab>
        <IconButton
          icon="camera-flip-outline"
          size={40}
          iconColor={Colors.white}
          mode="contained"
          containerColor={Colors.green200}
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
        <IconButton
          icon="camera"
          size={40}
          mode="contained"
          iconColor="#FFFFFF"
          containerColor="#9C9C9C"
          onPress={handleShuttleClick}
        />
      </ButtonTab>
    </MainContainer>
  );
};
