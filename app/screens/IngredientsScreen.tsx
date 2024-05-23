import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View,SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from './styles';

type  TasteClass={
  key: string;
  value: string;
}

const ingredients :TasteClass[]= require('../assets/ingredients.json');



const IngredientsScreen = ({navigation}: {navigation: any}) => {

  let route: RouteProp<{params: {taste: Array<string>,alcohols:Array<string>,strength: string}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const alcohols=route.params?.alcohols
  const strength=route.params?.strength
  

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (key: string) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter(item => item !== key));
    } else {
      setSelectedItems([...selectedItems, key]);
    }
  };

  const renderItem = ({ item }: { item: TasteClass }) => {
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
    <FlatList
      data={ingredients}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItems}
    />
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >Wstecz</Text>
      </Pressable>
      <Pressable style={styles.button2} onPress={() =>{
     navigation.navigate("Drink",{taste:taste,strength:strength,alcohols:alcohols,ingredients:selectedItems})
    }  
      }>
        <Text style={styles.buttonText} >Dalej</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}

export default IngredientsScreen;


  