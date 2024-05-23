import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useRoute} from "@react-navigation/native"
import styles from './styles';

function MainScreen({navigation}: {navigation: any}) {
  let route = useRoute();
    return (
      <View style={styles.container}>
      <Text>Strona startowa!</Text>
      <Button
      title="Start"
      onPress={() =>
        navigation.navigate("Taste")
      }
    />
    </View>
  );
}


export default MainScreen;