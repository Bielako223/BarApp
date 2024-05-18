
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRoute, RouteProp } from "@react-navigation/native"



let drinksArray: DrinkClass[] = require('../assets/drinks.json');
function DrinkScreen({navigation}: {navigation: any}) {
  let route: RouteProp<{params: {taste: Array<string>,strength: string,alcohols: Array<string>,ingredients: Array<string>}}, 'params'> = useRoute();
  const taste=route.params?.taste
  const strength=route.params?.strength
  const alcohols=route.params?.alcohols
  const ingredients=route.params?.ingredients
  DrinksPoints(taste,strength,alcohols,ingredients);
  const arrayDataItems = drinksArray.map((c) => <View><Text>{c.Name} {c.Points}</Text></View>);
    return (
      <View style={styles.container}>
      <Text>ZSE2</Text>
      {arrayDataItems}
      <Button
      title="Back"
      onPress={() =>
        navigation.navigate("Main")
      }
    />
    </View>
  );
}

let DrinksPoints=(taste: Array<string>,strength: string,alcohols: Array<string>,ingredients: Array<string>)=>{
  drinksArray.forEach((e) => { e.Points = 0; });
  drinksArray.forEach((element) => {
    if (element.Strength[0] == strength) element.Points += 1;
    element.Alcohol.forEach((x) => { alcohols.forEach((y) => { if (x == y) element.Points += 1; }); });
    element.Taste.forEach((x) => { taste.forEach((y) => { if (x == y) element.Points += 1; }); });
    element.Ingredients.forEach((x) => { ingredients.forEach((y) => { if (x == y) element.Points += 1; }); });
  })
  drinksArray=drinksArray.sort((a,b)=>b.Points-a.Points)
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default DrinkScreen;

class DrinkClass{
  'Id': number;
  'Name': string;
  "Strength": Array<any>;
  "Taste": Array<string>;
  "Alcohol": Array<string>;
  "Ingredients": Array<string>;
  'Points': number;
}

class ObjectClass{
  'Id': number;
  'value': string;
}