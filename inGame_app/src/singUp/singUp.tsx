import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles/styles'
import Header from '../componentsGlobais/header';
const singUp = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('./imgs/background_img_loginScreen.png')}
                style={styles.backgroundImage}
            />
           <Header></Header>
        </View>

    );
}
export default singUp