import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import HomeScreen from "../../screens/HomeScreenFolder/HomeScreen";
import MemeScreen from "../../screens/MemeScreenFolder/MemeScreen";
import { useWindowDimensions } from "react-native";

const TabNavigation = () => {
  const HomeRoute = () => HomeScreen();
  const MemesRoute = () => MemeScreen();
  const windowWidth = useWindowDimensions().width;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "memes", title: "Memes", icon: "album" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    memes: MemesRoute,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "gray" }}
      style={{ width: windowWidth }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TabNavigation;
