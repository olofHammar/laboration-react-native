import React, { useState, createRef } from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";
import welcomeData from "../../data/welcomeData";
import CustomButton from "../../components/customButton";
import ImageCarousel from "../../components/imageCarousel";
import WelcomeContainer from "../../components/welcomeContainer";
import { useGlobalContext } from "../../globalContext";

const HomeScreen = () => {
  const [input, setInput] = useState("");
  const { setCopy } = useGlobalContext();
  const inputRef = createRef();
  const [testInput, setTestInput] = useState("");

  const updateGlobalTitle = (newTitle) => {
    setCopy(newTitle);
    setTestInput(newTitle);
    updateSearchText();
  };

  const updateSearchText = () => {
    if (null !== inputRef.current) {
      inputRef.current.clear();
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title} testID="homeTitle">
        Memes App
      </Text>
      <Text style={{opacity: 0, height: 0}} testID="testInputText">{testInput}</Text>

      <ImageCarousel images={welcomeData.images} />

      <WelcomeContainer />

      <TextInput
        testID="userInputText"
        ref={inputRef}
        style={styles.userInput}
        placeholder="Enter what you think of memes...."
        onChangeText={(input) => setInput(input)}
        defaultValue={input}
      />

      <CustomButton
        testID={"userInputBtn"}
        text={"Update My Opinion"}
        onPress={() => updateGlobalTitle(input)}
      />
    </View>
  );
};

export default HomeScreen;
