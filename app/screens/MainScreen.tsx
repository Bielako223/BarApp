import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MultipleSelectList,SelectList   } from 'react-native-dropdown-select-list'

const taste :TasteClass[]= require('../assets/taste.json');
const strength :TasteClass[]= require('../assets/strength.json');
const alcohols :TasteClass[]= require('../assets/alcohol.json');
const ingredients :TasteClass[]= require('../assets/ingredients.json');

function MainScreen({navigation}: {navigation: any}) {

  const [tasteSelected, setTasteSelected] = React.useState([]);
  const [strengthSelected, setStrengthSelected] = React.useState();
  const [alcoholsSelected, setAlcoholsSelected] = React.useState([]);
  const [ingredientsSelected, setIngredientsSelected] = React.useState([]);

    return (
      <View style={styles.container}>
      <Text>ZSE1</Text>
      <MultipleSelectList 
      placeholder="Wybrane"
        setSelected={(val:any) => setTasteSelected(val)} 
        data={taste} 
        save="key"
        label="Smak"
        search={false}
    />
    <SelectList
        setSelected={(val:any) => setStrengthSelected(val)} 
        data={strength} 
        save="key"
        placeholder='Moc'
        search={false}
    />
    <MultipleSelectList 
    placeholder="Wybrane"
        setSelected={(val:any) => setAlcoholsSelected(val)} 
        data={alcohols} 
        save="key"
        label="Alkohole"
        search={false}
    />
    <MultipleSelectList 
        setSelected={(val:any) => setIngredientsSelected(val)} 
        data={ingredients} 
        save="key"
        placeholder="Wybrane"
        label="Dodatki których nie lubisz"
        searchPlaceholder="Szukaj"
        notFoundText="Brak"
        
    />
      <Button
      title="Drink"
      onPress={() =>
        navigation.navigate("Drink",{taste:tasteSelected,strength:strengthSelected,alcohols:alcoholsSelected,ingredients:ingredientsSelected})
      }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;

class TasteClass{
  'key': string;
  'value': string;
}