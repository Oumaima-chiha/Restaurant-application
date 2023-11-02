import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Display } from "../utils";




export default function RestaurantCard({ restaurant, navigation }) {

  const handleButtonPress = () => {
    navigation.navigate("Logo")
  };


  const { name, main_image, category, rating, status  } = restaurant;

  return (
      < View style={styles.cardContainer} onPress={handleButtonPress}>
      <Image source={{uri:main_image}} style={styles.cardImage}  />
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardCategory}>{category}</Text>
      <Text style={styles.cardRating}>{`Rating: ${rating}`}</Text>
      </View>

  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  cardImage: {
    height:Display.setHeight(20),
    width:Display.setWidth(90),
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardRating: {
    color: 'gray',
  },
  cardStatus: {
    color: 'green',
    paddingLeft: 300,
    
  },
  cardCategory: {
    color: 'gray',
  }
});
