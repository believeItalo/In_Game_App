import { StyleSheet, Dimensions } from 'react-native';
const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
    },
    columnRegisterFields: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'column',
        gap: 15,
        marginTop: 40
    },
    viewSexAndBirthday: {
    },
    viewContinueWithGoogleAndIfAccount: {
        width: 'auto',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 5,
        gap: 30
    },
    textEnter: {
        color: '#EA6925',
        fontSize: 18
    },
    textAlreadyHaveAnAccount: {
        color: 'white',
        fontSize: 18,
        paddingRight: 5
    },
    viewAlreadyHaveAnAccount: {
        flexDirection: 'row',
    },
    textComeToThe: {
        color: 'white',
        fontSize: 20
    },
    textGame: {
        color: '#EA6925',
        fontSize: 20
    },
    viewComeTotheGame: {
        alignItems: 'center',
        marginTop: -20
    },
    viewBirthdayandSex: { 
        flexDirection: 'row', justifyContent: 'space-between' 
    }
});

export default styles
