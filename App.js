import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Play from './Play';

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
