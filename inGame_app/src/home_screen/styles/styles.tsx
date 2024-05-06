import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    container:{
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    viewInitialText:{
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'5%'
    },
    initialWhiteText:{
        fontSize: 26,
        color: 'white',
        fontWeight: '500'
    },
    initialOrangeText:{
        fontSize: 26,
        color: '#EA6925',
        fontWeight: '500'
    },
    columnContentCards:{
        alignItems: 'center',
        paddingBottom: '50%',
        gap:15
    },
    contentCards:{
        width: "85%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    innerCardText:{
        fontSize:22,
        fontWeight:'500',
        color:'#EA6925'
    },
    cardBackgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,   
    }
})