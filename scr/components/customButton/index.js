import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";

const CustomButton = ({
  text,
  onPress,
  rootContainerStyles,
  textContainerStyle,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, rootContainerStyles]}>
      <Text style={[styles.text, textContainerStyle]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
