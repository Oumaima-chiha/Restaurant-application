import { Colors } from '../contants';
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({ fullname: '', email: '', password: '' });

  const handleChange = (name, value) => {
    setInputs((values) => ({ ...values, [name]: value }));

    if (  (name === 'firstName' || name === 'lastName') && inputs.firstName && inputs.lastName) {
      setInputs((values) => ({ ...values, fullname: `${values.firstName} ${values.lastName}` }));
    }
  };

  const validator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!emailRegex.test(inputs.email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid email format',
      });
      return false;
    }
    if (!passwordRegex.test(inputs.password)) {
      Toast.show({
        type: 'error',
        text1: 'Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, and be at least 8 characters long.',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validator()) {
      try {
        const { data } = await axios.post('http://172.16.0.59:3000/api/customers/', inputs);
        console.log('User added successfully', data);
        Toast.show({
          type: 'success',
          text1: 'Successfully Signed Up',
        });
        navigation.navigate('Login');
      } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.error === 'Email already exists') {
          Toast.show({
            type: 'error',
            text1: 'Email already exists. Please use a different email address.',
          });
        } else {
          console.log(error);
        }
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.registerParent}>
        <Text style={styles.register1}>Register</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your first name"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => handleChange('firstName', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your last name"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => handleChange('lastName', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email"
            placeholderTextColor="#c8c8c8"
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            placeholderTextColor="#c8c8c8"
            secureTextEntry={true}
            onChangeText={(text) => handleChange('password', text)}
          />
        </View>

        <TouchableOpacity style={styles.registerButtonContainer} onPress={handleSubmit}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerParent: {
    marginTop: 16,
    padding: 20,
    width: '100%',
    height: '70%',
  },
  register1: {
    color: Colors.DEFAULT_RED,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
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
  registerButtonContainer: {
    backgroundColor: Colors.DEFAULT_RED,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginTop: 48,
  },
  registerButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default RegisterScreen;
