import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { styles } from "./styles/styles";
import HeaderWithProfilePic from '../componentsGlobais/headerWithProfilePic'
import { getStrings } from "../../strings/strings";
export const HomeScreen = () => {
    return (

        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Image
                    source={require('./imgs/background_img_homeScreen.png')}
                    style={styles.backgroundImage}
                />
                <HeaderWithProfilePic></HeaderWithProfilePic>
                <View style={styles.viewInitialText}>
                    <Text style={styles.initialWhiteText}>Treine e mude</Text>
                    <Text style={styles.initialOrangeText}>seu Game</Text>
                </View>
                <View style={styles.columnContentCards}>

                    <View style={styles.contentCards}>
                        <Image
                            source={require('./imgs/backgroundImageCardAuxiliarVideos.png')}
                            style={styles.cardBackgroundImage}
                        />
                        <Text style={styles.innerCardText}>{getStrings().videos_auxiliares}</Text>
                    </View>

                    <View style={styles.contentCards}>
                        <Image
                            source={require('./imgs/backgroundImageCardComplementarExercicies.png')}
                            style={styles.cardBackgroundImage}
                        />
                        <Text style={styles.innerCardText}>{getStrings().exercicios_complementares}</Text>
                    </View>

                    <View style={styles.contentCards}>
                        <Image
                            source={require('./imgs/backgroundImageCardGameTips.png')}
                            style={styles.cardBackgroundImage}
                        />
                        <Text style={styles.innerCardText}>{getStrings().dicas_de_jogo}</Text>
                    </View>

                    <View style={styles.contentCards}>
                        <Image
                            source={require('./imgs/backgroundImageCardGameStrategies.png')}
                            style={styles.cardBackgroundImage}
                        />
                        <Text style={styles.innerCardText}>{getStrings().estrategias_de_jogo}</Text>
                    </View>

                </View>
            </View>
        </ScrollView>

    );

}