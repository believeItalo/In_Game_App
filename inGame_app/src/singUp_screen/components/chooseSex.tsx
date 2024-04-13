import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SexPicker = ({onChangeValue}) => {
    const [sex, setSex] = useState('');

    const handleChange = (itemValue) => {
        setSex(itemValue);
        onChangeValue(itemValue);
    };

    return (
        <View style={styles.container}>
            <Picker
                style={styles.pickerStyle}
                selectedValue={sex}
                onValueChange={handleChange}
            >
                <Picker.Item label="Sexo" value="" style={styles.pickerItem}/>
                <Picker.Item label="Masculino" value="1" style={styles.pickerItem}/>
                <Picker.Item label="Feminino" value="2" style={styles.pickerItem} />
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
        width:160
    },
    pickerItem: {
        color: 'black',
        fontSize: 16
    }
});

export default SexPicker;
