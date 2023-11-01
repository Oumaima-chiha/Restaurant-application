import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Splashscreen, Homescreen, Logo, MessagesScreen, LoginScreen,ReservationListScreen , TabNavigator} from "../screens"; 

const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Logo" component={Logo} />
                <Stack.Screen name="Splash" component={Splashscreen} />
                <Stack.Screen name="TabNav" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigators;