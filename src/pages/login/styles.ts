import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperLogo: {
    height: Dimensions.get("window").height/3,
    justifyContent: "center",
    alignItems: "center",
    gap: "15%"

  },
  wrapperLogin: {
    height: Dimensions.get("window").height/4,

  },
  wrapperButton: {

  }
}) 