import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperLogo: {
    height: Dimensions.get("window").height/3,
    width: '100%',
    justifyContent: 'center',
    paddingTop: 90,
    alignItems: "center",
    gap: "15%"
  },
  logo: {
    width: 80,
    height: 80,
  },
  wrapperLogin: {
    height: Dimensions.get("window").height/4,
    width: '100%',
    padding: 40,
    margin: 0,
  },
  wrapperButton: {
    height: Dimensions.get("window").height/3,
    width: '100%',
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  titlePsw: {
    paddingTop: 20
  },
  titleInput: {
    color: themes.colors.gray,
    textTransform: 'uppercase',
  },
  wrapperInput: {
      width: '100%',
      height: 40,
      marginTop: 10,
      borderRadius: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 5,
      backgroundColor: themes.colors.bgScreem,
      borderWidth: 1,
      borderColor: themes.colors.lightGray,

  },
  input: {
    width: '90%',
    height: '100%',
    borderRadius: 40,
  },
  button: {
    backgroundColor: themes.colors.primary,
    width: 200,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonTxt: {
    color: themes.colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
  createAcct: {
    color: themes.colors.gray,
  }

}) 