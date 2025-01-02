import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View,SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass} from '../Classes';
import {GetAlcohol} from '../DataAccess';


const MyIngredientsAlcoholScreen = ({navigation}: {navigation: any}) => {
  const {t}= useTranslation();
  const alcohol :ObjectClass[]=GetAlcohol();
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
        style={[styles.item, isSelected && styles.selectedItem]}>
        <Text style={styles.itemText}>{item.value}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>{t('SelectAlcoholMyIngredients')}</Text>
    <FlatList
    style={styles.bottomSpace}
      data={alcohol}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItems}
    />
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >{t('ButtonTextBack')}</Text>
      </Pressable>
      <Pressable 
      style={typeof selectedItems[0]!=='undefined'?styles.button2:styles.button2off} 
      onPress={() =>{navigation.navigate("MyIngredientsIngredients",{alcohols:selectedItems})}}
      disabled={typeof selectedItems[0]!=='undefined'?false:true} >
        <Text style={styles.buttonText} >{t('ButtonTextNext')}</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}


export default MyIngredientsAlcoholScreen;


  