import React, { useCallback, useRef, useState } from 'react'; 
import { FlatList, Animated, SafeAreaView, Pressable, Text, TextInput, View } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { DrinkClass, ObjectClass } from '../Classes';
import { MyIngredientsGetDrinks } from '../DataAccess';
import Popup from '../Popup';
import DrinkItem from '../DrinkItem';

interface ProcessedDrink extends DrinkClass {
  alcoholsSpecific: ObjectClass[];
  ingredientsSpecific: ObjectClass[];
  tasteSpecific: ObjectClass[];
}

const MyIngredientsResutScreen = ({ navigation }: { navigation: any }) => {
  const { t } = useTranslation();
  let route: RouteProp<{params: {alcohols:Array<string>, ingredients:Array<string>}}, 'params'> = useRoute();
    const alcohols=route.params?.alcohols
    const ingredients=route.params?.ingredients
  const drinks: DrinkClass[] = MyIngredientsGetDrinks(alcohols, ingredients);
  const scrollY = useRef(new Animated.Value(0)).current;

  const preprocessedDrinks: ProcessedDrink[] = drinks.map((drink) => {
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
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [currentDrink, setCurrentDrink] = useState<ProcessedDrink | null>(null);


  const openPopup = useCallback((drink: ProcessedDrink) => {
    setCurrentDrink(drink);
    setIsPopupVisible(true);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
    setCurrentDrink(null);
  };

  const handleScroll = (event: any) => {
    scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  const buttonAnimation = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const renderItem = useCallback(
    ({ item }: { item: ProcessedDrink }) => <DrinkItem drink={item} onPress={openPopup} />,
    [openPopup]
  );

  return (
    <SafeAreaView style={styles.container}>
       {preprocessedDrinks.length > 0 ? (
          <FlatList
            data={preprocessedDrinks}
            renderItem={renderItem}
            keyExtractor={(item) => item.Id.toString()}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            initialNumToRender={15}
            maxToRenderPerBatch={15}
            windowSize={8}
          />
          
    ):<Text style={styles.textNoneResultMessage}>{t('MyIngrednietsNoneMessage')}</Text>}
    {currentDrink && (
        <Popup
          isVisible={isPopupVisible}
          onClose={closePopup}
          prepIngred={currentDrink.PrepIngred}
          prepInstruct={currentDrink.PrepInstruct}
        />
      )}
      <Animated.View style={[styles.buttonContainer, { transform: [{ translateY: buttonAnimation }] }]}>
        <Pressable style={styles.buttonDrinkList} onPress={() => navigation.navigate("Main")}>
          <Text style={styles.buttonText}>{t('ButtonTextBack')}</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

export default MyIngredientsResutScreen;
