import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity,SafeAreaView,View, Pressable, Alert } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass} from './Classes';
import {GetTaste} from './DataAccess';


const TasteScreen = ({navigation}: {navigation: any}) => {
  const {t}= useTranslation();
  const taste:ObjectClass[] = GetTaste();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (key: string) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter(item => item !== key));
    } else {
      if (selectedItems.length < 2) {
        setSelectedItems([...selectedItems, key]);
      }
      else{
        Alert.alert(
          t('SelectTasteAlert'),  // Title of the alert (your translated message)
          '',                      // Message content (leave empty if not needed)
          [{ text: 'OK' }]         // Button text
        );
      }
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
      <Text style={styles.topText}>{t('SelectTaste')}</Text>
    <FlatList
    style={styles.bottomSpace}
      data={taste}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItems}
    />
    
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >{t('ButtonTextBack')}</Text>
      </Pressable>
      <Pressable 
      disabled={typeof selectedItems[0]!=='undefined'?false:true} 
      style={typeof selectedItems[0]!=='undefined'?styles.button2:styles.button2off} 
      onPress={() =>{navigation.navigate("Strength",{taste:selectedItems})
    }  
      }>
        <Text style={styles.buttonText} >{t('ButtonTextNext')}</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );

}



export default TasteScreen;


  