import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const FutureCard = ({
  time,
  swellHeight,
  swellFrequecy,
  swellDirection,
  windSpeed,
  windDirection,
}) => {
  return (
    <TouchableHighlight
      style={styles.rowCard}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert("Secondary information")}
    >
      <View style={styles.rowCard}>
        <Text style={styles.title}>
          {time}
          {swellHeight}
          {swellFrequecy}
          {swellDirection}
          {windSpeed}
          {windDirection}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowCard: {
    flexDirection: "row",
    alignContent: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 5,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default FutureCard;
