import React, { useState } from "react";
import Style from "../static/Style";
import Colours from "../static/Colours";

import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const FavouriteLocations = [
  {
    id: "F1",
    title: "Bournemouth Pier",
  },
  {
    id: "F2",
    title: "Boscombe Pier",
  },
  {
    id: "F3",
    title: "Sandbanks beach",
  },
];

const NearbyLocations = [
  {
    id: "1",
    title: "Boscombe Pier",
  },
  {
    id: "2",
    title: "Bournemouth Pier",
  },
  {
    id: "3",
    title: "Castle Cove",
  },
  {
    id: "4",
    title: "Chapman's Pool",
  },
  {
    id: "5",
    title: "Charmouth",
  },
  {
    id: "6",
    title: "Charmouth West",
  },
  {
    id: "7",
    title: "Chesil Cove",
  },
  {
    id: "8",
    title: "Bowleaze Cove",
  },
  {
    id: "9",
    title: "Branksome Chine Poole",
  },
];

let UsedLocations = [];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function SurfList({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("Nearby");

  if (selectedValue == "Nearby") {
    UsedLocations = NearbyLocations;
  } else {
    UsedLocations = FavouriteLocations;
  }

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColour =
      item.id === selectedId ? Colours.darkGray : Colours.lightGray;
    const colour = item.id === selectedId ? Colours.white : Colours.black;

    return (
      <Item
        item={item}
        onPress={() => {
          // navigation.push("SelectedBeach", { beachName: "Test" });
          navigation.push("LocationTopNav", {
            screen: "SelectedBeach",
            params: { beachName: "Test" },
          });
        }}
        backgroundColor={{ backgroundColor: backgroundColour }}
        textColor={{ color: colour }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Nearby" value="Nearby" />
        <Picker.Item label="Favourites" value="Favourites" />
      </Picker>

      <FlatList
        data={UsedLocations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListEmptyComponent={
          <Text style={styles.listEmpty}>This list is currently empty</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
  },
  listEmpty: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 70,
  },
});
