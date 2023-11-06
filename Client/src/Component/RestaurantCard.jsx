import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Display } from "../utils";

export default function RestaurantCard({ restaurant, onPress }) {

  const { name, main_image, category, rating, status, City } = restaurant;
  const handleButtonPress = () => {
    onPress(restaurant)
    console.log(restaurant)
  };

  const spaced = category.toString().split(',').join('  ')

  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: main_image.trim() }} style={styles.cardImage} />
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardCategory}>{spaced}</Text>
        <Text style={styles.cardRating}>{`Rating: ${'4.0'}`}</Text>

        <Text style={styles.cardStatus}>{'Open'}</Text>


      </View>
    </TouchableOpacity  >
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
    height: Display.setHeight(20),
    width: Display.setWidth(90),
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardRating: {
    color: 'gray',
  },
  cardCity: {
    color: 'gray',
  },
  cardStatus: {
    color: 'green',
    marginLeft: 320,
    flex: 1,
    fontSize: 16,
  },
  cardCategory: {
    color: 'gray',
  },
});
