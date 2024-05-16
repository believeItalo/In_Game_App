import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getStrings } from '../../../strings/strings';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TextInputName = ({ onChangeText }) => {
    const [name, setName] = React.useState("");

    const handleTextChange = (name) => {
        setName(name);
        onChangeText(name);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={getStrings().nomeTexto}
                value={name}
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

export default TextInputName;
