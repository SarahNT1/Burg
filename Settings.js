import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Pressable, SafeAreaView, Dimensions, BackHandler, Text } from 'react-native';
import { useState } from 'react';

const window = Dimensions.get("window");

export default function App({navigation}) {
    const [music, setMusic] = useState(require('./assets/musicOn.png'));
    const [sfx, setSfx] = useState(require('./assets/sfxOn.png'));

    const toggleMusic = () => {
        if(music === require('./assets/musicOn.png')) {
            setMusic(require('./assets/musicOff.png'));
        } else {
            setMusic(require('./assets/musicOn.png'));
        }
    }

    const toggleSfx = () => {
        if(sfx === require('./assets/sfxOn.png')) {
            setSfx(require('./assets/sfxOff.png'));
        } else {
            setSfx(require('./assets/sfxOn.png'));
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Image style={{width:250/411*window.width, height:80/867*window.height, objectFit:'scale-down', top:90/867*window.height, left:20/411*window.width}} source={require('./assets/title.png')} />
        <Image style={{width:245/411*window.width, height:119/867*window.height, objectFit:'fill', top:100/867*window.height}} source={require('./assets/mouth.png')} />
        <Image style={{width:331/411*window.width, height:496/867*window.height, objectFit:'fill', top:150/867*window.height}} source={require('./assets/settingsBox.png')} />

        <Pressable onPress={toggleMusic} style={{top:465/867*window.height, left:87/411*window.width, position:'absolute'}} >
        <Image style={{width:90/411*window.width, height:90/867*window.height, objectFit:'fill'}} source={music} />
        </Pressable>

        <Pressable onPress={toggleSfx} style={{top:465/867*window.height, left:237/411*window.width, position:'absolute'}} >
        <Image style={{width:90/411*window.width, height:90/867*window.height, objectFit:'fill'}} source={sfx} />
        </Pressable>

        <Text style={styles.note}>*Music will be implemented in the next update</Text>
        
        <Pressable style={{position:'absolute', top:700/867*window.height, left:110/411*window.width}} onPress={() => BackHandler.exitApp()}>
        <Image style={{width:196/411*window.width, height:83/867*window.height}} source={require('./assets/exit.png')} />
        </Pressable>

        <Pressable style={{position:'absolute', alignSelf:'flex-end', top:377/867*window.height, right:60/411*window.width}} onPress={() => navigation.goBack()}>
            <Image style={{width:46/411*window.width, height:42/867*window.height, objectFit:'fill'}} source={require('./assets/close.png')} />
        </Pressable>

    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE1AB',
      alignItems: 'center'
    },

    note: {
        fontSize: 10,
        color: 'black',
        fontWeight: '100',
        opacity: 1,
        bottom: 90/867*window.height
    }
    });