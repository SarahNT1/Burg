import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, SafeAreaView, Dimensions } from 'react-native';

const window = Dimensions.get("window");

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={{width:250/411*window.width, height:80/867*window.height, objectFit:'scale-down', top:90, left:20}} source={require('./assets/title.png')} />
        <Image style={{width:245/411*window.width, height:119/867*window.height, objectFit:'fill', top:100}} source={require('./assets/mouth.png')} />
        <Image style={{width:331/411*window.width, height:496/867*window.height, objectFit:'cover', top:150}} source={require('./assets/settingsBox.png')} />
        <Image style={{width:90/411*window.width, height:90/867*window.height, position:'absolute', top:465, left:87}} source={require('./assets/musicOn.png')} />
        <Image style={{width:90/411*window.width, height:90/867*window.height, position:'absolute', top:465, left:237}} source={require('./assets/sfxOn.png')} />
        <Image style={{width:196/411*window.width, height:83/867*window.height, position:'absolute', top:700, left:110}} source={require('./assets/exit.png')} />
        <Image style={{width:46/411*window.width, height:42/867*window.height, position:'absolute', top:500, left:110}} source={require('./assets/close.png')} />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE1AB',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }
    });