import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, FlatList, ActivityIndicator} from 'react-native'; 
import { fetchContacts } from '../utility/api';
import { fetchContactsLoading,fetchContactsError,fetchContactsSuccess } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from '../components/ContactListItem';
const keyExtractor = ({ phone }) => phone;
export default Contacts = ({navigation}) =>
{
    const {contacts, loading, error} = useSelector((state)=> state);
//Load du lieu
    useEffect (()=>{
        useDispatch(fetchContactsLoading());
        fetchContacts()
            .then(
                contacts=> {
                
                    useDispatch(fetchContactsSuccess(contacts));
    }
            )
            .catch(
                e=>{
                    // console.log(e);
                    // setLoading(false);
                    // setError(true);
                    useDispatch(fetchContactsError());
                });
}, [])

    //sort
    const contactsSorted = contacts.sort((a, b) =>a.name.localeCompare (b.name));
    const renderContact = ({item}) => {
        const { name, avatar, phone } = item; 
        return <ContactListItem name={name}  avatar={avatar} phone={phone} onPress ={()=> navigation.navigate("Profile",{contact: item})}/>
    };
//Render
    return (
        <View style = {styles.container}>
            {loading && <ActivityIndicator color="blue" size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && lerror && ( 
                <FlatList
                data={contactsSorted}
                keyExtractor={keyExtractor}
                renderItem={renderContact}/>
            )}
        </View>
    )};
const styles = Stylesheet.create({
container: {
backgroundColor: 'white',
justifyContent: 'center',
 flex: 1,
},
});

