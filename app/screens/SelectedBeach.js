import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import SmallCard from "../cards/SmallCard";
import CurrentCard from "../cards/CurrentCard";
import LocationCard from "../cards/LocationCard";

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
        <MenuItem>Current</MenuItem>
      </View>
    </View>
  );
};

const SelectedBeach = () => {
  return (
    <View style={styles.container}>
      <Menu />
      <ScrollView style={styles.scrollContainer}>
        <LocationCard data={"Bournemouth pier"} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SmallCard
            data={"Wave Height"}
            image={
              <Image
                style={styles.icon}
                source={require("../assets/blueWave.png")}
              />
            }
            measurement={"2ft"}
          />
          <SmallCard
            data={"Wind speed"}
            image={
              <Image
                style={styles.icon}
                source={require("../assets/windSpeed.png")}
              />
            }
            measurement={"4mph"}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <SmallCard
            data={"Wave direction"}
            image={
              <Image
                style={styles.icon}
                source={require("../assets/arrow.png")}
              />
            }
            measurement={"SW"}
          />
          <SmallCard
            data={"Wind direction"}
            image={
              <Image
                style={styles.icon}
                source={require("../assets/arrow.png")}
              />
            }
            measurement={"S"}
          />
        </View>

        <CurrentCard />
        {/* <CurrentCard articleNumber={7} data={"Graph?"} /> */}
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
    width: "65%",
    height: "65%",
    alignSelf: "center",
  },
});

export default SelectedBeach;
