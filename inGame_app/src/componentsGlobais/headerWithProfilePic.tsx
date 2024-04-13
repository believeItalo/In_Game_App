import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderWithProfilePic = () => {
    return (
        <View style={styles.container}>

            <View style={styles.profilePic}></View>
            <Image
                source={require('./imgs/logoAppInGame.png')}
                style={styles.icone}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    profilePic: {
        height: 60,
        width: 60,
        backgroundColor: 'white'
    },
    icone: {
        height: 60,
        width: 70,
    }
});

export default HeaderWithProfilePic;
