import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getStrings } from '../../../strings/strings';

const buttonEntrar = () => (
    <TouchableOpacity style={styles.buttonEntrar}>
        <Text style={styles.textButtonEntrar}> {getStrings().buttonEntrarText} </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonEntrar: {
        width: '85%',
        height: '10%',
        backgroundColor: '#EA6925',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 5
    },
    textButtonEntrar: {
        color: 'white',
        fontSize: 28,

    }
});

export default buttonEntrar;