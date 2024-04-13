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

                <TextInputName onChangeText={setName} ></TextInputName>
                <TextInputEmail onChangeText={setEmail}></TextInputEmail>
                <PasswordInput onChangeText={setPassword}></PasswordInput>
                <ConfirmPassword ></ConfirmPassword>
                <PositionPicker onChangeValue={setPosition}></PositionPicker>
                <View style={styles.viewBirthdayandSex}>
                    <DateOfBirthPicker></DateOfBirthPicker>
                    <ChooseSex onChangeValue={setSexo}></ChooseSex>
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