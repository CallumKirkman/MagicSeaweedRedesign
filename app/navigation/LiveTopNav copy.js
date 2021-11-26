import React from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";

import LiveMap from "../screens/LiveMap";
import LiveList from "../screens/LiveList";

const Tab = createMaterialTopTabNavigator();

function LiveTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={LiveMap} />
      <Tab.Screen name="List" component={LiveList} />
    </Tab.Navigator>
  );
}

export default function LiveTopNav() {
  return <LiveTabs />;
}

const styles = StyleSheet.create({});
