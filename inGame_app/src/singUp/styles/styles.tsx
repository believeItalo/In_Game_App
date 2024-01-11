import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height:860,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'blue'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
});

export default styles
