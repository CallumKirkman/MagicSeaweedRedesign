import React from "react";
import Style from "../static/Style";

import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SurfTopNav from "./SurfTopNav";
import LiveTopNav from "./LiveTopNav copy";
import Settings from "../screens/Settings";
import Colours from "../static/Colours";
import { ColorPropType } from "react-native";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    // <Tab.Navigator
    //   initialRouteName="SurfTopNav"
    //   screenOptions={{ headerShown: false }}
    // >
    //   <Tab.Screen name="LiveTopNav" component={LiveTopNav} />
    //   <Tab.Screen name="SurfTopNav" component={SurfTopNav} />
    //   <Tab.Screen name="Settings" component={Settings} />
    // </Tab.Navigator>

    <Tab.Navigator
      initialRouteName="SurfTopNav"
      activeColor="#fff"
      screenOptions={{
        headerShown: false,
        activeTintColor: Colours.offWhite,
        inactiveTintColor: Colours.blue,
        style: { backgroundColor: Colours.white },
      }}
      shifting="false"
    >
      <Tab.Screen
        name="LiveTopNav"
        options={{
          tabBarLabel: "Live",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bar-graph" color={color} size={30} />
          ),
        }}
        component={LiveTopNav}
      />
      <Tab.Screen
        name="SurfTopNav"
        options={{
          tabBarLabel: "Surf",
          tabBarIcon: ({ color }) => (
            <Entypo name="location-pin" color={color} size={35} />
          ),
        }}
        component={SurfTopNav}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={30} />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default function BottomNav() {
  return <BottomTabs />;
}
