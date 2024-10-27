import React, { useRef } from 'react';
import { FlatList, Text, ScrollView, View, SafeAreaView, Image, Pressable, Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { DrinkClass, ObjectClass } from './Classes';
import Images from './Images'
import {GetIngredientsSpecific, GetAlcoholSpecific, GetDrinks, GetTasteSpecific} from './DataAccess';


const DrinkListScreen = ({ navigation }: { navigation: any }) => {
  const { t } = useTranslation();
  const drinks: DrinkClass[] = GetDrinks();

  const scrollY = useRef(new Animated.Value(0)).current;

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
          <Text style={styles.percentageText1}>
            <Text style={styles.drinkTextBold}>{t('DrinkTaste')}</Text> {tasteSpecific.map((v, index, row) => { return <Text key={index}>{row.length - 1 === index ? <Text>{v.value}.</Text> : <Text>{v.value},</Text>} </Text> })}
          </Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcoholPercentage')}</Text> {drink.Strength[1]}</Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcohols')}</Text> {alcoholsSpecific.map((v, index, row) => { return <Text key={index}>{row.length - 1 === index ? <Text>{v.value}.</Text> : <Text>{v.value},</Text>} </Text> })}</Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text> {ingredientsSpecific.map((v, index, row) => { return <Text key={index}>{row.length - 1 === index ? <Text>{v.value}.</Text> : <Text>{v.value},</Text>} </Text> })}</Text>
          <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('Description')}</Text> {drink.Description}</Text>
        </View>
      </View>
    )
  };

  const arrayDataItems = drinks.map((drink) => renderItem(drink));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {arrayDataItems}
      </ScrollView>

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
