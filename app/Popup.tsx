import React from 'react';
import { Modal, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  prepIngred?: Array<string> | null;
  prepInstruct?: Array<string> | null; 
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, prepIngred, prepInstruct }) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose} // Obsługa przycisku "wstecz" na Androidzie
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
          </Text>
          <FlatList
        data={prepIngred}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
      <FlatList
        data={prepInstruct}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item}</Text>
        )}
      />
          <TouchableOpacity onPress={onClose}>
              <Text>Zamknij</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  
});

export default Popup;
