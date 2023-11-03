import { Colors } from '../contants';
import * as React from 'react';
import { Text, StyleSheet, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const VerificationCodeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
navigation.navigate("NewPasswordScreen")
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.loginParent}>
        <Text style={styles.login1}>Verification Code</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Verification Code</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter code"
            placeholderTextColor="#c8c8c8"
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity onPress={handleButtonPress} style={styles.loginButtonContainer}>
          <Text style={styles.loginButtonText}>Verify Code</Text>
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
  loginParent: {
    marginTop: 16,
    padding: 20,
    width: '100%',
    height: '70%',
  },
  login1: {
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
  loginButtonContainer: {
    backgroundColor: Colors.DEFAULT_RED,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginTop: 48,
  },
  loginButtonText: {
    color: Colors.DEFAULT_WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default VerificationCodeScreen;
