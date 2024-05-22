import { StyleSheet, Dimensions  } from 'react-native';
const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent:'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    viewColumnTextInputs: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height:'60%', 
        alignItems: 'center',
        justifyContent:'center',
        gap: 15,
    },
    viewGoogle: {
        width: '100%',
        height:'20%',
        alignItems:'center',
        gap:12,
    },
    textsGoogle:{
        width:'85%',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        display:'flex',
        flexDirection:'column'
    },
    rowTextGoogle: {
        display: 'flex',
        flexDirection: 'row',
    },
    orangeTextGoogle: {
        color:'#EA6925',
        fontSize:16,
    },
    whiteTextGoogle: {
        color:'white',
        fontSize:16
    }
});

export default styles;
