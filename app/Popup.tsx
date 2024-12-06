import React from 'react';
import { Modal, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  prepIngred?: Array<string> | null;
  prepInstruct?: Array<string> | null; 
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, prepIngred, prepInstruct }) => {
  const {t}= useTranslation();
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
          </Text>
          <Text style={styles.drinkTextBold}>{t('DrinkIngredients')}</Text>
          <FlatList
        data={prepIngred}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>• {item}</Text>
        )}
      />
      <Text></Text>
      <Text style={styles.drinkTextBold}>{t('PreparationMethod')}</Text>
      <FlatList
        data={prepInstruct}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>• {item}</Text>
        )}
      />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>{t('Close')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};



export default Popup;
