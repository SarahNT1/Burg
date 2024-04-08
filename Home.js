import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Pressable, SafeAreaView } from 'react-native';

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.burg} source={require('./assets/title.png')} />
      <Image style={styles.mouth} source={require('./assets/mouth.png')} />
      <Image style={styles.table} source={require('./assets/table.png')} />
      <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row'}} >
        <Pressable onPress={() => navigation.navigate('Play')}>
            <Image style={styles.play} source={require('./assets/play.png')} />
        </Pressable>
        <Image style={styles.settings} source={require('./assets/settings.png')} />
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
    width: 255,
    height: 80,
    objectFit: 'scale-down',
    top: 70,
    marginLeft: 20,
  },

  mouth: {
    width: 245,
    height: 119,
    top: 80,
    objectFit: 'fill',
  },

  table: {
    width: 290,
    height: 425,
    top: 195,
    objectFit: 'cover',
  },

  play: {
    width: 157,
    height: 68, 
  },

  settings: {
    width: 67,
    height: 68,
    marginLeft: 7,
  },
});

