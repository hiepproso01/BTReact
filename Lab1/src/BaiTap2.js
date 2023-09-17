import React from "react";
import {View} from "react-native";
import {Button} from  "react-native-paper";
export default BaiTapTH2 =() =>{
    const Alert = () =>{
    alert("Hello!");
    }
    return(
      <View style={{
         position:'absolute',
        top:'50%',
        left:'40%',
        transforms:"translate(-50%,-50%)",
      }}>
        <Button onPress={Alert} style={{
            backgroundColor:'aqua',
        }}> Press me</Button>
      </View>
    )
}