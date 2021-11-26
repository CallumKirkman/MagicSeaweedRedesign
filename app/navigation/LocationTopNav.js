import React from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";

import SelectedBeach from "../screens/SelectedBeach";
import SelectedBeachForecast from "../screens/SelectedBeachForecast";

const Tab = createMaterialTopTabNavigator();

function LocationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={SelectedBeach} />
      <Tab.Screen name="Forecast" component={SelectedBeachForecast} />
    </Tab.Navigator>
  );
}

export default function LocationTopNav() {
  return <LocationTabs />;
}

const styles = StyleSheet.create({});
