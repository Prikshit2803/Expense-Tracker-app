import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/store';
import { addExpense } from './store/ExpenseSlice';

export default function App() {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();
  const expenseData = {
   title : 'hello',
   amount : 23,
   category : "jj",
    date : "dd"
  };
  return (
    <Provider store={store}>
    <NavigationContainer>
       <Tab.Navigator screenOptions={
        {
          headerRight : () => <Icon name="add" size={30} onPress={dispatch(addExpense(expenseData))}/>
        }
       }>
        <Tab.Screen name="Recent expenses" component={RecentExpensesScreen} options={{tabBarIcon : ({color, size}) => <Icon name="hourglass" size={size} color={color}/> }}/>
        <Tab.Screen name="All expenses" component={AllExpensesScreen} options={{tabBarIcon : ({color, size}) => <Icon name="calendar" size={size} color={color}/> }}/>
       </Tab.Navigator>
    </NavigationContainer>
    </Provider>
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
