import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState, useRef } from "react";
import { Colors } from '../contants';
import { FontSize, FontFamily, Color, Border, Padding } from "../../GlobalStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import store from '../features/store'
import axios from "axios";
import ToastMessage from "../Component/ToastMessage";
import moment from 'moment'





export default function RestaurantDetails({ route }) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;


  const customer = store.getState().customer

  const [showForm, setShowForm] = useState(false)
  const [reservation, setReservation] = useState({ date: '', time: '', guest_number: null })
  const [mode, setMode] = useState('date')
  const [showDateTime, setShowDateTime] = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [spotsRemaining, setSpotsRemaining] = useState('')
  const toastRef = useRef(null);


  const {
    id,
    name,
    main_image,
    rating,
    description,
    menu_images,
    opening_time,
    closing_time,
  } = route.params.restaurant;



  const navigation = useNavigation();

  const hideDateTime = () => {
    setShowDateTime(false)
  }


  const makeReservation = async () => {

    try {
      const myReservation = await axios.post(`http://${apiUrl}:3000/api/reservations/${customer.id}/${id}`, reservation)
      console.log("Your reservation request was sent!", myReservation)
      setSpotsRemaining(`Your reservation request was sent!`)
      setShowToast2(true);
      if (toastRef.current) {
        toastRef.current.show();
      }

      setReservation({ date: '', time: '', guest_number: null })
      toggleForm()
    } catch (error) {
      console.log("Couldn't send reservation request :(", error)
      if (error.response.status === 400) {
        if (error.response.data > 1) {
          setSpotsRemaining(`This date only has ${error.response.data} reservation spots remaining`)
        }
        else if (error.response.data === 1) {
          setSpotsRemaining(`This date only has ${error.response.data} reservation spot remaining`)
        }
        else if (error.response.data === 0) {
          setSpotsRemaining(`This date has no reservation spots remaning`)
        }

        setShowToast(true);
        if (toastRef.current) {
          toastRef.current.show();
        }
      }
      if (error.response.status === 422) {
        setSpotsRemaining('Reservation info missing')
        setShowToast(true);
        if (toastRef.current) {
          toastRef.current.show();
        }
      }
      if (error.response.status === 404) {
        setSpotsRemaining('You need to be logged in')
        setShowToast(true);
        if (toastRef.current) {
          toastRef.current.show();
        }
      }
    }

  }


  const handleDateChange = (event, selectedDate) => {
    let currentDate = selectedDate || ''

    if (mode === 'date') {

      currentDate = currentDate.toISOString().slice(0, 10)
    }


    if (event.type === 'set') {
      console.log('Selected date:', (currentDate));
      setReservation((inputs) => ({ ...inputs, [mode]: currentDate }))
      hideDateTime()

    }

    else hideDateTime()

  }

  const handleChange = (name, value) => {


    setReservation((inputs) => ({ ...inputs, [name]: value }))


  }

  const toggleForm = () => {

    setShowForm(!showForm)
  }


  const toggleDateTime = (mode) => {

    setMode(mode)
    setShowDateTime(true)
  }

  return (
    <SafeAreaView>

      {showToast2 && (
        <ToastMessage
          ref={toastRef}
          type="success"
          text={spotsRemaining}
          timeout={3000}
        />
      )}
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
          <Text style={styles.rating}>{`Rating: 4.0`}</Text>
          <Text
            style={styles.openingHours}
          >{`Opens: ${moment(opening_time).format('LT')} - Closes: ${moment(closing_time).format('LT')}`}</Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
          <Button title="Make A reservation " onPress={toggleForm} />

          {showForm && <Modal transparent={true} visible={true} onPress={toggleForm} >


            <Pressable style={{ backgroundColor: '#000000aa', flex: 1 }} >
              {showToast && (
                <ToastMessage
                  ref={toastRef}
                  type="danger"
                  text={spotsRemaining}
                  timeout={3000}
                />
              )}



              <View style={{ backgroundColor: Colors.DARK_ONE, margin: 20, padding: 40, borderRadius: 10, top: 250, height: 350, justifyContent: "space-between" }}
              >
                <KeyboardAwareScrollView>

                  <Pressable style={styles.btn} onPress={() => { toggleDateTime("date") }} ><Text style={styles.btnText}>Date</Text></Pressable>
                  <Pressable style={styles.btn} onPress={() => { toggleDateTime("time") }}><Text style={styles.btnText}>Time</Text></Pressable>

                  {showDateTime && <DateTimePicker
                    mode={mode}
                    value={new Date(Date.now())}
                    is24Hour={true}
                    confirmBtnText="Confirm"
                    display="default"
                    minimumDate={new Date()}
                    timeZoneName={'Africa/Tunis'}
                    timeZoneOffsetInMinutes={0}
                    onChange={handleDateChange}
                  />}
                  <Text style={{ fontSize: 25, color: "#ffffff" }}>Guests</Text>
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={(text) => handleChange('guest_number', +text)}
                    style={styles.inputControlGuest}

                  />
                </KeyboardAwareScrollView>

                <Pressable style={styles.btn} onPress={makeReservation} ><Text style={styles.btnText}>Submit</Text></Pressable>


              </View>
            </Pressable>



          </Modal>}
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
  inputControl: {
    height: 25,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderColor: Colors.DEFAULT_RED,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: '500',
    color: Colors.DEFAULT_WHITE,
  },
  inputControlGuest: {
    height: 25,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderColor: Colors.DEFAULT_RED,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: '500',
    color: Colors.DARK_ONE,
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.DEFAULT_RED,
    margin: 5
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },

  image: {
    width: Dimensions.get("window").width,
    height: 250,
  },
  name: {

    color: Colors.DEFAULT_WHITE,
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
    color: Colors.DEFAULT_WHITE,
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





});




