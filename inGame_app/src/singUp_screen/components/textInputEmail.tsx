import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getStrings } from '../../../strings/strings';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TextInputEmail = ({ onChangeText }) => {
    const [text, setText] = React.useState("");

    const handleTextChange = (text) => {
        setText(text);
        onChangeText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={getStrings().emailTexto}
                value={text}
                onChangeText={handleTextChange}
                style={[styles.textInput, { width: width * 0.85 }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    },
    textInput: {
        borderRadius: 5,
        backgroundColor: 'white'
    },
});

export default TextInputEmail;
