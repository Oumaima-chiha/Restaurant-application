import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal
} from "react-native";
import { Display } from "../utils";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { Colors } from '../contants';
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";


export default function RestaurantDetails({ route }) {

  const [showForm, setShowForm] = useState(false)
  const [reservation, setReservation] = useState({ date: new Date(Date.now()), time: '', guest_number: 0 })


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


  const handleChange = (e) => {

    const value = e.target.value
    const name = e.target.name

    setReservation({ ...reservation, [name]: value })


  }

  const toggleForm = () => {

    setShowForm(!showForm)
  }

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
        {showForm && <Modal transparent={true} visible={true} >
          <TouchableOpacity style={{ backgroundColor: '#000000aa', flex: 1 }} onPress={toggleForm}>

            <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, top: 250, height: 250 }}
            >

              <Text style={{ fontSize: 25 }}>Date</Text>
              <DateTimePicker
                mode="date"
                value={new Date()}
                placeholder="select date"

                onChange={handleChange}
              />
              <Text style={{ fontSize: 25 }}>Time</Text>
              <DateTimePicker
                value={new Date()}
                mode="time"
                placeholder="select time"
                onChange={handleChange}
              />
              <Text style={{ fontSize: 25 }}>Guests</Text>
              <TextInput
                name="guest_number"
                keyboardType="number"
                onChange={handleChange}
              />


            </View>

          </TouchableOpacity>


        </Modal>}

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
          <Button title="Make A reservation " onPress={toggleForm} />
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
  // textInputDatePickerPlaceHolder: {
  //   fontFamily: "IBMPlexSans-Regular",
  //   color: "#6f7482",
  //   fontSize: 16,
  // },
  // textInputDatePickerValue: {
  //   position: "absolute",
  //   left: 44,
  //   top: 35,
  //   width: 318,
  //   height: 68,
  // },
  // textInputDatePicker1PlaceHolder: {
  //   fontFamily: "IBMPlexSans-Regular",
  //   color: "#6f7482",
  //   fontSize: 16,
  // },
  // textInputDatePicker1Value: {
  //   position: "absolute",
  //   left: 44,
  //   top: 131,
  //   width: 318,
  //   height: 73,
  // },
  selectValue: {
    color: "#6f7482",
    fontSize: 16,
    fontFamily: "IBMPlexSans-Regular",
  },
  selectLayout: {
    height: 68,
    width: 318,
    left: 44,
    position: "absolute",
  },
  confirmFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    top: 35,
  },
  textInput1: {
    top: 131,
    height: 73,
    width: 318,
    left: 44,
    position: "absolute",
  },
  select: {
    top: 231,
    overflow: "hidden",
  },
  confirm: {
    fontSize: FontSize.paragraphIBMPlexSansRegular_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    width: 87,
  },
  confirmWrapper: {
    top: 340,
    left: 139,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorRed,
    width: 123,
    height: 55,
    flexDirection: "row",
    paddingHorizontal: Padding.p_119xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
    alignItems: "center",
  },
  framePop: {
    backgroundColor: "#131313",
    width: 402,
    height: 423,
    overflow: "hidden",
  },

  // modal:



});




