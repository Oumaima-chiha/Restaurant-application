import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Display } from "../utils";

export default function RestaurantCard({ restaurant }) {
  const { name, image, category, rating, status } = restaurant;

  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardCategory}>{category}</Text>
      <Text style={styles.cardRating}>{`Rating: ${rating}`}</Text>
      <Text style={styles.cardStatus}>{status}</Text>
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
