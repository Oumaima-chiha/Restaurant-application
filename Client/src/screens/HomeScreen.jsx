import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Colors } from "../contants";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../Component/RestaurantCard";
import { useEffect } from "react";




export default function HomeScreen({ navigation, route }) {

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;


  const [restaurant, setRestaurant] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://${apiUrl}:3000/api/restaurants`);
      if (response.ok) {
        const data = await response.json();
        setRestaurant(data);

      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    fetchData()

    console.log('aaaa')



  }, [])







  const handleButtonPress = (restaurant) => {
    navigation.navigate("RestaurantDetails", { restaurant });
    console.log(restaurant)
  };


  return (
    <ScrollView
      vertical
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewFlex}
    >
      <View>
        <View>
          <Text style={styles.screenTitle}>
            Find the best{"\n"}restaurant near you.
          </Text>
        </View>
        <View style={styles.InputContainer}>
          <TouchableOpacity onPress={() => { }}>
            <AntDesign
              name="search1"
              size={24}
              color={Colors.DEFAULT_RED}
              style={styles.search}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find a restaurant..."
            placeholderTextColor={Colors.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}
        >
          <View style={styles.ActiveCategory}>
            <TouchableOpacity style={styles.CategoryStyleView}>
              <Text style={styles.CategoryText}>category 1</Text>

            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <ScrollView vertical>
        {
          restaurant.map((rest) => (
            <View key={rest.id} >
              <RestaurantCard restaurant={rest} onPress={(restaurant) => handleButtonPress(restaurant)} />
            </View>
          ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_BLACK,
  },
  screenTitle: {
    fontSize: 25,
    color: Colors.primaryWhiteHex,
    paddingLeft: 30,
    top: 100,
  },
  TextInputContainer: {
    height: 20 * 2,
    width: 300,
  },
  InputContainer: {
    flexDirection: "row",
    margin: 30,
    borderRadius: 10,
    backgroundColor: "#A9A9A9",
    alignItems: "center",
    top: 100,
    marginBottom: 110,
  },
  search: {
    marginHorizontal: 10,
  },
  scrollViewFlex: {

  },
  CategoryScrollViewStyle: {
    paddingHorizontal: 10,
  },
  ActiveCategory: {
    flexDirection: "row",
    marginBottom: 20,
  },
  CategoryText: {
    color: Colors.primaryWhiteHex,
    margin: 10,
    padding: 10,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  CategoryStyleView: {
    flex: 1,
    display: "grid"
  },
});
