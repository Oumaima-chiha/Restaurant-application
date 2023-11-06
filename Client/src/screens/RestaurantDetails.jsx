import React  from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
 ScrollView,
  TouchableOpacity
} from "react-native";
import {  Images } from "../contants";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import moment from "moment" ;

export default function RestaurantDetails({ route }) {
  const {
    name,
    main_image,
    rating,
    description,
    menu_images,
    opening_time,
    closing_time,
    City,
    category
  } = route.params.restaurant;
  console.log(route.params.restaurant);
  const navigation = useNavigation();

  return (
    <View style={styles.ScreenContainer}>
      <View>
      <Image source={{ uri: main_image.trim() }} style={styles.image} />
      <View style={styles.ratingContainer}>
      <Text style={styles.ratingText}>{`Rating: ${rating}`}</Text>
      </View>
      </View>
   
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            
          }}
        >
    <Text style={styles.name}>{name}</Text>
    <TouchableOpacity  style={styles.menuButton} onPress={() => navigation.navigate("MenuContainer",{
          menuImages:menu_images
        })} ><Text style={styles.menuText}>
      Menu
    </Text>
      </TouchableOpacity>

          
        </View>
       
        <Text
            style={styles.openingHours}
          >{` ${moment(opening_time).format('LT')} - ${moment(closing_time).format('LT')}`}</Text>
          <View style={styles.categoryContainer}>
           <Text style={styles.category}>{category}</Text>
           </View>
          <View   style={{
            flexDirection: "row",
            alignItems: "center",
            gap:5
            
          }}>
            <Image source={Images.PINICON}  style={styles.icon}/>
           <Text
            style={styles.openingHours}
          >{City}</Text>
          
          </View>
        <Text style={styles.description}>{description}</Text> 
        <View style={styles.reservationContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("ReservationListScreen")} >
          <Text style={styles.menuText}>
     Make a Reservation
    </Text>
          </TouchableOpacity>
          </View>
         
        
        </ScrollView>

        <View >
         
         
        </View>
      </View>
     
  );
}

const styles = StyleSheet.create({

  image: {
    width: Dimensions.get("window").width,
    height: 480,
  },
  name: {
    
    fontFamily:"Fakt Pro",
    fontSize: 32,
    fontWeight: "500",
    lineHeight: 40, 
    color:"white",
  },
  category: {
    color: "black",
    paddingVertical:6,
    fontSize:14,    
  },
  categoryContainer: {
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    width:80,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8
    
  },
  description: {
    color: "gray",
  },

  ratingText: {
    color: "white",
  },
  ratingContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    width:"100%",
    paddingLeft:8,
    position:'absolute',
    bottom:0,
    left:0,
  },
  openingHours: {
    color: "white",
    paddingVertical:4,
    fontSize:16
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor:"black"
  
  },
 
  ScrollViewFlex : {
    paddingHorizontal:20,
    paddingTop:10,

  },
  menuButton :{
    borderRadius: 16,
    backgroundColor: "#F00",
    paddingVertical:8,
    paddingHorizontal:24,

  },
  menuText:{
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
  },
  reservationContainer:{
    alignItems:"center",
    marginTop:40,
    
  },
  icon:{
    width:24,
    height:24,
    marginTop:8,
    marginLeft:-8,
    
  },
  menuImage:{
    height:200,
    width:200,
  }
  
});
