import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const sendPasswordResetEmail = () => {
        if (email.trim() === '') {
            alert('Please enter a valid email address');
            return;
        }
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                alert('Password reset email sent.');
                navigation.navigate('SignInScreen');
            })
            .catch((error) => {
                console.error(error);
                alert('An error occurred while trying to send the password reset email.');
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={sendPasswordResetEmail}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={styles.link}>Go back to sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#3c6794',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        color: '#3c6794',
        fontSize: 16,
    },
});

export default ForgotPasswordScreen;