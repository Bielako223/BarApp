
import {  Text, View, Pressable,TouchableOpacity} from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import { useState } from 'react';
import styles from './styles';


let drinksArray: DrinkClass[] = require('../assets/drinks.json');

function RandomDrinkScreen({navigation}: {navigation: any}) {

    const [randomNumber, setRandomNumber] = useState( Math.floor(Math.random() * 36) + 1);

    const newRandomDrink=()=>{
        setRandomNumber(Math.floor(Math.random() * 36) + 1);
    }

    const randomDrink= drinksArray.find(item => item.Id === randomNumber);
  const alcohol :TasteClass[]= require('../assets/alcohol.json');
    const ingredients :TasteClass[]= require('../assets/ingredients.json');
    const taste :TasteClass[]= require('../assets/taste.json');
    const alcoholsSpecific:TasteClass[]= alcohol.filter(item=> randomDrink?.Alcohol.includes(item.key));
    const ingredientsSpecific:TasteClass[]= ingredients.filter(item=> randomDrink?.Ingredients.includes(item.key));
    const tasteSpecific:TasteClass[]= taste.filter(item=> randomDrink?.Taste.includes(item.key));

    return (
      <View style={[styles.container,styles.finalDrinkContainer]}>
        <Text style={styles.topText}>Losowy drink:</Text>
        <View style={styles.othersDrinks}>
            <Text style={[styles.itemText,{ fontSize:25}]}>{randomDrink?.Name}</Text>
            <View>
            <Text></Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Smak:</Text> {tasteSpecific.map((v,index,row)=>{return <Text>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Zwartośc alkoholu:</Text> {randomDrink?.Strength[1]}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Alkohol:</Text> {alcoholsSpecific.map((v,index,row)=>{return <Text>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Składniki:</Text> {ingredientsSpecific.map((v,index,row)=>{return <Text>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            </View>
            </View>
            <View style={styles.finalDrinkbuttonContainer}>
            <Pressable style={[styles.startButton,{marginBottom:15}]} onPress={() =>
        newRandomDrink()
      }>
        <Text style={styles.buttonText} >Losuj ponownie</Text>
      </Pressable>
            <Pressable style={[styles.startButton]} onPress={() =>
        navigation.navigate("Main")
      }>
        <Text style={styles.buttonText} >Powrót</Text>
      </Pressable>
      </View>
      </View>
  );
}

export default RandomDrinkScreen;

class DrinkClass{
  'Id': number;
  'Name': string;
  "Strength": Array<any>;
  "Taste": Array<string>;
  "Alcohol": Array<string>;
  "Ingredients": Array<string>;
  'Points': number;
  'PointsMax': number;
  'Description': string;
  'Percentage': number;
}

type  TasteClass={
  key: string;
  value: string;
}