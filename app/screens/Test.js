import "react-native-gesture-handler";
import React from "react";
import { Button, Text } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen: SearchScreen, Navigator: SearchNavigator } =
  createStackNavigator();

const Search = () => {
  const { navigate } = useNavigation();

  const goToStats = () =>
    navigate("StatsStack", {
      screen: "Stats",
      params: {
        foo: "bar",
      },
    });

  return <Button onPress={goToStats} title="Go to stats" />;
};

const SearchStack = () => (
  <SearchNavigator>
    <SearchScreen component={Search} name="Search" />
  </SearchNavigator>
);

const { Screen: StatsScreen, Navigator: StatsNavigator } =
  createStackNavigator();

const Stats = () => {
  const { params } = useRoute();

  return <Text>{params.foo}</Text>;
};

const StatsStack = () => (
  <StatsNavigator>
    <StatsScreen component={Stats} name="Stats" />
  </StatsNavigator>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={SearchStack} name="SearchStack" />
      <Tab.Screen component={StatsStack} name="StatsStack" />
    </Tab.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
);
