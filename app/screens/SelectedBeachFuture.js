import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import CurrentCard from "../cards/CurrentCard";
import FutureCard from "../cards/FutureCard";
import Colours from "../static/Colours";

const times = [
  {
    id: "12am",
    title: "12am",
  },
  {
    id: "3am",
    title: "3am",
  },
  {
    id: "6am",
    title: "6am",
  },
  {
    id: "9am",
    title: "9am",
  },
  {
    id: "12pm",
    title: "12pm",
  },
  {
    id: "3pm",
    title: "3pm",
  },
  {
    id: "6pm",
    title: "6pm",
  },
  {
    id: "9pm",
    title: "9pm",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const MenuItem = (props) => {
  return <Text style={styles.menuItem}>{props.children}</Text>;
};

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Bournemouth Pier</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <MenuItem>Monday</MenuItem>
      </View>
    </View>
  );
};

const SelectedBeachFuture = () => {
  return (
    <View style={styles.container}>
      <Menu />

      <ScrollView style={styles.scrollContainer}>
        <CurrentCard data={"All Day"} />

        <FutureCard
          time={"12am          "}
          swellHeight={"1ft          "}
          swellFrequecy={"8s            "}
          swellDirection={"NE            "}
          windSpeed={"4mph            "}
          windDirection={"NE"}
        />
        <FutureCard
          time={"3am            "}
          swellHeight={"0.8ft       "}
          swellFrequecy={"5s            "}
          swellDirection={"NE            "}
          windSpeed={"3mph            "}
          windDirection={"NE"}
        />
        <FutureCard
          time={"6am            "}
          swellHeight={"0.5ft       "}
          swellFrequecy={"9s             "}
          swellDirection={"N             "}
          windSpeed={"2mph             "}
          windDirection={"N"}
        />
        <FutureCard
          time={"9am            "}
          swellHeight={"0.9ft       "}
          swellFrequecy={"6s             "}
          swellDirection={"N             "}
          windSpeed={"5mph             "}
          windDirection={"N"}
        />
        <FutureCard
          time={"12pm          "}
          swellHeight={"2ft          "}
          swellFrequecy={"6s            "}
          swellDirection={"NW           "}
          windSpeed={"9mph            "}
          windDirection={"NE"}
        />
        <FutureCard
          time={"3pm           "}
          swellHeight={"1.2ft        "}
          swellFrequecy={"8s            "}
          swellDirection={"W              "}
          windSpeed={"4mph            "}
          windDirection={"W"}
        />
        <FutureCard
          time={"6pm           "}
          swellHeight={"0.6ft        "}
          swellFrequecy={"8s            "}
          swellDirection={"W              "}
          windSpeed={"3mph           "}
          windDirection={"SW"}
        />
        <FutureCard
          time={"9pm           "}
          swellHeight={"0.6ft        "}
          swellFrequecy={"8s            "}
          swellDirection={"S               "}
          windSpeed={"7mph            "}
          windDirection={"S"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    // padding: 5,
    // alignItems: "center",
    // justifyContent: "center",
  },
  scrollContainer: {
    backgroundColor: "lightgray",
    flex: 1,
    width: "100%",
    padding: 10,
    paddingEnd: 10,
    paddingVertical: 5,
  },
  menu: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  menuItem: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  title: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    backgroundColor: Colours.mediumGray,
    // padding: 20,
    marginVertical: 2,
    marginHorizontal: 2,
    width: 60,
  },
});

export default SelectedBeachFuture;
