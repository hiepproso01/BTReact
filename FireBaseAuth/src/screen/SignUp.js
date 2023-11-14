// use keyword " rnfe" to create screens

import { View, Text,TouchableOpacity,TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {Auth} from "../services";
const SignUp = ({navigation}) => {
  const [email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[name,setName] = useState();
  const handleSignUp = () => {
    Auth.signUp(name, email, password);
    // You might want to add error handling or navigation logic here based on the authentication result
  };
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
    <TextInput
      placeholder='Enter name'
      onChangeText={(text) => setName(text)}
      style={styles.textInput}
    />
    <TextInput
      placeholder='Enter email'
      onChangeText={(text) => setEmail(text)}
      style={styles.textInput}
    />
    <TextInput
      placeholder='Enter password'
      onChangeText={(text) => setPassword(text)}
      secureTextEntry={true}
      style={styles.textInput}
    />
    <TouchableOpacity onPress={handleSignUp}>
      <View style={styles.signUpButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default SignUp;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width:330,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 18,
    borderWidth: 3,  
    borderColor: '#CCCCCC',  // Add border color
  },
  signUpButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})