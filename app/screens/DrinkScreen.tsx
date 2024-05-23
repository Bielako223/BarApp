
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
  const finalShow:DrinkClass[]=final5drinks(drinksArray);
  const arrayDataItems = drinksArray.map((c) => <View><Text>{c.Name} {c.Percentage}%</Text></View>);
    return (
      <View style={styles.container}>
      <Text>Twój drink to:</Text>
      <Text>!!!!!{finalShow[0].Name} {finalShow[0].Percentage}%!!!!!</Text>
      <Text>również mogą ci się spodobać:</Text>
      <Text>{finalShow[1].Name} {finalShow[1].Percentage}%</Text>
      <Text>{finalShow[2].Name} {finalShow[2].Percentage}%</Text>
      <Text>{finalShow[3].Name} {finalShow[3].Percentage}%</Text>
      <Text>{finalShow[4].Name} {finalShow[4].Percentage}%</Text>
      <Button
      title="Wróć na początek"
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
    if (element.Strength[0] == strength) element.Points += 4;
    element.Alcohol.forEach((x) => { alcohols.forEach((y) => { if (x == y) element.Points += 2; }); });
    element.Taste.forEach((x) => { taste.forEach((y) => { if (x == y) element.Points += 4; }); });
    element.Ingredients.forEach((x) => { ingredients.forEach((y) => { if (x == y) element.Points -= 3; }); });
    element.Percentage=Math.round((100*element.Points)/element.PointsMax)
  })
  drinksArray=drinksArray.sort((a,b)=>b.Percentage-a.Percentage)
}

function final5drinks(drink:DrinkClass[]){
  const finalShow:DrinkClass[]=[];
  for(let i=0;i<5;i++) if(drink[i].Points>0)finalShow.push(drink[i])
    return finalShow
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
  'PointsMax': number;
  'Description': string;
  'Percentage': number;
}