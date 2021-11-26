import React, { useState } from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image } from "react-native";

import BottomNav from "./BottomNav";
import LocationTopNav from "./LocationTopNav";
import SelectedBeachFuture from "../screens/SelectedBeachFuture";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => (
          <Image
            style={{ width: 80, height: 60 }}
            source={require("../assets/logo.png")}
          />
        ),
      }}
    >
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="LocationTopNav" component={LocationTopNav} />
      <Stack.Screen
        name="SelectedBeachFuture"
        component={SelectedBeachFuture}
      />
      {/* options={({ route }) => ({ title: route.params.name })} // Make this work - week 5 */}
    </Stack.Navigator>
  );
}

export default function SurfStackNav() {
  return (
    <NavigationContainer style={Style.container}>
      <View style={Style.menu}></View>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
