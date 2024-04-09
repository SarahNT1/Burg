import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, SafeAreaView, Dimensions } from 'react-native';
import Pause from './Pause';

const window = Dimensions.get("window");

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

        <StatusBar style="auto" />

        <Image style={{width:390/411*window.width, height:111/867*window.height, objectFit:'fill', position:'absolute', top:50}} source={require('./assets/orderBar.png')} />

        <Pressable style={{ position:'absolute', top:80, left:330/411*window.width}} onPress={() => navigation.navigate('Pause')}>
        <Image style={{width:50/411*window.width, height:50/867*window.height, objectFit:'fill'}} source={require('./assets/pause.png')} />
        </Pressable>
        
        <Image style={{width:245/411*window.width, height:548/867*window.height, objectFit:'fill', position:'absolute', top:200, left:10}} source={require('./assets/board.png')} />

        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'column', top:200, height:542/867*window.height}}>
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/bunStack.png')} />
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/lettuceStack.png')} />
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, bottom:3}} source={require('./assets/onionStack.png')} />
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/cheeseStack.png')} />
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/pattyStack.png')} />
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/tomatoStack.png')} />
        <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/botBunStack.png')} />
        </View>

        <View style={{display:'flex', justifyContent:'space-around', top:220, flexDirection:'row', left:-4}}>
        <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnWrong.png')} />
        <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnRight.png')} />
        </View>      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1AB',
  },
});