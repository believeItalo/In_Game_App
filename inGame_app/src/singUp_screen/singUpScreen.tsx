import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles/styles'
import Header from '../componentsGlobais/header';
import TextInputEmail from './components/textInputEmail';
import TextInputName from './components/textInputName';
import PasswordInput from './components/passwordInput';
import ConfirmPassword from './components/confirmPassword'
import PositionPicker from './components/choosePosition';
import ChooseSex from './components/chooseSex'
import ButtonRegister from './components/buttonSingUp';
import ButtonGoogleSignIn from './components/buttonGoogleSignIn'
import DateOfBirthPicker from './components/birthdayPicker';
import { getStrings } from '../../strings/strings';
import axios from 'axios';
const SingUpScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [position, setPosition] = useState("")
    const [dataNasc, setdataNasc] = useState("")
    const [sexo, setSexo] = useState("")

    //manipula o input do nome
    const handleNameChange = (value) => {
        setName(value); // Atualiza o estado com o valor do email
      
        return value; // Retorna o valor do name
    }

    //manipula o input do email
    const handleEmailChange = (value) => {
        setEmail(value); // Atualiza o estado com o valor do email
     
        return value; // Retorna o valor do email
    }

    //manipula o input de Password
    const handlePasswordChange = (value) => {
        setPassword(value); // Atualiza o estado com o valor do email
    
        return value; // Retorna o valor do Password
    }

    //manipula o input de Position
    const handlePositionChange = (value) => {
        setPosition(value); // Atualiza o estado com o valor do email

        return value; // Retorna o valor do Position
    }

    //manipula o input Sexo
    const handleSexChange = (value) => {
        setSexo(value); // Atualiza o estado com o valor do email

        return value; // Retorna o valor do Sexo
    }

    const handleDateChange = (value) => {
        setdataNasc(value); // Atualiza o estado com o valor da data de nascimento
        return value; // Retorna o valor do email
    }

    const jsonApi = {
        "nome": name,
        "email": email,
        "senha": password,
        "position": position,
        "sexo": sexo,
        "data_nasc": dataNasc
    }

    console.log(jsonApi);



    return (
        <View style={styles.container}>
            <Image
                source={require('./imgs/background_img_loginScreen.png')}
                style={styles.backgroundImage}
            />
            <Header></Header>
            <View style={styles.columnRegisterFields}>

                <View style={styles.viewComeTotheGame}>
                    <Text style={styles.textComeToThe}>{getStrings().venhaFazerParteDo}</Text>
                    <Text style={styles.textGame}>{getStrings().game}</Text>
                </View>

                <TextInputName onChangeText={handleNameChange} ></TextInputName>
                <TextInputEmail onChangeText={handleEmailChange}></TextInputEmail>
                <PasswordInput onChangeText={handlePasswordChange}></PasswordInput>
                <ConfirmPassword ></ ConfirmPassword>
                <PositionPicker onChangeValue={handlePositionChange}></PositionPicker>
                <View style={styles.viewBirthdayandSex}>
                    <DateOfBirthPicker onChangeText={handleDateChange}></DateOfBirthPicker>
                    <ChooseSex onChangeValue={handleSexChange}></ChooseSex>
                </View>
                <ButtonRegister></ButtonRegister>

                <View style={styles.viewContinueWithGoogleAndIfAccount}>
                    <ButtonGoogleSignIn></ButtonGoogleSignIn>
                    <View style={styles.viewAlreadyHaveAnAccount}>
                        <Text style={styles.textAlreadyHaveAnAccount}>{getStrings().jaTemUmaConta}</Text>
                        <Text style={styles.textEnter}>{getStrings().entre}</Text>
                    </View>

                </View>
            </View>
        </View>

    );
}
export default SingUpScreen