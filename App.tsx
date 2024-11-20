import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './app/screens/MainScreen';
import DrinkScreen from './app/screens/DrinkScreen';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import TasteScreen from './app/screens/TasteScreen';
import AlcoholScreen from './app/screens/AlcoholScreen';
import StrengthScreen from './app/screens/StrengthScreen';
import IngredientsScreen from './app/screens/IngredientsScreen';
import RandomDrinkScreen from './app/screens/RandomDrinkScreen';
import DrinkListScreen from './app/screens/DrinkListScreen';
import { I18nextProvider } from 'react-i18next';
import i18next from './services/i18next'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <I18nextProvider i18n={i18next}>
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
        <Stack.Screen name="RandomDrink" component={RandomDrinkScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DrinkList" component={DrinkListScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});