import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Upcoming, History } from '../screens'
import { Display } from "../utils";
import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native';
import { Colors, Images } from "../contants";




const { height, width } = Dimensions.get('window');

// Use the setHeight function to calculate the margin top
const marginTopPercentage = 4; // You can adjust this value as needed
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




