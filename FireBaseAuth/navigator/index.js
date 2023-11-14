import React, {useEffect,useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import MainHome from "./navigator";
import AuthNavigator from './authNavigator';
import auth from "@react-native-firebase/auth";

export default AppContainer =()=>{
    const [initializing, setInitializing] = useState(true);
    const [user,setUser] = useState()

    function onAuthStateChange(user){
        setUser(user)
        if( initializing) setInitializing(false)
    }
useEffect(() =>{
    const subcriber = auth().onAuthStateChanged(onAuthStateChange)
    return subcriber
    },[])
    if(initializing) return null;

    return(
        <NavigationContainer>
            {user ? <MainHome/> :<AuthNavigator/>}
        </NavigationContainer>
    )
}