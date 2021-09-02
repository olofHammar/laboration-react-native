import React from "react";
import { View, Image, FlatList } from "react-native";
import styles from "./styles";

const ImageCarousel = ({ images }) => {
  const windowWidth = 375;

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={[styles.image, { width: windowWidth - 30 }]}
            source={{ uri: item }}
            key={item.id}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 10}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default ImageCarousel;
