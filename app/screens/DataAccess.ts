import { useTranslation } from 'react-i18next';
import {ObjectClass, DrinkClass} from './Classes';


export function GetStrength(){
    const {t}= useTranslation();
    const strength:ObjectClass[] =t('Lang')=='pl' ? require('../assets/strength.json') : require('../assets/strengthEng.json');
    return strength;
}

export function GetTaste(){
    const {t}= useTranslation();
    const taste:ObjectClass[] = t('Lang')=='pl' ? require('../assets/taste.json') : require('../assets/tasteEng.json');
    return taste;
}

export function GetIngredients(){
    const {t}= useTranslation();
  const ingredients :ObjectClass[]= t('Lang')=='pl' ? require('../assets/ingredients.json') : require('../assets/ingredientsEng.json');
    return ingredients;
}

export function GetAlcohol(){
    const {t}= useTranslation();
    const alcohol :ObjectClass[]= t('Lang')=='pl' ? require('../assets/alcohol.json') : require('../assets/alcoholEng.json');
    return alcohol;
}

export function GetDrinks(){
    const {t}= useTranslation();
    const drinks: DrinkClass[] = t('Lang') == 'pl' ? require('../assets/drinks.json') : require('../assets/drinksEng.json');
    return drinks;
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
