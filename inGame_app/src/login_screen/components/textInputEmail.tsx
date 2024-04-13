import React from 'react';
import { StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import { getStrings } from '../../../strings/strings';
const textInputEmail = () => {
    const [text, setText] = React.useState("");
    return (
        <TextInput
            placeholder={getStrings().emailTexto}
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
