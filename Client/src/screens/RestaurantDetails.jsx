import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { Display } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

export default function RestaurantDetails({ route }) {
  const {
    name,
    main_image,
    rating,
    description,
    menu_images,
    opening_time,
    closing_time,
  } = route.params.restaurant;
  console.log(route.params.restaurant);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image source={{ uri: main_image }} style={styles.image} />
        </View>

        <View style={styles.iconContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}></Text>
          <Button title="Menu" onPress={() => navigation.navigate("")} >

          <Text style={styles.InfoTitle}>{description}</Text> 
         {menu_images.map((menuImage, index) => (
            <Image
              key={index}
              source={{ uri: menuImage }}
              style={styles.menuImage}
            />
          ))}
          </Button>
          <Text style={styles.rating}>{`Rating: ${rating}`}</Text>
          <Text
            style={styles.openingHours}
          >{`Opening Hours: ${opening_time} - ${closing_time}`}</Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
          <Button title="Make A reservation " onPress={() => navigation.navigate("ReservationListScreen")} />
     
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 150,
    paddingVertical: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 250,
  },
  name: {
  
    color: "White",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    color: "gray",
  },
  description: {
    color: "gray",
  },
  menuImage: {
    height: 100,
    width: "80%",
  },
  rating: {
    color: "gray",
  },
  openingHours: {
    color: "gray",
  },
  iconContainer: {
    height: 200,
    width: 500,
    margin: 30,
    padding: 30,
    display: "flex",
    borderRadius: 80,
  },

});
