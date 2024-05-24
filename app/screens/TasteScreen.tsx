import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity,SafeAreaView,View, Pressable } from 'react-native';
import styles from './styles';
import Toast from 'react-native-simple-toast';

type  TasteClass={
  key: string;
  value: string;
}



const taste :TasteClass[]= require('../assets/taste.json');

const TasteScreen = ({navigation}: {navigation: any}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (key: string) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter(item => item !== key));
    } else {
      if (selectedItems.length < 2) {
        setSelectedItems([...selectedItems, key]);
      }
      else{
        Toast.show('Możesz wybrac maksymalnie dwa smaki.', Toast.SHORT, {backgroundColor:'#DF3E3E'});
      }
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
      <Text style={styles.topText}>Wybierz smak/smaki.</Text>
    <FlatList
    style={styles.bottomSpace}
      data={taste}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItems}
    />
    
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >Wstecz</Text>
      </Pressable>
      <Pressable 
      disabled={typeof selectedItems[0]!=='undefined'?false:true} 
      style={typeof selectedItems[0]!=='undefined'?styles.button2:styles.button2off} 
      onPress={() =>{navigation.navigate("Alcohol",{taste:selectedItems})
    }  
      }>
        <Text style={styles.buttonText} >Dalej</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}



export default TasteScreen;


  