// import * as React from 'react';
// import {View, StyleSheet,Button} from 'react-native';
// import { HelperText, TextInput } from 'react-native-paper';
// export default  login = () =>{
//   const [text, setText] = React.useState("");
//   const hasError = ()=>{
//     return !text.includes("@gmail.com");
//   }
  
//   return (
//     <View style={{
//     top:'45%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     }}>
      
//       <TextInput label="Username" value={text} style={styles.input} onChangeText={(text) => setText(text)}/>
//       <HelperText type="error" visible={hasError()} >Email address is invalid! </HelperText>
//       <TextInput label="Password"
//        secureTextEntry right={<TextInput.Icon icon ="eye"/>} 
//        style={styles.input}/>
//        <Button title="Log In"/>
//        <Button title="Sign In"/>

//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   input:{
//     width: '90%',
//   }
// })

// // const RandomArray = () =>{
// //   const [Result, setResult] = useState("");
// //   const setResultArray = () =>{
// //     const array = ['1', '2', '3', '4', '5', '6'];
// //     let OTP ="";
// //     for(let i=0; i<6; i++){
// //       OTP += Math.floor(Math.random() * array.length);
// //     }
// //     setResult(OTP);
// //   }
 
// //    return(
// //     <View style={{
// //       position:'absolute',
// //       top:'50%',
// //       left:'50%',
// //       transform:'translate(-50%,-50%)',
// //      }}>
// //       <Text>{Result}</Text>
// //       <Button onPress={setResultArray} title="Press me" />
// //     </View>
// //    )
// // }
// // export default RandomArray;
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Vibration} from 'react-native';
import {useState} from 'react';
import { Entypo } from '@expo/vector-icons';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']

  function calculator() {
    
    let lastArr = currentNumber[currentNumber.length-1];
    
    if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber)
      return
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result)
      return
    }
  }

  function handleInput(buttonPressed) {
    if(buttonPressed  === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/') {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 ||
            buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 || buttonPressed === '.' ) {
      Vibration.vibrate(35);
    }
    switch(buttonPressed) {
      case 'DEL':
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        Vibration.vibrate(35);
        setLastNumber('')
        setCurrentNumber('')
        return
      case '=':
        Vibration.vibrate(35);
        setLastNumber(currentNumber + '=')
        calculator()
        return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 45,
      color: '#00b9d6',
      margin: 15,
      fontSize: 35,
    },
    historyText: {
      color: darkMode ? '#B5B7BB' : '#7c7c7c',
      fontSize: 20,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: '5%',
      margin: 15,
      backgroundColor: darkMode ? '#7b8084' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      width: '100%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor: darkMode ? '#3f4d5b' : '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '54%',
      flex: 2,
    },
    textButton: {
      color: darkMode ? '#b5b7bb' : '#7c7c7c',
      fontSize: 28,
    }
  })

  return(
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}/>
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' || button === '/' || button === '*' || button === '-' || button === '+' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#00b9d6'} ]} onPress={() => handleInput(button)}>
            <Text style={[styles.textButton, {color: 'white', fontSize: 28} ]}>{button}</Text>
          </TouchableOpacity>
          :
          button === 0 ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === '.' || button === 'DEL' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: button === '.' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '37%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          button === 'C' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%'} ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed' } ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

