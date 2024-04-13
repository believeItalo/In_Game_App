import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PositionPicker = ({ onChangeValue }) => {
    const [posicao, setPosicao] = useState('');

    const handleChange = (itemValue) => {
        setPosicao(itemValue);
        onChangeValue(itemValue); // Chamando a função de callback com o valor selecionado
    };

    return (
        <View style={styles.container}>
            <Picker
                style={styles.pickerStyle}
                selectedValue={posicao}
                onValueChange={handleChange}
                placeholder="Escolha sua posição"
            >
                <Picker.Item label="Escolha sua posição" value="" style={styles.pickerItem} />
                <Picker.Item label="Armador" value="1" style={styles.pickerItem} />
                <Picker.Item label="Ala-Armador" value="2" style={styles.pickerItem} />
                <Picker.Item label="Ala" value="3" style={styles.pickerItem} />
                <Picker.Item label="Ala-Pivô" value="4" style={styles.pickerItem} />
                <Picker.Item label="Pivô" value="5" style={styles.pickerItem} />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        overflow: 'hidden', 
    },
    pickerStyle: {
        backgroundColor: 'white',
    },
    pickerItem: {
        color: 'black',
        fontSize: 16
    }
});

export default PositionPicker;
