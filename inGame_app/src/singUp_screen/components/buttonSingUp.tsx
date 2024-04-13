import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStrings } from '../../../strings/strings';


const ButtonRegister = () => {
    return (
        <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.textButtonRegister}> {getStrings().registreSe} </Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    buttonRegister: {
        width: 'auto',
        height: 55,
        backgroundColor: '#EA6925',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 5
    },
    textButtonRegister: {
        color: 'white',
        fontSize: 24,

    }
});

export default ButtonRegister;