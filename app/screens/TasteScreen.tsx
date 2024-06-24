import React, { useState, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity,SafeAreaView,View, Pressable } from 'react-native';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import { useTranslation } from 'react-i18next';
import {ObjectClass} from './Classes';


const TasteScreen = ({navigation}: {navigation: any}) => {
  const {t}= useTranslation();
  const taste:ObjectClass[] = t('Lang')=='pl' ? require('../assets/taste.json') : require('../assets/tasteEng.json');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (key: string) => {
    if (selectedItems.includes(key)) {
      setSelectedItems(selectedItems.filter(item => item !== key));
    } else {
      if (selectedItems.length < 2) {
        setSelectedItems([...selectedItems, key]);
      }
      else{
        Toast.show(t('SelectTasteAlert'), Toast.SHORT, {backgroundColor:'#DF3E3E'});
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


  