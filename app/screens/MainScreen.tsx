import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MultipleSelectList  } from 'react-native-dropdown-select-list'

const data :TasteClass[]= require('../assets/taste.json');

function MainScreen({navigation}: {navigation: any}) {

  const [selected, setSelected] = React.useState([]);

    return (
      <View style={styles.container}>
      <Text>ZSE1</Text>
      <MultipleSelectList 
        setSelected={(val:any) => setSelected(val)} 
        data={data} 
        save="value"
        onSelect={() => alert(selected)} 
        label="Smak"
    />
      <Button
      title="Drink"
      onPress={() =>
        navigation.navigate("Drink",{Zupa:"Zuuuupa"})
      }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;

class TasteClass{
  'Id': number;
  'value': string;
}