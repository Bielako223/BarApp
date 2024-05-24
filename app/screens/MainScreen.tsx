import React from 'react';
import { Button, Text, View,Image,SafeAreaView,Pressable  } from 'react-native';
import { useRoute} from "@react-navigation/native"
import styles from './styles';

function MainScreen({navigation}: {navigation: any}) {
  let route = useRoute();
    return (
      <View style={styles.container}>
         <SafeAreaView style={styles.imgContainer}>
      
      <Image
        source={require('../assets/barIcon6.png')}
        style={styles.image}
      />
      <Text style={styles.logoText}>DrinkDecider</Text>
    <Pressable style={styles.startButton} onPress={() =>navigation.navigate("Taste")}>
        <Text style={styles.buttonText} >Start</Text>
      </Pressable>
      <Pressable style={styles.startButton} onPress={() =>navigation.navigate("RandomDrink")}>
        <Text style={styles.buttonText} >Losowy drink</Text>
      </Pressable>
    </SafeAreaView>
    </View>
  );
}


export default MainScreen;