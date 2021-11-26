import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const CurrentCard = ({ data }) => {
  return (
    <TouchableHighlight
      style={styles.rowCard}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Graph Information")}
    >
      <View style={styles.rowCard}>
        <Image
          style={styles.beachLogo}
          source={require("../assets/graph.jpg")}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowCard: {
    flexDirection: "row",
    alignContent: "center",
    height: 100,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 5,
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
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default CurrentCard;
