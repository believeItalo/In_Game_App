import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles/style';
import TextInputEmail from './components/textInputEmail';
import PasswordInput from './components/passwordInput';
import ButtonEntrar from './components/buttonEntrar';
import GoogleSignInButton from './components/buttonContinueGoogle';
import Header from '../componentsGlobais/header';
import { getStrings } from '../../strings/strings';
const LoginScreen = () => {
    const [text, setText] = React.useState("");
    return (

        <View style={styles.container}>

            <Image
                source={require('./imgs/background_img_loginScreen.png')}
                style={styles.backgroundImage}
            />
            <Header></Header>

            {/* <ScrollView style={styles.scrollViewAllItems}> */}

                <View style={styles.viewColumnTextInputs}>

                    <TextInputEmail></TextInputEmail>
                    <PasswordInput></PasswordInput>
                    <ButtonEntrar></ButtonEntrar>
                </View>
                <View style={styles.viewGoogle}>
                    <GoogleSignInButton></GoogleSignInButton>
                    <View style={styles.textsGoogle}>
                        <View style={styles.rowTextGoogle}>
                            <Text style={styles.whiteTextGoogle}> {getStrings().naoTemConta}</Text>
                            <Text style={styles.orangeTextGoogle}>{getStrings().registreSe}</Text>
                        </View>
                        <Text style={styles.orangeTextGoogle}>{getStrings().esqueceuSuaSenha}</Text>
                    </View>
                </View>

            {/* </ScrollView> */}

        </View>

    );

}

export default LoginScreen