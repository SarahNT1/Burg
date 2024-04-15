import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, Dimensions, Alert } from "react-native";
import { useState } from "react";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");



export default function Ticket({ingredients, ticketNum, ticketPos}){
    const[pressed, setPressed] = useState(false);
    const imageSource = {
        'Top Bun': require('./assets/bun.png'),
        'Lettuce': require('./assets/lettuce.png'),
        'Onion': require('./assets/onion.png'),
        'Cheese': require('./assets/cheese.png'),
        'Patty': require('./assets/patty.png'), 
        'Tomato': require('./assets/tomato.png'),
        'Bottom Bun': require('./assets/botBun.png')

    }

    return (
        <View>
            <View>
                {pressed && (


                    <Pressable style={{position:'absolute', zIndex:5, width:screen.width, height:screen.height}} onPress={() => setPressed(false)}>
                        <View style={{position:'absolute', top:180, left:105,  backgroundColor: 'white', width: 200/411*window.width, height: 480/867*window.height, borderWidth: 2, borderColor: 'gray', flex: 1, flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center'}}>


                            {ingredients.map((ingredient, index) => (
                                <View key={index}>
                                    <Image style={{width: 90/411*window.width, height: 66/867*window.height, objectFit: 'fill', left: 5}} source={imageSource[ingredient]}/>
                                </View>
                            ))}
                        </View>
                    </Pressable>
                )}
            </View>

            <Pressable style={{position: 'absolute', top:ticketPos, left: 35}} onPress={() => setPressed(true)}>
                <View style={{backgroundColor: 'white', borderWidth: 2, borderColor: 'gray', width: 60/411*window.width, height: 105/867*window.height, flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                    <Text style={{fontSize: 25}}>
                        {ticketNum}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}