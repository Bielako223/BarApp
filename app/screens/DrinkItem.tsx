import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Images from '../Images';
import { DrinkClass, ObjectClass } from '../Classes';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DrinkItemProps {
  drink: DrinkClass;
  onPress: (drink: DrinkClass) => void;
}

const DrinkItem: React.FC<DrinkItemProps> = ({ drink, onPress }) => {
  const { t } = useTranslation();
  const alcohol: ObjectClass[] = t('Lang') === 'pl' ? require('../assets/alcohol.json') : require('../assets/alcoholEng.json');
  const ingredients: ObjectClass[] = t('Lang') === 'pl' ? require('../assets/ingredients.json') : require('../assets/ingredientsEng.json');
  const taste: ObjectClass[] = t('Lang') === 'pl' ? require('../assets/taste.json') : require('../assets/tasteEng.json');
  const alcoholsSpecific: ObjectClass[] = alcohol.filter((item1) => drink.Alcohol.includes(item1.key));
  const ingredientsSpecific: ObjectClass[] = ingredients.filter((item1) => drink.Ingredients.includes(item1.key));
  const tasteSpecific: ObjectClass[] = taste.filter((item1) => drink.Taste.includes(item1.key));
  const ImgPath: string = drink.Img;

  return (
    <View style={styles.othersDrinks} key={drink.Id}>
      <Text style={[styles.itemText, { marginBottom: 7 }]}>{drink.Name}</Text>
      <View>
        <View style={styles.drinkImgContainer2}>
          <View style={styles.drinkImgContainer}>
            <Image source={Images[ImgPath]} style={styles.drinkImg} />
          </View>
        </View>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkTaste')}</Text>{' '}
          {tasteSpecific.map((v, index, row) => (
            <Text key={index}>
              {row.length - 1 === index ? `${v.value}.` : `${v.value},`}
            </Text>
          ))}
        </Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkAlcoholPercentage')}</Text> {drink.Strength[1]}
        </Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkAlcohols')}</Text>{' '}
          {alcoholsSpecific.map((v, index, row) => (
            <Text key={index}>
              {row.length - 1 === index ? `${v.value}.` : `${v.value},`}
            </Text>
          ))}
        </Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text>{' '}
          {ingredientsSpecific.map((v, index, row) => (
            <Text key={index}>
              {row.length - 1 === index ? `${v.value}.` : `${v.value},`}
            </Text>
          ))}
        </Text>
        <Text style={styles.percentageText1}>
          <Text style={styles.drinkTextBold}>{t('Description')}</Text> {drink.Description}
        </Text>
        <TouchableOpacity style={styles.recipeButton} onPress={() => onPress(drink)}>
        <Icon name="book" size={20} color="#fff" />
          <Text style={styles.buttonText}>Przepis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrinkItem;
