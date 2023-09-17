import React from 'react'
import { View,Text,StyleSheet,ScrollView } from 'react-native'

const style=StyleSheet.create({
    container:{
        backgroundColor:"#fff"},
        box:{
            width:100,
            height:100,
            justifyContent:"center",
            alignItems:"center",
            margin:20,
        },
    
});
const Square=({text,bgcolor = "#7ce0f9"})=>{
    return(
        <View style={[style.box,{backgroundColor:bgcolor}]}>
            <Text>
                {text}
            </Text>

        </View>
    )  
}
const data=[1,2,3,4,5,6,7,8,9,10,11,12,3,14,15];

export default BaiTapTH6 =()=>{
    return(
        <ScrollView style={style.container}>
            {data.map((item,index)=>(
                <Square key={item} text={`square ${index + 1}`}></Square>
        ))}
        </ScrollView>
    )
}
