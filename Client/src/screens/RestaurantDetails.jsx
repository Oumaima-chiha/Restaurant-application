import { StyleSheet, Text, View } from 'react-native'
import { Colors, Images } from "../contants";
import React from 'react'


export default function componentName() {
  return (
    <View style={styles.container}>
      <Text></Text>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.primaryBlackHex
    },
})