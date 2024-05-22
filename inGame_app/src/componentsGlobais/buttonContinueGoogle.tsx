import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GoogleSignInButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-google" size={35} color="orange" />
            <Text style={styles.text}>Continue com Google</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', 
        borderRadius: 5,
        paddingVertical: 10,
        width: '85%',
        height:'35%',
        gap:20,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    logo_google: {
        width: 40,
        height: 40
    }
});

export default GoogleSignInButton;
