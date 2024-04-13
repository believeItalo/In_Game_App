import React, { useState } from 'react';
import { View, Button, Platform , TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateOfBirthPicker = () => {
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('Data de Nascimento');

    const formatarDataNascimento = (value: string) => {
        // Remove qualquer caractere que não seja número
        value = value.replace(/\D/g, '');

        // Insere as barras (/) na ordem ano, mês, dia
        if (value.length <= 4) {
            value = value.replace(/^(\d{4})/, '$1/');
        } else if (value.length <= 6) {
            value = value.replace(/^(\d{4})(\d{2})/, '$1/$2/');
        } else {
            value = value.replace(/^(\d{4})(\d{2})(\d{0,2})/, '$1/$2/$3');
        }

        return value;
    };

    const handleFocus = () => {
        if (dataNascimento === '') { // Se não houver data inserida, altera o placeholder
            setPlaceholder('aaaa/mm/dd');
        }
    };

    const handleBlur = () => {
        if (dataNascimento === '') { // Se não houver data inserida, restaura o placeholder original
            setPlaceholder('Data de Nascimento');
        }
    };

    return (
        <TextInput
            maxLength={10}
            keyboardType="phone-pad"
            placeholder={placeholder}
            placeholderTextColor='black'
            style={[styles.inputBirthday, styles.placeholder]} // Aplicando estilos múltiplos
            value={dataNascimento}
            onChangeText={(novoDataNascimento) => {
                const formattedDate = formatarDataNascimento(novoDataNascimento);
                setDataNascimento(formattedDate);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            textAlign='center' // Centraliza o texto no TextInput
        />
    );
};

const styles = StyleSheet.create({
   inputBirthday:{
    width: 160,
    backgroundColor: 'white',
    borderRadius: 5,
   },
   placeholder: {
     fontSize: 14, // Definindo o tamanho da fonte do placeholder
   },
});

export default DateOfBirthPicker;
