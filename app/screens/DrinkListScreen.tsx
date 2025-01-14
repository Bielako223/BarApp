import React, { useCallback, useRef, useState } from 'react'; 
import { FlatList, Animated, SafeAreaView, Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { DrinkClass, ObjectClass, DrinkPointsClass } from '../Classes';
import { GetDrinksIngredienClassSorted } from '../DataAccess';
import Popup from '../Popup';
import DrinkItem from '../DrinkItem';

interface ProcessedDrink extends DrinkPointsClass {
  alcoholsSpecific: ObjectClass[];
  ingredientsSpecific: ObjectClass[];
  tasteSpecific: ObjectClass[];
}

const DrinkListScreen = ({ navigation }: { navigation: any }) => {
  const { t } = useTranslation();
  const drinks: DrinkPointsClass[] = GetDrinksIngredienClassSorted();
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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDrinks = preprocessedDrinks.filter((drink) =>
    drink.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    ({ item }: { item: ProcessedDrink }) => <DrinkItem drink={item} onPress={openPopup} isIngredientsElement={false}/>,
    [openPopup]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={t('SearchPlaceholder')}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredDrinks}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        initialNumToRender={15} 
        maxToRenderPerBatch={15} 
        windowSize={8}
      />
      {currentDrink && (
        <Popup
          isVisible={isPopupVisible}
          onClose={closePopup}
          prepIngred={currentDrink.PrepIngred}
          prepInstruct={currentDrink.PrepInstruct}
        />
      )}
      <Animated.View style={[styles.buttonContainer, { transform: [{ translateY: buttonAnimation }] }]}>
        <Pressable style={styles.buttonDrinkList} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{t('ButtonTextBack')}</Text>
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

export default DrinkListScreen;
