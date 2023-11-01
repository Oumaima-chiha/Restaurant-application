import { StyleSheet, Text, View } from 'react-native'
import { Colors, Images } from "../contants";
import React from 'react'

const ReservationListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ReservationListScreen</Text>
    </View>
  )
}

export default ReservationListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.primaryBlackHex
    },
})