import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from '../styles';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
    const { t } = useTranslation();
  
    return (
      <SafeAreaView style={styles.containerInstruction}>
        <View style={styles.contentContainerInstruction}>
          <Text style={styles.instructionTextTop}>
              {t('WelcomeDescription')}
          </Text>
          <View>
            <Text style={styles.instructionTextList}>{t('Step1')}</Text>
            <Text style={styles.instructionTextList}>{t('Step2')}</Text>
            <Text style={styles.instructionTextList}>{t('Step3')}</Text>
          </View>
        </View>
  
        <View style={styles.buttonsContainerInstruction}>
          <Pressable style={styles.buttonInstruction} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>{t('ButtonTextBack')}</Text>
          </Pressable>
          <Pressable style={styles.button2Instruction} onPress={() => navigation.navigate("MyIngredientsAlcohol")}>
            <Text style={styles.buttonText}>{t('ButtonTextNext')}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  };
  
  export default WelcomeScreen;