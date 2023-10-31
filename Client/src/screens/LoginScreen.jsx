import { StyleSheet, Text, View } from 'react-native'
import { Colors, Images } from "../contants";
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.primaryBlackHex
},
})