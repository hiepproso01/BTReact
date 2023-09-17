import React,{useState} from "react";
import {View} from "react-native";
import { TextInput,Text,Button } from "react-native-paper";

export default BaiTapTH7 =() =>{
    const [name,setName] = useState("");
    const nameText = () =>{
       alert("Hello " + name)
       setName("");
    }
    return(
        <View style={{
            padding:20,
            
            top:'10%',
       
        }}>
            <Text style ={{
               fontWeight:"bold",
                fontSize:18,
            }}>What's your name ?</Text>
            <TextInput style={{
               marginTop:0,
               backgroundColor:"rgba(0,0,0,0.1)",
               padding:10,
               borderRadius:5,
            }} placeholder="Your name..." placeholderTextColor={"rgba(0,0,0,0.5)"} onChangeText={(text) =>setName(text)} value={name}/>
            <Button onPress={nameText}>Say Hello</Button>

          
        </View>
    )
}