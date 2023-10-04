import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import { fecthRandomContact } from "../utility/api";
import ContactThumbnail from "../component/ContactThumbnail";
import DetailListItem from "../component/DetailListItem";
import colors from "../utility/color";

export default Profile =({route}) =>{
    const {contact} = route.params;
    const {avatar, name,email,phone,cell} = contact;
    return(
        <View style={styles.container}>
            <View style={styles.avatarSections}>
                <ContactThumbnail avatar={avatar} name={name} phone={phone}/>
            </View>
            <View style = {style.detailsSection}>
            <DetailListItem icon="mail" title="Email" subtitle={email}/>
                <DetailListItem icon="phone" title="Work" subtitle={phone}/>
                <DetailListItem icon="smartphone" title="Personal" subtitle={cell}/>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.blue,
    },
    detailsSection:{
        flex:1,
        backgroundColor:'white',
    },
});