import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useState } from 'react';

export default function App() {
  const [expenseItem,setExpenseItem] = useState({
    category : "Household",
    description : "Rent",
    date : "22-10-25",
    amount : 4000,
  });
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
       <Tab.Navigator screenOptions={
        {
          headerRight : () => <Icon name="add" size={30}/>
        }
       }>
        <Tab.Screen name="Recent expenses" component={RecentExpensesScreen} options={{tabBarIcon : ({color, size}) => <Icon name="hourglass" size={size} color={color}/> }}/>
        <Tab.Screen name="All expenses" component={AllExpensesScreen} options={{tabBarIcon : ({color, size}) => <Icon name="calendar" size={size} color={color}/> }}/>
       </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
