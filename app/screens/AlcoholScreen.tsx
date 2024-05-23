import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View,SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from './styles';

type  TasteClass={
  key: string;
  value: string;
}

const alcohol :TasteClass[]= require('../assets/alcohol.json');



const AlcoholScreen = ({navigation}: {navigation: any}) => {

  let route: RouteProp<{params: {taste: Array<string>}}, 'params'> = useRoute();
  const taste=route.params?.taste
  

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
      data={alcohol}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItems}
    />
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >Wstecz</Text>
      </Pressable>
      <Pressable disabled={typeof selectedItems[0]!=='undefined'?false:true} style={typeof selectedItems[0]!=='undefined'?styles.button2:styles.button2off} onPress={() =>{
    navigation.navigate("Strength",{taste:taste,alcohols:selectedItems})
    }  
      }>
        <Text style={styles.buttonText} >Dalej</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}


export default AlcoholScreen;


  