import { FlatList } from "react-native"
// import ExpenseItem from "./ExpenseItem.js";


export default function ExpenseList({expenses}){
    return (
       <FlatList
       data={expenses}
       keyExtractor={item => item.id}
       renderItem={({ item }) => (
        <Pressable onPress={() => onPressItem(item)} style={styles.item}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <View>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </Pressable>
      )}
       />
    );
}