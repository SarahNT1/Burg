import { StatusBar } from 'expo-status-bar';
import Draggable from 'react-native-draggable';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Pressable, SafeAreaView, Dimensions, Text } from 'react-native';
import Ticket from './Ticket';
import { Audio } from 'expo-av';
import { useSettingsStore } from './hooks';

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
  const[selected, setSelected] = useState('');
  

  const[onBoard, setOnBoard] = useState([]);
  const[score, setScore] = useState(0);
  const [sound, setSound] = useState();
  const [bgMusic, setBgMusic] = useState();
  const settings = useSettingsStore((state) => state.settings);
  const[buttonPos, setButtonPos] = useState(220);
  const[boardPos, setBoardPos] = useState(200);
  const[ingPos, setIngPos] = useState(210);
  const[ticketPos, setTicketPos] = useState(65);
  const [visibility, setVisibility] = useState([0, 0, 0, 0, 0 ,0, 0]);

  const stackSource = [
    require('./assets/bunStack.png'),
    require('./assets/lettuceStack.png'),
    require('./assets/onionStack.png'),
    require('./assets/cheeseStack.png'),
    require('./assets/pattyStack.png'), 
    require('./assets/tomatoStack.png'),
    require('./assets/botBunStack.png')
  ]

  const boardSource = {
    'Top Bun': require('./assets/bun.png'),
    'Lettuce': require('./assets/lettuce.png'),
    'Onion': require('./assets/onion.png'),
    'Cheese': require('./assets/cheese.png'),
    'Patty': require('./assets/patty.png'), 
    'Tomato': require('./assets/tomato.png'),
    'Bottom Bun': require('./assets/botBun.png')
}

const imageSource = [
  require('./assets/bun.png'),
  require('./assets/lettuce.png'),
  require('./assets/onion.png'),
  require('./assets/cheese.png'),
  require('./assets/patty.png'), 
  require('./assets/tomato.png'),
  require('./assets/botBun.png')
]


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



  const instructionToggle =()=>{
    setInstructions(false);
  }


  

  const playSound = async(source) => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(source);
    setSound(sound);
    
    console.log('Playing Sound');
      sound.playAsync();
  }

  const playBgMusic = async() => {
    console.log('Loading bgMusic');
    const { sound } = await Audio.Sound.createAsync(require('./assets/bgMusic.mp3'));
    setBgMusic(sound);

    sound.setIsLoopingAsync(true);
    console.log('Playing bgMusic');
    sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    return bgMusic
      ? () => {
          console.log('Unloading bgMusic');
          bgMusic.unloadAsync();
        }
      : undefined;
  }, [bgMusic]);


  const handleRightClick =async()=>{
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
      let sound = require('./assets/ding.mp3');
      setOnBoard([]);
      setScore(score + 1);
      generateIngredientsList();
      if(!settings[1]){
        playSound(sound);
      }
    }
    else{
      let sound = require('./assets/buzzer.mp3');
      setOnBoard([]);
      if(!settings[1]){
        playSound(sound);
      }
    }
    setTicketNum(ticketNum + 1);
  }

  if(start){
    if(window.height <= 736){
      setButtonPos(170);
      setBoardPos(175);
      setIngPos(160);
      setTicketPos(40);
    }

    setTimeout(instructionToggle, 5000);
    setStart(false);
    generateIngredientsList();
  }


  const handleDrag =(e, ui)=>{
    // temp = [...visibility];
    // temp[index] = 1;
    // setVisibility(temp);
    
    if(ui.dx < -180){
      e.preventDefault();
      setOnBoard([...onBoard, selected]); 
      setVisibility([0, 0, 0, 0, 0, 0, 0])
    }
  }

  const handlePress =(index)=>{
      setSelected(ingredientList[ingredientList.length - 1 - index])
      setVisibility(
        visibility.map((item, i) => i === index ? 1 : item)
      )
    }

  useEffect(() => {
    if (!settings[0]) {
      playBgMusic();
    }
    else{
      if(bgMusic){
        bgMusic.unloadAsync();
      }
    }
  }, [settings[0]]);


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

        
        <Ticket ingredients={generatedIngredients} ticketNum={ticketNum} ticketPos={ticketPos}/>
        
        <View style={{display:'flex', justifyContent:'space-between', flexDirection:'column', top:ingPos, height:542/867*window.height, zIndex:-1}}>
        {stackSource.map((source, index) => (
          <View key={index}>
            
            <Image style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', alignSelf:'flex-end', left:-20}} source={source} />
            
            
              <Draggable shouldReverse onPressIn={() => handlePress(index) } onDrag={handleDrag} onPress={handlePress} >
              <Image key={index} style={{width:90/411*window.width, height:66/867*window.height, objectFit:'fill', left: 286, opacity:visibility[index]}} source={imageSource[index]} />
              </Draggable>

            
            
          </View>
        ))}
        </View>
                                                                                                                                  

        <View style={{width:245/411*window.width, height:450/867*window.height, position:'absolute', zIndex:-2, top:235, left:80, flex:1, flexDirection:'column-reverse', justifyContent:'flex-start'}}>
        {onBoard.map((ingredient, index) => (
                                
                                <View key={index}>
                                    <Image style={{width: 90/411*window.width, height: 66/867*window.height, objectFit: 'fill', left: 5, zIndex:10}} source={boardSource[ingredient]}/>
                                </View>
                            ))}
        </View>

        <Image style={{width:245/411*window.width, height:548/867*window.height, objectFit:'fill', position:'absolute', top:boardPos, left:10, zIndex:-3}} source={require('./assets/board.png')} />
        

        <View style={{display:'flex', justifyContent:'space-around', top:buttonPos, flexDirection:'row', left:-4}}>
        <Pressable onPress={() => setOnBoard([])}>
        <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnWrong.png')} />
        </Pressable>
        <Pressable onPress={handleRightClick}>
        <Image style={{width:170/411*window.width, height:91/867*window.height, objectFit:'fill'}} source={require('./assets/btnRight.png')} />
        </Pressable>
                                                                                                           
        </View>      

        


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