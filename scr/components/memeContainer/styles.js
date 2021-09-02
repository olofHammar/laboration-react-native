import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 5,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    padding: 12,
  },
});

export default styles;
