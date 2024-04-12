import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image, Pressable, SafeAreaView, Dimensions, Text, Alert } from 'react-native';
import Ticket from './Ticket';
import Draggable from 'react-native-draggable';

const window = Dimensions.get("window");

export default function App({navigation}) {
  const[instructions, setInstructions] = useState(true);
  const[start, setStart] = useState(true);
  const[ticketNum, setTicketNum] = useState(1);
  const ingredientList = [
    'Bottom Bun', 
    'Tomato', 
    'Patty', 
    'Cheese', 
    'Onion', 
    'Lettuce', 
    'Top Bun'
  ];
  const[generatedIngredients, setGeneratedIngredients] = useState([]);
  const[board, setBoard] = useState([]);
  const[selected, setSelected] = useState('');
  const imageSource = {
    'Top Bun': require('./assets/bunStack.png'),
    'Lettuce': require('./assets/lettuceStack.png'),
    'Onion': require('./assets/onionStack.png'),
    'Cheese': require('./assets/cheeseStack.png'),
    'Patty': require('./assets/pattyStack.png'), 
    'Tomato': require('./assets/tomatoStack.png'),
    'Bottom Bun': require('./assets/botBunStack.png')
  };
  
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

  const correct =()=>{
    let equal = true;

    if(board.length == generatedIngredients.length){

      for(let i = 0; i < 7; i++){
        if(board[i] != generatedIngredients[i]){
          equal = false;
          break;
        }
      }
      return equal;
    }

    return false;
  }

  const handleButtonClick =()=>{
    generateIngredientsList();
    if(correct()){
      Alert.alert('Correct!');
    }
    else{
      Alert.alert('Incorrect.');
    }
    setBoard([]);
  }

  const handleWrongClick =()=>{
    setBoard([]);
  }

  const instructionToggle =()=>{
    setInstructions(false);
  }

  if(start){
    setTimeout(instructionToggle, 5000);
    setStart(false);
    generateIngredientsList();
  }

  const handleDrag =(e, ui)=>{
    if(ui.dx < -180){
      e.preventDefault();
      // setTest(false);
      if(board.length < 7){
        // Alert.alert(`Board length: ${board.length}`);
        setBoard([...board, selected]);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>

        <StatusBar style="auto" />

        <Image style={{width:390/411*window.width, height:111/867*window.height, objectFit:'fill', position:'absolute', top:50}} source={require('./assets/orderBar.png')} />
        <Pressable onPress={() => navigation.goBack()} style={{position: 'absolute', top: 80, left: 330/411*window.width}}>
          <Image style={{width:50/411*window.width, height:50/867*window.height, objectFit:'fill'}} source={require('./assets/pause.png')} />
        </Pressable>
        
        <Image style={{width:245/411*window.width, height:548/867*window.height, objectFit:'fill', position:'absolute', top:200, left:10}} source={require('./assets/board.png')} />

        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'column', top:180, height:542/867*window.height}}>
          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left: 286}} source={require('./assets/bunStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Top Bun')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left: 286}} source={require('./assets/bunStack.png')} />
          </Draggable>

          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/lettuceStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Lettuce')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, top: 67}} source={require('./assets/lettuceStack.png')} />
          </Draggable>

          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, bottom:3}} source={require('./assets/onionStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Onion')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, top: 132}} source={require('./assets/onionStack.png')} />
          </Draggable>

          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/cheeseStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Cheese')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, top: 202}} source={require('./assets/cheeseStack.png')} />
          </Draggable>

          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/pattyStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Patty')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, top: 269}} source={require('./assets/pattyStack.png')} />
          </Draggable>

          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/tomatoStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Tomato')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, top: 337}} source={require('./assets/tomatoStack.png')} />
          </Draggable>

          <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286}} source={require('./assets/botBunStack.png')} />
          <Draggable shouldReverse onPressIn={() => setSelected('Bottom Bun')} onDrag={handleDrag}>
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left:286, top: 404}} source={require('./assets/botBunStack.png')} />
          </Draggable>
        </View>

        <View style={{display:'flex', justifyContent:'space-around', top:220, flexDirection:'row', left:-4}}>
          <Pressable onPress={handleWrongClick}>
            <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnWrong.png')} />
          </Pressable>
          <Pressable onPress={() => {handleButtonClick(); setTicketNum(ticketNum + 1)}}>
            <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnRight.png')} />
          </Pressable>
        </View>      

        <View style={{width: 125/411*window.width, height: 580/867*window.height, position:'absolute', zIndex: 1, top: 150, left: 70, flex: 1, flexDirection: 'column-reverse', justifyContent: 'flex-start', alignItems: 'center'}}>
          {board.map((ingredient, index) => (
            <View key={index}>
              <Image style={{width: 90/411*window.width, height: 66/867*window.height, objectFit: 'fill', left: 5}} source={imageSource[ingredient]}/>
            </View>
          ))}
        </View>

        <Ticket ingredients={generatedIngredients} ticketNum={ticketNum}/>

        <View>
          {instructions && (
            <View style={{borderWidth: 2, width: 300, height: 200, position: 'absolute', left: 55, bottom: 100, backgroundColor: '#FFE1AB', borderRadius: 25, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>
                Instructions:
              </Text>
              <Text style={{paddingLeft: 10, marginBottom: 5, marginTop: 20}}>
                Copy the burger from the ticket.
              </Text>
              <Text style={{paddingLeft: 10, marginBottom: 5, marginTop: 5}}>
                Drag the ingredients to the board.
              </Text>
              <Text style={{paddingLeft: 10, marginBottom: 5, marginTop: 5}}>
                Click check to submit or x to start again.
              </Text>
            </View>
          )}
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