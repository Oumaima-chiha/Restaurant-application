import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import { Colors, Images } from "../contants";
import { AntDesign } from '@expo/vector-icons';


export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Find the best{'\n'}retaurant near you.</Text>
      <View >
    <TouchableOpacity><AntDesign name="search1" size={24} color={Colors.primaryWhiteHex}/></TouchableOpacity>
    </View>
    </View>
 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.primaryBlackHex
    },
    screenTitle: {
        fontSize:'25',
        color: Colors.primaryWhiteHex,
        bottom:200,
        fontFamily: 'poppins_semibold',
        right:50,
    }
})
