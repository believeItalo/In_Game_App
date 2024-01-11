import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Password"
                secureTextEntry={hidePass}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.textInput}
                textContentType="none" //propriedade colocada porque no android ao clicar no olho, 
            //o texto da senha era selecionado e aparecia opções como "copiar", essa prorpiedade evita que isso aconteça
            />
            <View style={styles.iconContainer}>
                <Ionicons
                    // o "?" é um if e "eye" e "eye-off" sao as codicionais desse if
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
        width: '85%',
        height: '14%',
        backgroundColor: 'red',

    },
    textInput: {
        flex: 1,
        borderRadius: 5
    },
    iconContainer: {
        position: 'absolute',
        top: 12,
        right: 10,
    },
});

export default PasswordInput;
