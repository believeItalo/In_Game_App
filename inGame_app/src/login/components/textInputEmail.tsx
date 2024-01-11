import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';

const textInputEmail = () => {
    const [text, setText] = React.useState("");
    return (
        <TextInput
            placeholder="Email"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.textInput}
        />
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: '85%',
        borderRadius: 5
    },
});

export default textInputEmail
