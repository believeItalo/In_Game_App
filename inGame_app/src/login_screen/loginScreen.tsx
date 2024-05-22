import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import styles from './styles/style';
import TextInputEmail from './components/textInputEmail';
import PasswordInput from './components/passwordInput';
import ButtonEntrar from './components/buttonSingIn';
import GoogleSignInButton from '../componentsGlobais/buttonContinueGoogle';
import Header from '../componentsGlobais/header';
import { getStrings } from '../../strings/strings';
import { log_api } from './services/loginUserService';


const LoginScreen = () => {

    // a função abaixo é utilizada para retornar o valor do texto do componente
    const [emailValue, setEmailValue] = React.useState(""); // é nescessario criar esse estado
    // para que o codigo da tela consiga armazenar o valor do texto que será utilizado posteriormente
    //na chamada da api
    const [passwordValue, setPasswordValue] = React.useState("");

    //função que lida com o valor do input no contexto dessa tela
    const handleEmailChange = (value) => {
        setEmailValue(value); // Atualiza o estado com o valor do email
        //console.log(value);
        return value; // Retorna o valor do email
    }

    //função que lida com o valor do input no contexto dessa tela
    const handlePasswordChange = (value) => {
        setPasswordValue(value); // Atualiza o estado com o valor do email
        //console.log(value);
        return value; // Retorna o valor do email
    }

    //função que aramazena os valores dos inputs e os formatam para fazer a requisição na api
    const jsonApiLogin = {
        "email": emailValue,
        "senha": passwordValue
    }

    //função responsavel por cuidar do serviço de login
    const handleLogin = async () => {
        try {
            const response = await log_api.logUser(jsonApiLogin);
            console.log(jsonApiLogin);
            
            console.log('Login successful:', response);
          
        } catch (error) {
            console.log(jsonApiLogin);
            console.error('Erro ao fazer login:', error);
            
        }
    }


    return (

        <View style={styles.container}>

            <Image
                source={require('./imgs/background_img_loginScreen.png')}
                style={styles.backgroundImage}
            />
            <Header></Header>

            <View style={styles.viewColumnTextInputs}>
                <TextInputEmail onInputChange={handleEmailChange}></TextInputEmail>
                <PasswordInput onInputChange={handlePasswordChange}></PasswordInput>
                    <ButtonEntrar onPress={handleLogin}></ButtonEntrar>
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

        </View>

    );

}

export default LoginScreen

