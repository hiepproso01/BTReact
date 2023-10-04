/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text,FlatList, ActivityIndicator,View} from "react-native";
import {fetchContacts} from "../utility/api";
import ContactThumbnail from '../component/ContactThumbnail';
import { useDispatch,useSelector } from 'react-redux/es/exports';

const keyExtractor =({phone}) =>phone;
export default Favorites =()=>{
    // const[contacts,setContacts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    const {contacts,loading,error} = useSelector((state)=> state);

    useEffect(()=>{
        fetchContacts().then(contacts=>{
            setContacts(contacts);
            setLoading(false);
            setError(false);
        })
        .catch(e=>{
            setLoading(false);
            setError(true);
        })
    })
    const renderFavoriteThumbnail = ({item}) =>{
        const {avatar} = item;
        return(
            <ContactThumbnail avatar={avatar} onPress={()=> navigation.navigate("Profile",{contact:item})}/>
        );
    };
    const favorites = contacts.filter(contact => contact.favorite);
    return(
        <View style={styles.container}>
        {loading && <ActivityIndicator size="large"/>}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
            <FlatList data={favorites} keyExtractor={keyExtractor}
            numColumns={3}
            contentContainerStyle={styles.list}
            renderItem={renderFavoriteThumbnail}/>
        )}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        justifyContent:'center',
        flex:1,
    },
    list:{
        alignItems: 'center',
    },
});
