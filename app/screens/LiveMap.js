import React from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { StyleSheet, Text, View, Image } from "react-native";

export default function LiveMap() {
  return (
    <View styles={styles.container}>
      <Image source={require("../assets/liveMap.jpg")} style={styles.image} />
      <View style={styles.box}>
        <Text style={styles.location}>Bournemouth</Text>
      </View>
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
    height: "80%",
    width: "100%",
    marginTop: 10,
  },
  box: {
    height: 80,
    width: "80%",
    marginTop: 15,
    backgroundColor: "white",
    alignSelf: "center",
  },
  location: {
    alignSelf: "center",
    paddingTop: 10,
    fontSize: 32,
  },
});
