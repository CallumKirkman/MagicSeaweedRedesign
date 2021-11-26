import React, { useState } from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import SmallCard from "../cards/SmallCard";
import ForecastCard from "../cards/ForecastCard";
import LocationCard from "../cards/LocationCard";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

const MenuItem = (props) => {
  return <Text style={styles.menuItem}>{props.children}</Text>;
};

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Bournemouth pier</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <MenuItem>Forecast</MenuItem>
      </View>
    </View>
  );
};

const SelectedBeachForecast = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView style={styles.scrollContainer}>
        <LocationCard data={"Bournemouth pier"} />

        <ForecastCard
          data={"Monday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/goodSurf.png")}
            />
          }
          measurement={"Good surf conditions"}
        />
        <ForecastCard
          data={"Tueaday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/flatSurf.png")}
            />
          }
          measurement={"Flat surf conditions"}
        />
        <ForecastCard
          data={"Wednesday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/flatSurf.png")}
            />
          }
          measurement={"Flat surf conditions"}
        />
        <ForecastCard
          data={"Thursday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/badSurf.png")}
            />
          }
          measurement={"Choppy surf conditions"}
        />
        <ForecastCard
          data={"Friday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/goodSurf.png")}
            />
          }
          measurement={"Good surf conditions"}
        />
        <ForecastCard
          data={"Saturday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/badSurf.png")}
            />
          }
          measurement={"Bad surf conditions"}
        />
        <ForecastCard
          data={"Sunday"}
          navigation={navigation}
          image={
            <Image
              style={styles.icon}
              source={require("../assets/flatSurf.png")}
            />
          }
          measurement={"Flat surf conditions"}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
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
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    width: "35%",
    height: 100,
  },
});

export default SelectedBeachForecast;
