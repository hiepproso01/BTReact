import React,{useState} from "react";
import {View} from "react-native";
import {Text,Button} from "react-native-paper";
export default BaiTapTH4 = () =>{
    const [Result, setResult] = useState(0);
    const Count = () =>{
        setResult(Result+1);
    }
    return(
        <View style={{
             position:'absolute',
        top:'50%',
        left:'40%',
        transforms:"translate(-50%,-50%)",
        }}>
        <Text>You've pressed the button:{Result}</Text>
        
        <Button onPress={Count}>Press me</Button>
        </View>
    )
}