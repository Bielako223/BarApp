import React, {useState} from 'react';
import {Text, View,Image,SafeAreaView,Pressable,} from 'react-native';
import { useRoute} from "@react-navigation/native"
import styles from '../styles';
import { useTranslation } from 'react-i18next';
import ChangeLang from '../ChangeLanguage';

function MainScreen({navigation}: {navigation: any}) {
  let route = useRoute();
  const {t}= useTranslation();
    return (
      <SafeAreaView style={styles.container}>
         <View style={styles.imgContainer}>
      <ChangeLang/>
      <Image
        source={require('../assets/barIcon6.png')}
        style={styles.image}
      />
      <Text style={styles.logoText}>DrinkDecider</Text>
    <Pressable style={styles.startButton} onPress={() =>navigation.navigate("Taste")}>
        <Text style={styles.buttonText} >{t('MainfirstButton')}</Text>
      </Pressable>
      <Pressable style={styles.startButton} onPress={() =>navigation.navigate("RandomDrink")}>
        <Text style={styles.buttonText} >{t('MainSecondButton')}</Text>
      </Pressable>
      <Pressable style={styles.startButton} onPress={() =>navigation.navigate("DrinkList")}>
        <Text style={styles.buttonText} >{t('MainThirdButton')}</Text>
      </Pressable>
      <Pressable style={styles.startButton} onPress={() =>navigation.navigate("WelcomeScreen")}>
        <Text style={styles.buttonText} >{t('MainFourthButton')}</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}


export default MainScreen;