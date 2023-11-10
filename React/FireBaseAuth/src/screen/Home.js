import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';
import {Auth} from'../services';
const MainHome = () => {
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      // You might want to add navigation logic after successful logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.logoutButton}>
          <Text style={styles.buttonText}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainHome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: 'red', // You can change the color as needed
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});