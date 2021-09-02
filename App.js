import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TabNavigation from "./scr/components/navigationFolder/tabNavigation";
import { MyGlobalContext } from "./scr/globalContext"

export default function App() {
  const [copy, setCopy] = useState("...");

  return (
    <MyGlobalContext.Provider value={{ copy, setCopy }}>
    <View style={styles.container} id="main_screen">
      <TabNavigation />
    </View>
  </MyGlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
