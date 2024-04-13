import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { getStrings } from '../../../strings/strings';

const PasswordInput = ({ onChangeText }) => {
    const [password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const handleTextChange = (text) => {
        setPassword(text);
        onChangeText(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={getStrings().senhaTexto}
                secureTextEntry={hidePass}
                value={password}
                onChangeText={handleTextChange}
                style={styles.textInput}
                textContentType="none"
            />
            <View style={styles.iconContainer}>
                <Ionicons
                    name={hidePass ? 'eye' : 'eye-off'}
                    size={25}
                    color='#575757'
                    onPress={() => setHidePass(!hidePass)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        borderRadius: 5,
        backgroundColor:'white'
    },
    iconContainer: {
        position: 'absolute',
        width:'95%',
        alignItems:'flex-end',
    },
});

export default PasswordInput;
