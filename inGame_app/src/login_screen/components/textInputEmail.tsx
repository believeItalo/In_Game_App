import React from 'react';
import { StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import { getStrings } from '../../../strings/strings';
const textInputEmail = ({onInputChange}) => {
    const [email, setEmail] = React.useState("");

    //função que retorna no console os valores digitados nos campos de texto
    const showValueInput = (text) => { 
        setEmail(text);
        onInputChange(text);//onInputChange essa função é oque "exporta" o valor do componente em qualquer tela que ele for chamada
    }
    return (
        <TextInput
            placeholder={getStrings().emailTexto}
            value={email}
            onChangeText={showValueInput}
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
