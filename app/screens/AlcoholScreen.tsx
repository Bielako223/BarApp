import React, { useState, useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View,SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass} from '../Classes';
import {GetAlcohol} from '../DataAccess';
import { ThemeContext } from "../../ThemeContext";

const AlcoholScreen = ({navigation}: {navigation: any}) => {
  const {t}= useTranslation();
  const themeContext = useContext(ThemeContext);
       if (!themeContext) return null;
      const { theme } = themeContext;
  const alcohol :ObjectClass[]=GetAlcohol();
  let route: RouteProp<{params: {taste: Array<string>, strength: string}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const strength=route.params?.strength
  alcohol.sort((a, b) => {
    if (a.value < b.value) {
        return -1;
    }
    if (a.value > b.value) {
        return 1;
    }
    return 0;
  });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (key: string) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter(item => item !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  const renderItem = ({ item }: { item: ObjectClass }) => {
    const isSelected = selectedItems.includes(item.key);
    return (
      <TouchableOpacity
        onPress={() => handleSelect(item.key)}
        style={[
          styles.item, 
          theme === "dark" ? styles.buttonDarkMode : styles.buttonWhiteMode, 
          isSelected && (theme === "dark" ? styles.bgButtonSelectedColorDarkMode : styles.bgbuttonSelectedColorWhiteMode)
        ]}>
        <Text style={styles.itemText}>{item.value}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={[styles.container, theme === "dark" ? styles.bgColorDarkMode : styles.bgColorWhiteMode]}>
      <Text style={[styles.topText, theme === "dark" ? styles.fontColorDarkMode : styles.fontColorWhiteMode]}>{t('SelectAlcohol')}</Text>
    <FlatList
    style={styles.bottomSpace}
      data={alcohol}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItems}
    />
      <View>
      <Pressable style={[styles.button, theme === "dark" ? styles.bottomButtonDarkMode : styles.bottomButtonWhiteMode]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >{t('ButtonTextBack')}</Text>
      </Pressable>
      <Pressable style={[styles.button2, theme === "dark" ? styles.bottomButtonDarkMode : styles.bottomButtonWhiteMode]} onPress={() =>{
    navigation.navigate("Ingredients",{taste:taste,alcohols:selectedItems,strength:strength})
    }  
      }>
        <Text style={styles.buttonText} >{t('ButtonTextNext')}</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}


export default AlcoholScreen;


  