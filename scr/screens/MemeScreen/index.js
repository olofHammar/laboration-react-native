import React, { useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import MemeContainer from "../../components/MemeContainer";

const MemeScreen = () => {
  const [memeList, setMemeList] = useState([]);

  const getMemesFromApi = () => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(({ data }) => {
        setMemeList(data.data.memes);
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.root}>
      <CustomButton
        text={"Get memes"}
        onPress={() => getMemesFromApi()}
        rootContainerStyles={{
          width: "90%",
          color: "#fff",
        }}
        textContainerStyle={{
          color: "white",
          fontWeight: "bold",
        }}
      />
      <FlatList
        data={memeList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            <MemeContainer
              id={item.id}
              name={item.name}
              url={item.url}
              width={item.width}
              height={item.height}
              box_count={item.box_count}
            />
          </View>
        )}
      />
    </View>
  );
};

export default MemeScreen;