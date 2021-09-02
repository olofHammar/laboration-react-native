import React from "react";
import { View, Text } from "react-native";
import welcomeData from "../../data/welcomeData";
import styles from "./styles";
import { useGlobalContext } from "../../globalContext";

const WelcomeContainer = () => {
  const { copy } = useGlobalContext();

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{welcomeData.title}</Text>

      <Text style={styles.description}>{welcomeData.description}</Text>

      <Text style={styles.myOpinion}>
        {welcomeData.myOpinion}
        {copy}
      </Text>
    </View>
  );
};

export default WelcomeContainer;
