
import {  Text, View, Pressable,Image, ScrollView, Button} from 'react-native';
import { useState } from 'react';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass, DrinkClass} from '../Classes';
import Images from '../Images'
import {GetIngredientsSpecific, GetAlcoholSpecific, GetDrinks, GetTasteSpecific} from '../DataAccess';
import Popup from '../Popup';




function RandomDrinkScreen({navigation}: {navigation: any}) {

  const {t}= useTranslation();
  let drinksArray: DrinkClass[] = GetDrinks();

    const [randomNumber, setRandomNumber] = useState( Math.floor(Math.random() * 36) + 1);
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [prepIngred, setPrepIngred] = useState<Array<string> | null>(null);
    const [prepInstruct, setPrepInstruct] = useState<Array<string> | null>(null);

    const openPopup = (pIngred: Array<string>,pInstruct: Array<string>) => {
      setPrepIngred(pIngred)
      setPrepInstruct(pInstruct)
      setIsPopupVisible(true);
    };

    const closePopup = () => {
      setIsPopupVisible(false);
      setPrepIngred(null)
      setPrepInstruct(null)
    };
    const newRandomDrink=()=>{
        setRandomNumber(Math.floor(Math.random() * 36) + 1);
    }

    const randomDrink:DrinkClass= drinksArray.find(item => item.Id === randomNumber)!;
    const ImgPath=randomDrink.Img;
    const alcoholsSpecific: ObjectClass[] = GetAlcoholSpecific(randomDrink);
    const ingredientsSpecific: ObjectClass[] = GetIngredientsSpecific(randomDrink);
    const tasteSpecific: ObjectClass[] = GetTasteSpecific(randomDrink);

    return (
      <View style={[styles.container,styles.finalDrinkContainer]}>
        <ScrollView>
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
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('Description')}</Text> {randomDrink.Description}</Text>
            <Button title="Przepis" onPress={() => openPopup(randomDrink.PrepIngred,randomDrink.PrepInstruct)} />
            <Popup isVisible={isPopupVisible} onClose={closePopup} prepIngred={prepIngred} prepInstruct={prepInstruct}/>
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
      </ScrollView>
      </View>
  );
}

export default RandomDrinkScreen;
