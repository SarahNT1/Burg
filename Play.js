import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Pressable, SafeAreaView, Dimensions, Text } from 'react-native';
import Pause from './Pause';
import Ticket from './Ticket';
import Draggable from 'react-draggable';

const window = Dimensions.get("window");

export default function App({navigation}) {
  const[start, setStart] = useState(true);
  const[ticketNum, setTicketNum] = useState(1);
  const[generatedIngredients, setGeneratedIngredients] = useState([]);
  const[onBoard, setOnBoard] = useState([]);
  const[score, setScore] = useState(0);

  const stackSource = [
    require('./assets/bunStack.png'),
    require('./assets/lettuceStack.png'),
    require('./assets/onionStack.png'),
     require('./assets/cheeseStack.png'),
    require('./assets/pattyStack.png'), 
    require('./assets/tomatoStack.png'),
    require('./assets/botBunStack.png')
  ]

  const imageSource = {
    'Top Bun': require('./assets/bun.png'),
    'Lettuce': require('./assets/lettuce.png'),
    'Onion': require('./assets/onion.png'),
    'Cheese': require('./assets/cheese.png'),
    'Patty': require('./assets/patty.png'), 
    'Tomato': require('./assets/tomato.png'),
    'Bottom Bun': require('./assets/botBun.png')
}
const ingredientList = ['Bottom Bun', 'Tomato', 'Patty', 'Cheese', 'Onion', 'Lettuce', 'Top Bun'];

  const generateIngredientsList =()=>{
    let randNum = 0;
    const ingredients = [];

    for(let i = 0; i < 7; i++){
      if(i == 0){
        ingredients[i] = ingredientList[0];
      }
      else if(i == 6){
        ingredients[i] = ingredientList[6];
      }
      else{
        randNum = Math.floor(Math.random() * 6);
        ingredients[i] = ingredientList[randNum];
      }
    }
    setGeneratedIngredients(ingredients);
  }

  const handleStackClick =(index)=>{
    setOnBoard([...onBoard, ingredientList[ingredientList.length - 1 - index]]);
    console.log(onBoard);
  }

  const handleRightClick =()=>{
    let correct = true;
    if(onBoard.length != generatedIngredients.length){
      correct = false;
    }
    else{
      for(let i = 0; i < onBoard.length; i++){
        if(onBoard[i] != generatedIngredients[i]){
          correct = false;
        }
      }
    }

    if(correct){
      setTicketNum(ticketNum + 1);
      setOnBoard([]);
      setScore(score + 1);
      generateIngredientsList();
    }
    else{
      alert('Incorrect! MAKE IT AGAIN!');
      setOnBoard([]);
    }
  }

  if(start){
    setStart(false);
    generateIngredientsList();
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
        <Text style={{position:'absolute', top:30, left:20, fontSize:20}}>Score: {score}</Text>

        <View style={{position:'absolute', top:50}}>
          <Image style={{width:390/411*window.width, height:111/867*window.height, objectFit:'fill'}} source={require('./assets/orderBar.png')} />
        </View>

        <Pressable style={{ position:'absolute', top:80, left:330/411*window.width}} onPress={() => navigation.navigate('Pause')}>
        <Image style={{width:50/411*window.width, height:50/867*window.height, objectFit:'fill'}} source={require('./assets/pause.png')} />
        </Pressable>

        
        <Ticket ingredients={generatedIngredients} ticketNum={ticketNum}/>
        
        <View style={{width:245/411*window.width, height:450/867*window.height, position:'absolute', zIndex:1, top:235, left:80, flex:1, flexDirection:'column-reverse', justifyContent:'flex-start'}}>
        {onBoard.map((ingredient, index) => (
                                <View key={index}>
                                    <Image style={{width: 90/411*window.width, height: 66/867*window.height, objectFit: 'fill', left: 5}} source={imageSource[ingredient]}/>
                                </View>
                            ))}
        </View>
        <Image style={{width:245/411*window.width, height:548/867*window.height, objectFit:'fill', position:'absolute', top:200, left:10}} source={require('./assets/board.png')} />

        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'column', top:200, height:542/867*window.height}}>
        {stackSource.map((source, index) => (
          <View key={index}>
            <Pressable style={{left:286}} onPress={() => handleStackClick(index)}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill'}} source={source} />
            </Pressable>
          </View>
        ))}
        </View>

        <View style={{display:'flex', justifyContent:'space-around', top:220, flexDirection:'row', left:-4}}>
        <Pressable onPress={() => setOnBoard([])}>
        <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnWrong.png')} />
        </Pressable>
        <Pressable onPress={handleRightClick}>
        <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnRight.png')} />
        </Pressable>
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