import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const header = () => {
    return (
        <View style={styles.header}>
         <Text style={styles.textInGame}>In Game</Text>
            <Image
                source={require('./imgs/logoAppInGame.png')}
                style={styles.icone}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    header: {
        width: '90%',
        height: '30%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icone: {
        height: 60,
        width: 70,
    },
    textInGame:{
        fontSize:36,
        color:'white'
    }
  
});
export default header