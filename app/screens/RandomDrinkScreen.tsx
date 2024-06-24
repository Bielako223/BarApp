
import {  Text, View, Pressable,Image} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass, DrinkClass} from './Classes';
import Images from './Images'




function RandomDrinkScreen({navigation}: {navigation: any}) {

  const {t}= useTranslation();
  let drinksArray: DrinkClass[] = t('Lang')=='pl' ? require('../assets/drinks.json') : require('../assets/drinksEng.json');

    const [randomNumber, setRandomNumber] = useState( Math.floor(Math.random() * 36) + 1);
  
    const newRandomDrink=()=>{
        setRandomNumber(Math.floor(Math.random() * 36) + 1);
    }

    const randomDrink:DrinkClass= drinksArray.find(item => item.Id === randomNumber)!;
    const ImgPath=randomDrink.Img;
    const alcohol :ObjectClass[]=t('Lang')=='pl' ? require('../assets/alcohol.json') : require('../assets/alcoholEng.json');
    const ingredients :ObjectClass[]=t('Lang')=='pl' ? require('../assets/ingredients.json') : require('../assets/ingredientsEng.json');
    const taste :ObjectClass[]=t('Lang')=='pl' ? require('../assets/taste.json') : require('../assets/tasteEng.json');
    const alcoholsSpecific:ObjectClass[]= alcohol.filter(item=> randomDrink?.Alcohol.includes(item.key));
    const ingredientsSpecific:ObjectClass[]= ingredients.filter(item=> randomDrink?.Ingredients.includes(item.key));
    const tasteSpecific:ObjectClass[]= taste.filter(item=> randomDrink?.Taste.includes(item.key));

    return (
      <View style={[styles.container,styles.finalDrinkContainer]}>
        <Text style={styles.topText}>{t('RandomDrinkText')}</Text>
        <View style={styles.othersDrinks}>
            <Text style={[styles.itemText,{ fontSize:25}]}>{randomDrink?.Name}</Text>
            <View>
            <Text></Text>
            <View style={styles.drinkImgContainer2}>
            <View style={styles.drinkImgContainer}>
            <Image
        source={Images[ImgPath]}
        style={styles.drinkImg}
      />
            </View>
            </View>
            <Text></Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkTaste')}</Text> {tasteSpecific.map((v,index,row)=>{return <Text key={index}>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcoholPercentage')}</Text> {randomDrink?.Strength[1]}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcohols')}</Text> {alcoholsSpecific.map((v,index,row)=>{return <Text key={index}>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text> {ingredientsSpecific.map((v,index,row)=>{return <Text key={index}>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            </View>
            </View>
            <View style={styles.finalDrinkbuttonContainer}>
            <Pressable style={[styles.startButton,{marginBottom:15}]} onPress={() =>
        newRandomDrink()
      }>
        <Text style={styles.buttonText} >{t('RandomDrinkTryAgain')}</Text>
      </Pressable>
            <Pressable style={[styles.startButton]} onPress={() =>
        navigation.navigate("Main")
      }>
        <Text style={styles.buttonText} >{t('ButtonTextBack')}</Text>
      </Pressable>
      </View>
      </View>
  );
}

export default RandomDrinkScreen;
