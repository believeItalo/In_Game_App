import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const buttonEntrar = () => (
    <TouchableOpacity style={styles.buttonEntrar}>
        <Text style={styles.textButtonEntrar}> Entrar </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonEntrar: {
        width: '85%',
        height: '15%',
        backgroundColor: '#EA6925',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 5
    },
    textButtonEntrar: {
        color: 'white',
        fontSize: 24,

    }
});

export default buttonEntrar;