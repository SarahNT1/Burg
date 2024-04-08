import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, SafeAreaView } from 'react-native';

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height:'auto'}}>
        <StatusBar style="auto" />

        <Image style={{width:390, height:111, objectFit:'fill', position:'absolute', top:50}} source={require('./assets/orderBar.png')} />
        <Pressable onPress={() => navigation.goBack()}>
        <Image style={{width:50, height:50, objectFit:'fill', position:'absolute', top:80, left:330}} source={require('./assets/pause.png')} />
        </Pressable>
        
        <Image style={{width:245, height:548, objectFit:'fill', position:'absolute', top:200, left:10}} source={require('./assets/board.png')} />

        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'column', top:200, height:542}}>
        <Image style={{width:90, height:66, objectFit:'fill', left:286}} source={require('./assets/bunStack.png')} />
        <Image style={{width:90, height:66, objectFit:'fill', left:286}} source={require('./assets/lettuceStack.png')} />
        <Image style={{width:90, height:66, objectFit:'fill', left:286, bottom:3}} source={require('./assets/onionStack.png')} />
        <Image style={{width:90, height:66, objectFit:'fill', left:286}} source={require('./assets/cheeseStack.png')} />
        <Image style={{width:90, height:66, objectFit:'fill', left:286}} source={require('./assets/pattyStack.png')} />
        <Image style={{width:90, height:66, objectFit:'fill', left:286}} source={require('./assets/tomatoStack.png')} />
        <Image style={{width:90, height:66, objectFit:'fill', left:286}} source={require('./assets/botBunStack.png')} />
        </View>

        <View style={{display:'flex', justifyContent:'space-around', top:220, flexDirection:'row', left:-4}}>
        <Image style={{width:170, height:91, objectFit:'fill'}} source={require('./assets/btnWrong.png')} />
        <Image style={{width:170, height:91, objectFit:'fill'}} source={require('./assets/btnRight.png')} />
        </View>      
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