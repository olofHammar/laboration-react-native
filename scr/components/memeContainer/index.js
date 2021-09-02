import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const MemeContainer = ({ id, name, url, width, height, box_count }) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: url }}></Image>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default MemeContainer;