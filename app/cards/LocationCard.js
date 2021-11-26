import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const HeadlineCard = ({ data }) => {
  return (
    <TouchableHighlight
      style={styles.headlineCard}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Further Information")}
    >
      <View>
        <Image
          style={styles.beachLogo}
          source={require("../assets/goodSurf.png")}
        />

        <View
          style={{
            flexDirection: "column",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.largeNewsTitle}>{data}</Text>
          <Text>Flat surf conditions</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  headlineCard: {
    flexDirection: "column",
    alignContent: "flex-end",
    height: 200,
    width: "100%",
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
  },
  largeNewsTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  beachLogo: {
    width: "100%",
    height: "65%",
  },
});

export default HeadlineCard;
