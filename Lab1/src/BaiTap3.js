import React from 'react'
import { TouchableOpacity,Text,View } from 'react-native'
const Button =(props)=>(
    <TouchableOpacity onPress={props.onPress}
     style={{
     backgroundColor:"#ff637c",
     alignItems: 'center',
     padding:10 ,
     margin:10,
     ...props.buttonStyle,
    }}>
    
       <Text style={{color:"#fff"}}>Press me</Text>

    </TouchableOpacity>
)
export default BaiTapTH3 =()=>{
    return(
        <View style={{flex:1,justifyContent:"center"}}>
            <Button text="Say hello" onPress={()=>alert("hello!")} style={{backgroundColor:'blue'}}/>
            <Button text="Say goodbye" onPress={()=>alert("goodbye")} style={{backgroundColor:'red'}}/>
            

        </View>
    )
}
