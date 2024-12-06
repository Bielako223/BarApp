import React, { useState } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { ObjectClass, DrinkClass } from '../Classes';
import { GetDrinks } from '../DataAccess';
import Popup from '../Popup';
import DrinkItem from '../DrinkItem';

interface ProcessedDrink extends DrinkClass {
  alcoholsSpecific: ObjectClass[];
  ingredientsSpecific: ObjectClass[];
  tasteSpecific: ObjectClass[];
}

function RandomDrinkScreen({ navigation }: { navigation: any }) {
  const { t } = useTranslation();
  const drinksArray: DrinkClass[] = GetDrinks();

  const preprocessedDrinks: ProcessedDrink[] = drinksArray.map((drink) => {
    const alcohol: ObjectClass[] =
      t('Lang') === 'pl' ? require('../assets/alcohol.json') : require('../assets/alcoholEng.json');
    const ingredients: ObjectClass[] =
      t('Lang') === 'pl' ? require('../assets/ingredients.json') : require('../assets/ingredientsEng.json');
    const taste: ObjectClass[] =
      t('Lang') === 'pl' ? require('../assets/taste.json') : require('../assets/tasteEng.json');

    return {
      ...drink,
      alcoholsSpecific: alcohol.filter((item) => drink.Alcohol.includes(item.key)),
      ingredientsSpecific: ingredients.filter((item) => drink.Ingredients.includes(item.key)),
      tasteSpecific: taste.filter((item) => drink.Taste.includes(item.key)),
    };
  });

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * preprocessedDrinks.length));
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [prepIngred, setPrepIngred] = useState<Array<string> | null>(null);
  const [prepInstruct, setPrepInstruct] = useState<Array<string> | null>(null);

  const openPopup = (pIngred: Array<string>, pInstruct: Array<string>) => {
    setPrepIngred(pIngred);
    setPrepInstruct(pInstruct);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPrepIngred(null);
    setPrepInstruct(null);
  };

  const newRandomDrink = () => {
    setRandomNumber(Math.floor(Math.random() * preprocessedDrinks.length));
  };

  const randomDrink: ProcessedDrink = preprocessedDrinks[randomNumber];

  return (
    <View style={[styles.container, styles.finalDrinkContainer]}>
      <ScrollView>
        <Text style={styles.topText}>{t('RandomDrinkText')}</Text>
        <DrinkItem
          drink={randomDrink}
          onPress={() => openPopup(randomDrink.PrepIngred, randomDrink.PrepInstruct)}
        />

        <Popup isVisible={isPopupVisible} onClose={closePopup} prepIngred={prepIngred} prepInstruct={prepInstruct} />

        <View style={styles.finalDrinkbuttonContainer}>
          <Pressable style={[styles.startButton, { marginBottom: 15 }]} onPress={newRandomDrink}>
            <Text style={styles.buttonText}>{t('RandomDrinkTryAgain')}</Text>
          </Pressable>
          <Pressable style={[styles.startButton]} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>{t('ButtonTextBack')}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

export default RandomDrinkScreen;
