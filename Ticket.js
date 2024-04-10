import { StyleSheet, View, Text, Image, Pressable, SafeAreaView, Dimensions, Alert } from "react-native";
import { useState } from "react";

const window = Dimensions.get("window");

export default function Ticket({ingredients, ticketNum}){
    const[pressed, setPressed] = useState(false);
    const imageSource = {
        'Top Bun': require('./assets/bunStack.png'),
        'Lettuce': require('./assets/lettuceStack.png'),
        'Onion': require('./assets/onionStack.png'),
        'Cheese': require('./assets/cheeseStack.png'),
        'Patty': require('./assets/pattyStack.png'), 
        'Tomato': require('./assets/tomatoStack.png'),
        'Bottom Bun': require('./assets/botBunStack.png')
    }

    return (
        <View>
            <View>
                {pressed && (
                    <Pressable style={{position: 'absolute', bottom: 5, left: 105}} onPress={() => setPressed(false)}>
                        <View style={{width: 200, height: 400, backgroundColor: 'white', borderWidth: 2, borderColor: 'gray', flex: 1, flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center'}}>
                            {ingredients.map((ingredient, index) => (
                                <View key={index}>
                                    <Image style={{width: 90/411*window.width, height: 66/867*window.height, objectFit: 'fill', left: 5}} source={imageSource[ingredient]}/>
                                </View>
                            ))}
                        </View>
                    </Pressable>
                )}
            </View>
            <Pressable style={{position: 'absolute', bottom: 380, left: 15}} onPress={() => setPressed(true)}>
                <View style={{backgroundColor: 'white', borderWidth: 2, borderColor: 'gray', width: 60, height: 125, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 25}}>
                        {ticketNum}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}