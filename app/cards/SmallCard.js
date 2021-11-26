import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const SmallCard = ({ data, image, measurement }) => {
  return (
    <TouchableHighlight
      style={styles.columnCard}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Full Information")}
    >
      <View>
        {image}
        <View
          style={{
            flexDirection: "column",
            padding: 5,
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
  columnCard: {
    flexDirection: "column",
    alignContent: "flex-end",
    height: 150,
    flex: 1,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 2.5,
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
    height: 100,
  },
});

export default SmallCard;
