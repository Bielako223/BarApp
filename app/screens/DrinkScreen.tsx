
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRoute } from "@react-navigation/native"

let drinksArray: DrinkClass[] = require('../assets/drinks.json');
function DrinkScreen({navigation}: {navigation: any}) {
  const route = useRoute()
  const taste=route.params?.taste
  const strength=route.params?.strength
  const alcohols=route.params?.alcohols
  const ingredients=route.params?.ingredients
    return (
      <View style={styles.container}>
      <Text>ZSE2</Text>
      <Text>{drinksArray[0].Name}</Text>
      <Text>{strength[0].value}</Text>
      <Button
      title="Back"
      onPress={() =>
        navigation.navigate("Main")
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


export default DrinkScreen;

class DrinkClass{
  'Id': number;
  'Name': string;
  'Description': string;
  'Points': number;
}

