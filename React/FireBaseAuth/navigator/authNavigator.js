import React from 'react';
import  {createStackNavigator}  from "@react-navigation/stack";
import Login from '../src/screen/Login';
import SignUp from '../src/screen/SignUp';
import ForgotPasswordScreen from '../src/screen/ForgotPassword';
const Stack = createStackNavigator();

const AuthNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
           
        </Stack.Navigator>
    )
}
export default  AuthNavigator;