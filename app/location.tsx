import { View, Image, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import { router } from "expo-router";

const Location = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView
      style={{
        paddingTop: 80,
        flex: 1,
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -height / 1.35,
          height: height,
          width: width * 1.5,
          borderBottomLeftRadius: 500,
          borderBottomRightRadius: 500,
          backgroundColor: "#000",
        }}
      ></View>
      <Image
        style={{
          width: width * 0.7,
          height: width * 0.7,
        }}
        source={require("@/assets/images/location.png")}
      />
      <Text
        variant="titleLarge"
        style={{
          fontWeight: "bold",
          marginVertical: 50,
        }}
      >
        Location Services
      </Text>
      <Text
        variant="bodyMedium"
        style={{
          textAlign: "center",
          marginHorizontal: 50,
        }}
      >
        Get the best recommendations of things to do near you ! Oloha will need
        to enable location services to this.
      </Text>

      <Button
        mode="contained"
        buttonColor="black"
        style={{
          marginVertical: 50,
        }}
        onPress={() => router.replace("/notification")}
      >
        Turn On Location
      </Button>
    </SafeAreaView>
  );
};

export default Location;
