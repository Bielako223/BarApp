import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './app/screens/MainScreen';
import DrinkScreen from './app/screens/DrinkScreen';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import TasteScreen from './app/screens/TasteScreen';
import AlcoholScreen from './app/screens/AlcoholScreen';
import StrengthScreen from './app/screens/StrengthScreen';
import IngredientsScreen from './app/screens/IngredientsScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Taste" component={TasteScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Alcohol" component={AlcoholScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Strength" component={StrengthScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Ingredients" component={IngredientsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Drink" component={DrinkScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});