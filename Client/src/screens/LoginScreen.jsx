import { Colors } from "../contants";
import axios from "axios";
import React, { useState } from "react";
import Toast from 'react-native-toast-message';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const handleButtonPress = () => {
    navigation.navigate("RegisterScreen")
  };


  const handleChange = (name, value) => {
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const validator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid email format',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validator()) {
      try {
        const { data } = await axios.post('http://192.168.1.184:3000/api/customers/signin', inputs);
        console.log('Customer logged successfully', data);
        Toast.show({
          type: 'success',
          text1: 'Successfully Logged In',
        });
        // Navigate to the next screen or perform any other necessary actions
      } catch (error) {
        if (error.response && error.response.status === 410 && error.response.data.error === "Email doesn't exist") {
          Toast.show({
            type: 'error',
            text1: 'Please provide a correct email',
          });
        } else if (error.response && error.response.status === 411 && error.response.data.error === 'unvalid password') {
          Toast.show({
            type: 'error',
            text1: 'Please provide a correct password',
          });
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.loginParent}>
        <Text style={styles.login1}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="e.g., abc@example.com"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            onChangeText={(text) => handleChange('password', text)}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButtonContainer} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleButtonPress}
          style={styles.dontHaveAnAccountParent}
        >
          <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  loginParent: {
    marginTop: 16,
    padding: 20,
    width: "100%",
    height: "70%",
  },
  login1: {
    color: Colors.DEFAULT_RED,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 35,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 20,
    marginBottom: 8,
  },
  inputField: {
    borderWidth: 1.5,
    borderColor: Colors.DEFAULT_RED,
    borderRadius: 8,
    padding: 16,
    color: Colors.DEFAULT_WHITE,
    fontSize: 18,
  },
  forgotPassword: {
    marginTop: 8,
    textAlign: "left",
  },
  forgotPasswordText: {
    color: Colors.DEFAULT_RED,
    fontSize: 16,
    textDecorationLine: "underline",
  },
  loginButtonContainer: {
    backgroundColor: Colors.DEFAULT_RED,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    marginTop: 48,
  },
  loginButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontWeight: "bold",
    fontSize: 20,
  },
  dontHaveAnAccountParent: {
    flexDirection: "row",
    marginTop: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  dontHaveAn: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 20,
  },
  register: {
    color: Colors.DEFAULT_RED,
    marginLeft: 6,
    fontSize: 16,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});

export default LoginScreen;
