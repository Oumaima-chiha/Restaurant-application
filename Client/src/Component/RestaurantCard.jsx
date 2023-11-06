import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Display } from "../utils";
import moment from "moment" ;
import Icon from 'react-native-vector-icons/FontAwesome';
export default function RestaurantCard({ restaurant, onPress }) {

  const { name, main_image, category, opening_time,  closing_time,rating, status, City } = restaurant;
  const handleButtonPress = () => {
    onPress(restaurant)
  };

  const spaced = category.toString().split(',').join('  ')

  return (
    <TouchableOpacity onPress={handleButtonPress}>
    <View style={styles.cardContainer}>
      <Image source={{ uri: main_image.trim() }} style={styles.cardImage} />
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardCategory}>{spaced}</Text>
      <View style={styles.cardRating}>
      <Text style={styles.cardRating}><Icon name="star" size={15} color="#dea84a" />4.5</Text>
      </View>
      <Text style={styles.cardCategory}>
        Opens: {moment(opening_time).format('LT')} - Closes: {moment(closing_time).format('LT')}
      </Text>
      <Text style={styles.cardStatus}>Open</Text>
    </View>
  </TouchableOpacity>
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
    marginLeft: 300,
    flex: 1,
    fontSize: 16,
  },
  cardCategory: {
    color: 'gray',
  },
});
