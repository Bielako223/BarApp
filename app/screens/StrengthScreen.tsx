import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StatusBar,SafeAreaView, StyleSheet, Pressable, Button, View } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from './styles';

type  TasteClass={
  key: string;
  value: string;
}

const strength :TasteClass[]= require('../assets/strength.json');



const StrengthScreen = ({navigation}: {navigation: any}) => {

  let route: RouteProp<{params: {taste: Array<string>,alcohols:Array<string>}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const alco=route.params?.alcohols
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedItem(id === selectedItem ? null : id);
  };

  const renderItem = ({ item }: { item: TasteClass }) => {
    const isSelected = item.key === selectedItem;
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
      <Text style={styles.topText}>Wybierz moc drinka.</Text>
    <FlatList
      data={strength}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItem}
    />
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >Wstecz</Text>
      </Pressable>
      <Pressable disabled={selectedItem===null?true:false} style={selectedItem===null?styles.button2off:styles.button2} onPress={() =>{
    navigation.navigate("Ingredients",{taste:taste,alcohols:alco,strength: selectedItem})
    }  
      }>
        <Text style={styles.buttonText} >Dalej</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}


export default StrengthScreen;


  