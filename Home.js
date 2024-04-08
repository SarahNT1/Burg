import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, SafeAreaView, Dimensions, Text } from 'react-native';

const window = Dimensions.get("window");

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.burg} source={require('./assets/title.png')} />
      <Image style={styles.mouth} source={require('./assets/mouth.png')} />
      {/* <Text style={{top:100}}>{window.width}</Text>
      <Text style={{top:100}}>{window.height}</Text> */}
      <Image style={styles.table} source={require('./assets/table.png')} />
      <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}} >
        <Pressable onPress={() => navigation.navigate('Play')}>
            <Image style={styles.play} source={require('./assets/play.png')} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Settings')}>
        <Image style={styles.settings} source={require('./assets/settings.png')} />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE1AB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  burg: {
    width: (255/411*window.width),
    height: (80/867*window.height),
    objectFit: 'scale-down',
    top: 70,
    marginLeft: 20,
  },

  mouth: {
    width: 245/411*window.width,
    height: 119/867*window.height,
    top: 80,
    objectFit: 'fill',
  },

  table: {
    width: 290/411*window.width,
    height: 425/867*window.height,
    top: 195,
    objectFit: 'fill',
  },

  play: {
    width: 157/411*window.width,
    height: 68/867*window.height, 
  },

  settings: {
    width: 67/411*window.width,
    height: 68/867*window.height,
    marginLeft: 7,
  },
});

