import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { styles } from "./styles/styles";
import HeaderWithProfilePic from '../componentsGlobais/headerWithProfilePic'
export const HomeScreen = () => {
    return (

        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Image
                    source={require('./imgs/background_img_homeScreen.png')}
                    style={styles.backgroundImage}
                />
                <HeaderWithProfilePic></HeaderWithProfilePic>
                <View style={styles.initialText}>
                    <Text style={styles.initialWhiteText}>Treine e mude</Text>
                    <Text style={styles.initialOrangeText}>seu Game</Text>
                </View>
                <View style={styles.columnContentCards}>
                    <View style={styles.contentCards}></View>
                    <View style={styles.contentCards}></View>
                    <View style={styles.contentCards}></View>
                </View>
            </View>
        </ScrollView>

    );

}