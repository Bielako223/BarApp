import React, { useState, useContext } from 'react';
import { FlatList, Text, TouchableOpacity,SafeAreaView, Pressable, View } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass} from '../Classes';
import {GetStrength} from '../DataAccess';
import { ThemeContext } from "../../ThemeContext";

const StrengthScreen = ({navigation}: {navigation: any}) => {
  const {t}= useTranslation();
  const strength:ObjectClass[] =GetStrength();
  const themeContext = useContext(ThemeContext);
     if (!themeContext) return null;
    const { theme } = themeContext;

  let route: RouteProp<{params: {taste: Array<string>}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedItem(id === selectedItem ? null : id);
  };

  const renderItem = ({ item }: { item: ObjectClass }) => {
    const isSelected = item.key === selectedItem;
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
      <Text style={[styles.topText, theme === "dark" ? styles.fontColorDarkMode : styles.fontColorWhiteMode]}>{t('StrengthText')}</Text>
    <FlatList
      data={strength}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItem}
    />
      <View>
      <Pressable style={[styles.button, theme === "dark" ? styles.bottomButtonDarkMode : styles.bottomButtonWhiteMode]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >{t('ButtonTextBack')}</Text>
      </Pressable>
      <Pressable disabled={selectedItem===null?true:false} style={[styles.button2,  theme === "dark" ? styles.bottomButtonDarkMode : styles.bottomButtonWhiteMode,selectedItem===null && styles.button2off]} onPress={() =>{
    navigation.navigate("Alcohol",{taste:taste,strength: selectedItem})
    }  
      }>
        <Text style={styles.buttonText} >{t('ButtonTextNext')}</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}


export default StrengthScreen;


  