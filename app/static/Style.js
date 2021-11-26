import { StyleSheet } from "react-native";
import Colours from "./Colours";

export default StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    height: 45,
    backgroundColor: Colours.blue,
  },
  cardMenu: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  scrollContainer: {
    backgroundColor: "lightgray",
    flex: 1,
    width: "100%",
    padding: 10,
    paddingEnd: 10,
    paddingVertical: 5,
  },
  menuItem: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  cardTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
