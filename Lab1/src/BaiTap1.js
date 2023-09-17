import React from 'react';
import {View,Text} from "react-native";
// import{Text} from "react-native-paper";

export default BaiTapTH1 = () =>{
   return(
    <View style={{
        width:'100%',
        height:100,
        position:'absolute',
        top:'50%',
        transforms:"translate(-50%,-50%)",
        backgroundColor:'aqua',
       
    }}>
    <Text style={{color:"black"}}>Hello World</Text>
    </View>
   )
}