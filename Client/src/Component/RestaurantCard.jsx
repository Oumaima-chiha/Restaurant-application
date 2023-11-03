import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import { Display } from "../utils";




export default function RestaurantCard({ restaurant, onPress  }) {


  const { name, main_image, category, rating, status  } = restaurant;

  return (
    <TouchableOpacity onPress={onPress}>
      < View style={styles.cardContainer} >
      <Image source={{uri:main_image.trim()}} style={styles.cardImage}  />
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardCategory}>{category}</Text>
      <Text style={styles.cardRating}>{`Rating: ${rating}`}</Text>
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
