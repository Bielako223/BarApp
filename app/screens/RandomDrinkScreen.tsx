import { Text, View, Pressable, Image, ScrollView, Button } from 'react-native';
import { useState } from 'react';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { ObjectClass, DrinkClass } from '../Classes';
import { GetDrinks } from '../DataAccess';
import Popup from '../Popup';
import DrinkItem from './DrinkItem'; // Import DrinkItem
function RandomDrinkScreen({ navigation }: { navigation: any }) {
  const { t } = useTranslation();
  let drinksArray: DrinkClass[] = GetDrinks();

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 36) + 1);
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
    setRandomNumber(Math.floor(Math.random() * 36) + 1);
  };

  const randomDrink: DrinkClass = drinksArray.find(item => item.Id === randomNumber)!;
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
