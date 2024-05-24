
import {  Text, View, Pressable,TouchableOpacity} from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import { useState } from 'react';
import styles from './styles';


let drinksArray: DrinkClass[] = require('../assets/drinks.json');
function DrinkScreen({navigation}: {navigation: any}) {
  let route: RouteProp<{params: {taste: Array<string>,strength: string,alcohols: Array<string>,ingredients: Array<string>}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const strength=route.params?.strength
  const alcohols=route.params?.alcohols
  const ingredients=route.params?.ingredients
  DrinksPoints(taste,strength,alcohols,ingredients);
  const finalShow:DrinkClass[]=final5drinks(drinksArray);
  const arrayDataItems = drinksArray.map((c) => <View><Text>{c.Name} {c.Percentage}%</Text></View>);


  const [show,setShow]=useState<boolean[]>([true,false,false,false,false])

  const setSpecificBoolean = (index: number) => {
    const newBooleans = [false,false,false,false,false]
    newBooleans[index] = !newBooleans[index];
    setShow(newBooleans)
  };

  const selectedDrink=(drink:DrinkClass,position:number)=>{
    const alcohol :TasteClass[]= require('../assets/alcohol.json');
    const ingredients :TasteClass[]= require('../assets/ingredients.json');
    const taste :TasteClass[]= require('../assets/taste.json');
    const alcoholsSpecific:TasteClass[]= alcohol.filter(item=> drink.Alcohol.includes(item.key));
    const ingredientsSpecific:TasteClass[]= ingredients.filter(item=> drink.Ingredients.includes(item.key));
    const tasteSpecific:TasteClass[]= taste.filter(item=> drink.Taste.includes(item.key));
    return(
      <TouchableOpacity
        onPress={() => {const newBool = [...show];newBool[position] = !newBool[position];setShow(newBool)}}
        >
        <View style={position==0?styles.mainDrink:styles.othersDrinks}>
            <Text style={[styles.itemText,{marginBottom:7}]}>{drink.Name}</Text>
            <View>
            <Text style={styles.percentageText1}>Drink dopasowany w <Text style={styles.drinkTextBold}>{drink.Percentage}%</Text> do twoich upodobań!</Text>
            <Text></Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Smak:</Text> {tasteSpecific.map((v,index,row)=>{return <Text>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Zwartośc alkoholu:</Text> {drink.Strength[1]}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Alkohol:</Text> {alcoholsSpecific.map((v,index,row)=>{return <Text>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>Składniki:</Text> {ingredientsSpecific.map((v,index,row)=>{return <Text>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
    const notSelectedDrink=(drink:DrinkClass,position:number)=>{
  
      return(
        <TouchableOpacity
        onPress={() => {setSpecificBoolean(position)}}
        >
          <View style={position==0?styles.mainDrink:styles.othersDrinks}>
            <Text style={styles.itemText}>{drink.Name} <Text style={styles.percentageText}>Dopasowany w {drink.Percentage}%.</Text></Text>
        </View>
        </TouchableOpacity>
      )
    }


    return (
      <View style={[styles.container,styles.finalDrinkContainer]}>
        <Text style={styles.topText}>Najlepiej dopasowany drink:</Text>
      {show[0]?selectedDrink(finalShow[0],0):notSelectedDrink(finalShow[0],0)}
      <Text style={styles.topText}>Mogą ci się spodobać:</Text>
      {show[1]?selectedDrink(finalShow[1],1):notSelectedDrink(finalShow[1],1)}
      {show[2]?selectedDrink(finalShow[2],2):notSelectedDrink(finalShow[2],2)}
      {show[3]?selectedDrink(finalShow[3],3):notSelectedDrink(finalShow[3],3)}
      {show[4]?selectedDrink(finalShow[4],4):notSelectedDrink(finalShow[4],4)}
      
      <View style={styles.finalDrinkbuttonContainer}>
    <Pressable style={[styles.startButton]} onPress={() =>
        navigation.navigate("Main")
      }>
        <Text style={styles.buttonText} >Spróbuj ponownie</Text>
      </Pressable>
      </View>
    </View>
  );
}

let DrinksPoints=(taste: Array<string>,strength: string,alcohols: Array<string>,ingredients: Array<string>)=>{
  drinksArray.forEach((e) => { e.Points = 0; });
  drinksArray.forEach((element) => {
    if (element.Strength[0] == strength) element.Points += 4;
    element.Alcohol.forEach((x) => { alcohols.forEach((y) => { if (x == y) element.Points += 2; }); });
    element.Taste.forEach((x) => { taste.forEach((y) => { if (x == y) element.Points += 4; }); });
    element.Ingredients.forEach((x) => { ingredients.forEach((y) => { if (x == y) element.Points -= 3; }); });
    element.Percentage=Math.round((100*element.Points)/element.PointsMax)
  })
  drinksArray=drinksArray.sort((a,b)=>b.Percentage-a.Percentage)
}

function final5drinks(drink:DrinkClass[]){
  const finalShow:DrinkClass[]=[];
  for(let i=0;i<5;i++) if(drink[i].Points>0)finalShow.push(drink[i])
    return finalShow
}


export default DrinkScreen;

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