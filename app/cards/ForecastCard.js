import React, { useState } from "react";
import Colours from "../static/Colours";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const ForecastCard = ({ navigation, data, image, measurement }) => {
  return (
    <TouchableHighlight
      style={styles.rowCard}
      activeOpacity={0.6}
      underlayColor="Colour"
      // onPress={() => alert("Pressed forecast")}
      onPress={() => navigation.push("SelectedBeachFuture")}
    >
      <View style={styles.rowCard}>
        {image}
        <View
          style={{
            flexDirection: "column",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.newsTitle}>{data}</Text>
          <Text>{measurement}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowCard: {
    flexDirection: "row",
    alignContent: "flex-end",
    height: 100,
    width: "100%",
    backgroundColor: Colours.lightGray,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  newsTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  beachLogo: {
    width: "35%",
    height: 100,
  },
});

export default ForecastCard;
