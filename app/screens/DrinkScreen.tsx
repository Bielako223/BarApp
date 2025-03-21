
import {  Text, View, Pressable,TouchableOpacity,Image,SafeAreaView, ScrollView, Button} from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import { useState, useContext } from 'react';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass, DrinkClass} from '../Classes';
import Images from '../Images'
import Popup from '../Popup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from "../../ThemeContext";

function DrinkScreen({navigation}: {navigation: any}) {
  const {t}= useTranslation();
  const themeContext = useContext(ThemeContext);
         if (!themeContext) return null;
        const { theme } = themeContext;
  let drinksArray: DrinkClass[] = t('Lang')=='pl' ? require('../assets/drinks.json') : require('../assets/drinksEng.json');
  let route: RouteProp<{params: {taste: Array<string>,strength: string,alcohols: Array<string>,ingredients: Array<string>}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const strength=route.params?.strength
  const alcohols=route.params?.alcohols
  const ingredients=route.params?.ingredients
  
  const finalShow:DrinkClass[]=DrinksPoints(taste,strength,alcohols,ingredients,drinksArray);

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


  const [show,setShow]=useState<boolean[]>([true,false,false,false,false])

  const setSpecificBoolean = (index: number) => {
    const newBooleans = [false,false,false,false,false]
    newBooleans[index] = !newBooleans[index];
    setShow(newBooleans)
  };

  const selectedDrink=(drink:DrinkClass,position:number)=>{
    const alcohol :ObjectClass[]=t('Lang')=='pl' ? require('../assets/alcohol.json') : require('../assets/alcoholEng.json');
    const ingredients :ObjectClass[]=t('Lang')=='pl' ? require('../assets/ingredients.json') : require('../assets/ingredientsEng.json');
    const taste :ObjectClass[]=t('Lang')=='pl' ? require('../assets/taste.json') : require('../assets/tasteEng.json');
    const alcoholsSpecific:ObjectClass[]= alcohol.filter(item=> drink.Alcohol.includes(item.key));
    const ingredientsSpecific:ObjectClass[]= ingredients.filter(item=> drink.Ingredients.includes(item.key));
    const tasteSpecific:ObjectClass[]= taste.filter(item=> drink.Taste.includes(item.key));
    const ImgPath:string=drink.Img;
    
    return(
      <TouchableOpacity
      key={position}
        onPress={() => {const newBool = [...show];newBool[position] = !newBool[position];setShow(newBool)} } activeOpacity={1}
        >
        <View style={[position==0?styles.mainDrink:styles.othersDrinks, position!=0 &&(theme === "dark" ? styles.buttonDarkMode : styles.buttonWhiteMode)]}>
            <Text style={[styles.itemText,{marginBottom:7}]}>{drink.Name}</Text>
            <View>
            <Text style={styles.percentageText1}>{t('DrinkPercentageText1')}<Text style={styles.drinkTextBold}>{drink.Percentage>100?'100':drink.Percentage}%</Text>{t('DrinkPercentageText2')}</Text>
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
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcoholPercentage')}</Text> {drink.Strength[1]}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcohols')}</Text> {alcoholsSpecific.map((v,index,row)=>{return <Text key={index}>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text> {ingredientsSpecific.map((v,index,row)=>{return <Text key={index}>{row.length-1===index?<Text>{v.value}.</Text>:<Text>{v.value},</Text>} </Text>})}</Text>
            <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('Description')}</Text> {drink.Description}</Text>
            <TouchableOpacity style={styles.recipeButton} onPress={() => openPopup(drink.PrepIngred,drink.PrepInstruct)}>
              <Icon name="book" size={20} color="#fff" />
              <Text style={styles.buttonText}>{t('Recipe')}</Text>
            </TouchableOpacity>
            <Popup isVisible={isPopupVisible} onClose={closePopup} prepIngred={prepIngred} prepInstruct={prepInstruct}/>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
    const notSelectedDrink=(drink:DrinkClass,position:number)=>{
  
      return(
        <TouchableOpacity
        key={position}
        onPress={() => {setSpecificBoolean(position)}}
        >
          <View style={[
                        position === 0 
                          ? styles.mainDrink 
                          : styles.othersDrinks, 
                        position !== 0 && (theme === "dark" ? styles.buttonDarkMode : styles.buttonWhiteMode)
                      ]}>
            <Text style={styles.itemText}>{drink.Name} <Text style={styles.percentageText}>{t('DrinkMatchingPercentage')}{drink.Percentage>100?'100':drink.Percentage}%.</Text></Text>
        </View>
        </TouchableOpacity>
      )
    }


    return (
      <SafeAreaView style={[styles.container, theme === "dark" ? styles.bgColorDarkMode : styles.bgColorWhiteMode]}>
        <ScrollView>
          {finalShow.length==5?
          
        <View>
          <Text style={[styles.topText, theme === "dark" ? styles.fontColorDarkMode : styles.fontColorWhiteMode]}>{t('DrinkBestMatching')}</Text>
      {show[0]?selectedDrink(finalShow[0],0):notSelectedDrink(finalShow[0],0)}
      <Text style={[styles.topText, theme === "dark" ? styles.fontColorDarkMode : styles.fontColorWhiteMode]}>{t('DrinkYouCanLike')}</Text>
      {show[1]?selectedDrink(finalShow[1],1):notSelectedDrink(finalShow[1],1)}
      {show[2]?selectedDrink(finalShow[2],2):notSelectedDrink(finalShow[2],2)}
      {show[3]?selectedDrink(finalShow[3],3):notSelectedDrink(finalShow[3],3)}
      {show[4]?selectedDrink(finalShow[4],4):notSelectedDrink(finalShow[4],4)}
        </View>
        
      :
            <Text style={styles.noDrinksText}>{t('None')}</Text>
    }
      <View style={styles.finalDrinkbuttonContainer}>
    <Pressable style={[styles.startButton, , theme === "dark" ? styles.bottomButtonDarkMode : styles.buttonWhiteMode]} onPress={() =>
        navigation.navigate("Main")
      }>
        <Text style={styles.buttonText} >{t('DrinkTryAgain')}</Text>
      </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

let DrinksPoints=(taste: Array<string>,strength: string,alcohols: Array<string>,ingredients: Array<string>,drinksArray:Array<DrinkClass>)=>{
  drinksArray.forEach((e) => { e.Points = 0; });
  drinksArray.forEach((element) => {
    if (element.Strength[0] == strength) element.Points += 4;
    element.Alcohol.forEach((x) => { alcohols.forEach((y) => { if (x == y) element.Points += 2; }); });
    element.Taste.forEach((x) => { taste.forEach((y) => { if (x == y) element.Points += 4; }); });
    element.Ingredients.forEach((x) => { ingredients.forEach((y) => { if (x == y) element.Points = 0; }); });
    element.Percentage=Math.round((100*element.Points)/element.PointsMax)
  })
  drinksArray=drinksArray.sort((a,b)=>b.Percentage-a.Percentage)
  const finalShow:DrinkClass[]=final5drinks(drinksArray);
  return finalShow;
}

function final5drinks(drink:DrinkClass[]){
  const finalShow:DrinkClass[]=[];
  for(let i=0;i<5;i++) if(drink[i].Points>0)finalShow.push(drink[i])
    return finalShow
}


export default DrinkScreen;
