import React, {useState} from 'react';
import { Text, View,Image,TouchableOpacity  } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import i18next from '../services/i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ChangeLang() {
  const [changeLanguage, setchangeLanguage] = useState(false);
  const {t}= useTranslation();
    return (
         <View style={styles.langContainer}>
            {!changeLanguage &&(<TouchableOpacity style={styles.langContainer}  onPress={() => setchangeLanguage(true)}>
            <Icon name="translate" size={30} color="#000" />
      </TouchableOpacity>)}
      {changeLanguage &&(<View style={styles.langContainer}>
          <View >
          <TouchableOpacity style={styles.langflagContainer} onPress={() => {i18next.changeLanguage('en'); setchangeLanguage(false)}}>
        <Image source={require('../assets/img/eng.png')} style={{width:40,height:20}} />
        <Text style={{fontSize:12}}>English</Text>
      </TouchableOpacity>
          </View>
          <View >
      <TouchableOpacity style={styles.langflagContainer} onPress={() => {i18next.changeLanguage('pl'); setchangeLanguage(false)}}>
        <Image source={require('../assets/img/pl.png')} style={{width:40,height:20}} />
        
      <Text style={{fontSize:12}}>Polski</Text>
      </TouchableOpacity>
      </View>
          </View>)}
         </View>

  );
}


export default ChangeLang;