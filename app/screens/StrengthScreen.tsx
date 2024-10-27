import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StatusBar,SafeAreaView, StyleSheet, Pressable, Button, View } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"
import styles from './styles';
import { useTranslation } from 'react-i18next';
import {ObjectClass} from './Classes';
import {GetStrength} from './DataAccess';


const StrengthScreen = ({navigation}: {navigation: any}) => {
  const {t}= useTranslation();
  const strength:ObjectClass[] =GetStrength();

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
        style={[styles.item, isSelected && styles.selectedItem]}>
        <Text style={styles.itemText}>{item.value}</Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>{t('StrengthText')}</Text>
    <FlatList
      data={strength}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      extraData={selectedItem}
    />
      <View>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >{t('ButtonTextBack')}</Text>
      </Pressable>
      <Pressable disabled={selectedItem===null?true:false} style={selectedItem===null?styles.button2off:styles.button2} onPress={() =>{
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


  