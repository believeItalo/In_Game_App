import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/login_screen/loginScreen';
import SingUpScreen from './src/singUp_screen/singUpScreen';
import { HomeScreen } from './src/home_screen/homeScreen';

export default function App() {
  return (
      <SingUpScreen></SingUpScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
