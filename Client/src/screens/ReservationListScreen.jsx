import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Upcoming, History } from '../screens'
import { Display } from "../utils";
import { StyleSheet, Text, View } from 'react-native'
import store from '../features/store'
import React, { useState, useEffect } from 'react';
import axios from 'axios'



const marginTopPercentage = 4;
const marginTop = Display.setHeight(marginTopPercentage);




const Tab = createMaterialTopTabNavigator();

function MyTabs() {






  return (


    <Tab.Navigator style={styles.tabBarStyle}>

      <Tab.Screen name="Upcoming" component={Upcoming} />

      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}
export default MyTabs


const styles = StyleSheet.create({

  tabBarStyle: {

    marginTop,
    backgroundColor: "black"
  },

})




