import { StyleSheet } from 'react-native';

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
    // scrollViewAllItems: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     // alignItems: 'center',
    //     // width: '100%',
    //     backgroundColor: 'tomato'
    // },
    viewColumnTextInputs: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height:'auto',
        alignItems: 'center',
        gap: 15
    },
    viewGoogle: {
        width: '100%',
        height:'20%',
        alignItems:'center',
        gap:12
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
        paddingLeft:'1%'
    },
    whiteTextGoogle: {
        color:'white',
        fontSize:16
    }
});

export default styles