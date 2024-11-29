import React, { useRef } from 'react';
import { FlatList, Text, ScrollView, View, SafeAreaView, Image, Pressable, Animated, NativeSyntheticEvent, NativeScrollEvent , Button} from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import { useState } from 'react';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { DrinkClass, ObjectClass } from '../Classes';
import Images from '../Images'
import {GetIngredientsSpecific, GetAlcoholSpecific, GetDrinksSorted, GetTasteSpecific} from '../DataAccess';
import Popup from '../Popup';


const DrinkListScreen = ({ navigation }: { navigation: any }) => {
  const { t } = useTranslation();
  const drinks: DrinkClass[] = GetDrinksSorted();

  const scrollY = useRef(new Animated.Value(0)).current;

  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [currentDrink, setCurrentDrink] = useState<DrinkClass | null>(null); // Aktualny drink dla Popup

  const openPopup = (drink: DrinkClass) => {
    setCurrentDrink(drink);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setCurrentDrink(null);
  };



  const buttonAnimation = scrollY.interpolate({
    inputRange: [0, 100], // Zakres przewijania
    outputRange: [0, 100], // Zmiana położenia przycisku
    extrapolate: 'clamp',
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  const renderItem = (drink: DrinkClass) => {
    const alcoholsSpecific: ObjectClass[] = GetAlcoholSpecific(drink);
    const ingredientsSpecific: ObjectClass[] = GetIngredientsSpecific(drink);
    const tasteSpecific: ObjectClass[] = GetTasteSpecific(drink);
    const ImgPath: string = drink.Img;
    return (
      <View style={styles.othersDrinks} key={drink.Id}>
        <Text style={[styles.itemText, { marginBottom: 7 }]}>{drink.Name}</Text>
        <View>
          <View style={styles.drinkImgContainer2}>
            <View style={styles.drinkImgContainer}>
              <Image
                source={Images[ImgPath]}
                style={styles.drinkImg}
              />
            </View>
          </View>
          <Text></Text>
          <Text style={styles.percentageText1}>
            <Text style={styles.drinkTextBold}>{t('DrinkTaste')}</Text> {tasteSpecific.map((v, index, row) => { return <Text key={index}>{row.length - 1 === index ? <Text>{v.value}.</Text> : <Text>{v.value},</Text>} </Text> })}
          </Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcoholPercentage')}</Text> {drink.Strength[1]}</Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcohols')}</Text> {alcoholsSpecific.map((v, index, row) => { return <Text key={index}>{row.length - 1 === index ? <Text>{v.value}.</Text> : <Text>{v.value},</Text>} </Text> })}</Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text> {ingredientsSpecific.map((v, index, row) => { return <Text key={index}>{row.length - 1 === index ? <Text>{v.value}.</Text> : <Text>{v.value},</Text>} </Text> })}</Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('Description')}</Text> {drink.Description}</Text>
          <Button title="Przepis" onPress={() => openPopup(drink)} />
        </View>
      </View>
    )
  };

  const arrayDataItems = drinks.map((drink) => renderItem(drink));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {drinks.map(renderItem)}
      </ScrollView>

      {/* Popup renderowany raz */}
      {currentDrink && (
        <Popup
          isVisible={isPopupVisible}
          onClose={closePopup}
          prepIngred={currentDrink.PrepIngred}
          prepInstruct={currentDrink.PrepInstruct}
        />
      )}

      {/* Animowany przycisk */}
      <Animated.View style={[styles.buttonContainer, { transform: [{ translateY: buttonAnimation }] }]}>
        <Pressable style={styles.buttonDrinkList} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{t('ButtonTextBack')}</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
}

export default DrinkListScreen;
