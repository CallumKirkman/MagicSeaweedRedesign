import React from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { StyleSheet, Text, View, Image } from "react-native";

export default function Settings() {
  return (
    <View styles={Style.container}>
      <Image source={require("../assets/settings.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
