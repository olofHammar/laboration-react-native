import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 1.01,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1.01,
  },
  userInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    paddingStart: 8,
  },
  description: {
    marginVertical: 10,
    lineHeight: 18,
    letterSpacing: 1.01,
  },
});

export default styles;
