import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions , FlatList ,ScrollView} from 'react-native';
import { Colors, Images } from "../contants";

export default function RestaurantDetails({ }) {
  return (
    <ScrollView
    vertical
    style={styles.container}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrollViewFlex}
  >
<Image source={Images.TEST} style={styles.image} />
      <Text style={styles.name}>restaurant name</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlackHex,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 250, 
  },
  name:{
    color:Colors.DEFAULT_WHITE
  }
});
