import React, { useRef, useState } from 'react';
import { FlatList, Animated, NativeSyntheticEvent, NativeScrollEvent, SafeAreaView, Pressable, Text } from 'react-native';
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import { DrinkClass } from '../Classes';
import { GetDrinksSorted } from '../DataAccess';
import Popup from '../Popup';
import DrinkItem from './DrinkItem';

const DrinkListScreen = ({ navigation }: { navigation: any }) => {
  const { t } = useTranslation();
  const drinks: DrinkClass[] = GetDrinksSorted();
  const scrollY = useRef(new Animated.Value(0)).current;

  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [currentDrink, setCurrentDrink] = useState<DrinkClass | null>(null);

  const openPopup = (drink: DrinkClass) => {
    setCurrentDrink(drink);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setCurrentDrink(null);
  };

  const buttonAnimation = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  const renderItem = ({ item }: { item: DrinkClass }) => (
    <DrinkItem drink={item} onPress={openPopup} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drinks}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
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
