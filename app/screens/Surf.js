import React from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from "react-native";

import SurfMap from "./SurfMap";
import SurfList from "./SurfList";


const Tab = createMaterialTopTabNavigator();

function SurfTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={SurfMap} />
      <Tab.Screen name="List" component={SurfList} />
    </Tab.Navigator>
  );
}

export default function Surf() {
    return (
        <SurfTabs></SurfTabs>
    );
}

const styles = StyleSheet.create({});