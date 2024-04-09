import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Play from './Play';
import Settings from './Settings';
import Pause from './Pause';

const Stack = createNativeStackNavigator();
//test git change

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{headerShown:false,
                  animationTypeForReplace:'push',
                  animation:'slide_from_right'}} />
        <Stack.Screen name="Play" component={Play} 
        options={{headerShown:false,
          animationTypeForReplace:'pop',
          animation:'slide_from_right'}} /> 
        <Stack.Screen name="Settings" component={Settings}
        options={{headerShown:false,
          animationTypeForReplace:'pop',
          animation:'slide_from_bottom'}} />
        <Stack.Screen name="Pause" component={Pause}
        options={{headerShown:false,
          animationTypeForReplace:'pop',
          animation:'slide_from_bottom'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
