import React from 'react';
import Style from '../static/Style';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';


import Surf from '../screens/Surf';
import LiveData from '../screens/LiveData';
import Setting from '../screens/Settings';


const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Surf} />
      <Tab.Screen name="Live" component={LiveData} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}


export default function BottomNav() {
    return (
      <NavigationContainer style={Style.container}>
        <View style={Style.menu}></View>
        <BottomTabs/>
      </NavigationContainer>
    );
}