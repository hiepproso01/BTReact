import 'react-native-get-random-values';
import {v4} from "uuid";
const mapContact = contact =>{
    const {name, picture, phone, cell, email} = contact;
    return{
        id: v4(),
        name: name.first + " " + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favourite: Math.random() >=0.5,
    };
};
const fetchContacts = async()=>{
    const response = await fetch("https://randomuser.me/api/?results=100&seed=fullstackio");
    const contactData = await response.json();
    return contactData.results.map(mapContact);
}
const fetchUserContacts = async()=>{
    const response = await fetch("https://randomuser.me/api/?seed=fullstackio");
    const contactData = await response.json();
    return contactData.results.map(mapContact);
}
const fetchRandomContacts = async()=>{
    const response = await fetch("https://randomuser.me/api/");
    const contactData = await response.json();
    return contactData.results.map(mapContact);
}
export default {fetchContacts,fetchUserContacts,fetchRandomContacts};