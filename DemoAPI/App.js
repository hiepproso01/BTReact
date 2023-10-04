/**
 * @format
 */
import React from "react";
// import { v4 as uuidv4 } from 'uuid';
import {View, Text} from "react-native";
import Contacts  from "./screens/Contacts";
import Profile from "./screens/Profile";
import DrawerNavigator from "./routes";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import Options from "./screens/Options";
import Store from "./store";
import {Provider} from "react-redux";
import 'react-native-get-random-values';

export default App=()=>{
    return( 
    <Provider store={store}>
        <DrawerNavigator/>
    </Provider>
    );
}