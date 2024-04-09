import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Pressable, SafeAreaView, Dimensions } from 'react-native';
import { useState } from 'react';

const window = Dimensions.get("window");

export default function App({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Image style={{width:250/411*window.width, height:80/867*window.height, objectFit:'scale-down', top:90/867*window.height, left:20/411*window.width}} source={require('./assets/title.png')} />
        <Image style={{width:245/411*window.width, height:119/867*window.height, objectFit:'fill', top:100/867*window.height}} source={require('./assets/mouth.png')} />
        <Image style={{width:331/411*window.width, height:496/867*window.height, objectFit:'fill', top:150/867*window.height}} source={require('./assets/pauseBox.png')} />

        <Pressable style={{top:525/867*window.height, left:87/411*window.width, position:'absolute'}} onPress={() => navigation.goBack()}>
        <Image style={{width:164/411*window.width, height:78/867*window.height, objectFit:'fill'}} source={require('./assets/btnPlay.png')} />
        </Pressable>

        <Pressable style={{top:525/867*window.height, left:251/411*window.width, position:'absolute'}} onPress={() => navigation.navigate('Settings')}>
        <Image style={{width:75/411*window.width, height:78/867*window.height, objectFit:'fill'}} source={require('./assets/btnSettings.png')} />
        </Pressable>

        <Pressable style={{top:680/867*window.height, left:165/411*window.width, position:'absolute'}} onPress={() => navigation.navigate('Home')}>
        <Image style={{width:94/411*window.width, height:78/867*window.height, objectFit:'fill'}} source={require('./assets/btnHome.png')} />
        </Pressable>

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE1AB',
      alignItems: 'center'
    }
    });