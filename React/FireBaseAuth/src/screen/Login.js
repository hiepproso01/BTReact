// use keyword " rnfe" to create screens

import { View, Text,TouchableOpacity,TextInput , StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {Auth} from "../services";
const Login = ({navigation}) => {
  const [email,setEmail] = useState();
  const[password,setPassword] = useState();
  const handleLogin = () => {
    Auth.signIn(email, password);
    // You might want to add error handling or navigation logic here based on the authentication result
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
 };
  return (
   <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter email'
          onChangeText={(e) => setEmail(e)}
          style={styles.textInput}
        />
        <TextInput
          placeholder='Enter password'
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <View style={styles.createAccountButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  forgotPasswordButton: {
    backgroundColor: '#F27935',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    width:155,
 },
  textInput: {
    width:330,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 18,
    borderWidth: 3,  
    borderColor: '#CCCCCC'
  },
  loginButton: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    width:155,
  },
  createAccountButton: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})