import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Images from './Images';
import { ObjectClass } from './Classes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

interface DrinkItemProps {
  drink: {
    Id: number;
    Name: string;
    Img: string;
    Strength: string[];
    Description: string;
    PointsIngredients: number;
    PointsIngredientsMax: number;
    alcoholsSpecific: ObjectClass[];
    ingredientsSpecific: ObjectClass[];
    tasteSpecific: ObjectClass[];
  };
  onPress: (drink: any) => void;
  isIngredientsElement : boolean;
}

const DrinkItem: React.FC<DrinkItemProps> = memo(({ drink, onPress, isIngredientsElement=false }) => {
  const ImgPath = drink.Img;
  const {t}= useTranslation();
  return (
    <View style={styles.othersDrinks} key={drink.Id}>
      <Text style={[styles.itemText, { marginBottom: 7 }]}>{drink.Name}</Text>

      {isIngredientsElement == true ? 
    drink.PointsIngredientsMax > 4 ? 
        <Text style={[styles.itemText, { marginBottom: 7 }]}>
            {drink.PointsIngredients}/{drink.PointsIngredientsMax} składników.
        </Text> 
        : 
        <Text style={[styles.itemText, { marginBottom: 7 }]}>
            {drink.PointsIngredients}/{drink.PointsIngredientsMax} składniki.
        </Text>
    : 
    <View></View>
}


      <View>
        <View style={styles.drinkImgContainer2}>
          <View style={styles.drinkImgContainer}>
            <Image source={Images[ImgPath]} style={styles.drinkImg} />
          </View>
        </View>

        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkTaste')}</Text>{' '}
          {drink.tasteSpecific.map((v, index, row) => (
            <Text key={index}>{index === row.length - 1 ? `${v.value}.` : `${v.value}, `}</Text>
          ))}
        </Text>
        <Text style={styles.percentageText1}><Text style={styles.drinkTextBold}>{t('DrinkAlcoholPercentage')}</Text> {drink.Strength[1]}</Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkAlcohols')}</Text>{' '}
          {drink.alcoholsSpecific.map((v, index, row) => (
            <Text key={index}>{index === row.length - 1 ? `${v.value}.` : `${v.value}, `}</Text>
          ))}
        </Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text>{' '}
          {drink.ingredientsSpecific.map((v, index, row) => (
            <Text key={index}>{index === row.length - 1 ? `${v.value}.` : `${v.value}, `}</Text>
          ))}
        </Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('Description')}</Text> {drink.Description}
        </Text>
        <TouchableOpacity style={styles.recipeButton} onPress={() => onPress(drink)}>
          <Icon name="book" size={20} color="#fff" />
          <Text style={styles.buttonText}>{t('Recipe')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default DrinkItem;
