import { useTranslation } from 'react-i18next';
import {ObjectClass, DrinkClass, DrinkPointsClass} from './Classes';


export function GetStrength(){
    const {t}= useTranslation();
    const strength:ObjectClass[] =t('Lang')=='pl' ? require('./assets/strength.json') : require('./assets/strengthEng.json');
    return strength;
}

export function GetTaste(){
    const {t}= useTranslation();
    const taste:ObjectClass[] = t('Lang')=='pl' ? require('./assets/taste.json') : require('./assets/tasteEng.json');
    return taste;
}

export function GetIngredients(){
    const {t}= useTranslation();
  const ingredients :ObjectClass[]= t('Lang')=='pl' ? require('./assets/ingredients.json') : require('./assets/ingredientsEng.json');
    return ingredients;
}

export function GetAlcohol(){
    const {t}= useTranslation();
    const alcohol :ObjectClass[]= t('Lang')=='pl' ? require('./assets/alcohol.json') : require('./assets/alcoholEng.json');
    return alcohol;
}

export function GetDrinks(){
    const {t}= useTranslation();
    const drinks: DrinkClass[] = t('Lang') == 'pl' ? require('./assets/drinks.json') : require('./assets/drinksEng.json');
    return drinks;
}

export function GetDrinksIngredienClass(){
    const {t}= useTranslation();
    const drinks: DrinkPointsClass[] = t('Lang') == 'pl' ? require('./assets/drinks.json') : require('./assets/drinksEng.json');
    return drinks;
}
export function GetDrinksSorted(){
    const {t}= useTranslation();
    const drinks: DrinkClass[] = t('Lang') == 'pl' ? require('./assets/drinks.json') : require('./assets/drinksEng.json');
    const sortedDrinks = drinks.sort((a, b) => a.Name.localeCompare(b.Name));
    return sortedDrinks;
}

export function GetDrinksIngredienClassSorted(){
    const {t}= useTranslation();
    const drinks: DrinkPointsClass[] = t('Lang') == 'pl' ? require('./assets/drinks.json') : require('./assets/drinksEng.json');
    const sortedDrinks = drinks.sort((a, b) => a.Name.localeCompare(b.Name));
    return sortedDrinks;
}

export function MyIngredientsGetDrinks(alcohols:Array<string>, ingredients:Array<string>){
    const {t}= useTranslation();
    const drinks: DrinkPointsClass[] = t('Lang') == 'pl' ? require('./assets/drinks.json') : require('./assets/drinksEng.json');
    drinks.forEach((drink)=>{
        drink.PointsIngredientsMax = drink.Alcohol.length + drink.Ingredients.length
        drink.PointsIngredients = 0;
        drink.Alcohol.forEach((x) => { alcohols.forEach((y) => { if (x == y) drink.PointsIngredients += 1; }); });
        drink.Ingredients.forEach((x) => { ingredients.forEach((y) => { if (x == y) drink.PointsIngredients += 1; }); });
    })
    const filteredDrinks = drinks.filter((drink) => drink.PointsIngredients !== 0);

const sortedDrinks = filteredDrinks.sort(
    (a, b) => (a.PointsIngredientsMax - a.PointsIngredients) - (b.PointsIngredientsMax - b.PointsIngredients)
);
    return sortedDrinks;
}

export function GetTasteSpecific(drink: DrinkClass){
    const taste:ObjectClass[] = GetTaste();
    const tasteSpecific: ObjectClass[] = taste.filter(item => drink.Taste.includes(item.key));
    return tasteSpecific;
}

export function GetIngredientsSpecific(drink: DrinkClass){
  const ingredients :ObjectClass[]= GetIngredients();
  const ingredientsSpecific: ObjectClass[] = ingredients.filter(item => drink.Ingredients.includes(item.key));
    return ingredientsSpecific;
}

export function GetAlcoholSpecific(drink: DrinkClass){
    const alcohol :ObjectClass[]= GetAlcohol();
    const alcoholsSpecific: ObjectClass[] = alcohol.filter(item => drink.Alcohol.includes(item.key));
    return alcoholsSpecific;
}
