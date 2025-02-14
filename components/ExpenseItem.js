import { Pressable, Text, View } from "react-native";

export default function ExpenseItem(){
    return (
        <View>
            <Pressable onPress={() => console.log('Pressed')}>
                <Text>Item</Text>
            </Pressable>
        </View>
    );
}