import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';

interface CustomDialogBoxProps {
  visible: boolean;
  message: string;
  onClose: () => void;
}

const CustomDialogBox: React.FC<CustomDialogBoxProps> = ({
  visible,
  message,
  onClose,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity onPress={onClose} style={styles.container}>
        <View style={styles.dialogContent}>
          <Image
            source={require('../assets/images/InputPopup/Tick.png')}
            style={styles.image}
          />
          <Text style={styles.messageText}>{message}</Text>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeButton}></TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#000',
  },
  dialogContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 'auto',
    paddingHorizontal: 40,
  },
  image: {
    marginBottom: 10,
    marginLeft: 100,
  },
  messageText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    color: 'black',
  },
  closeButton: {
    marginTop: 20,
  },
  closeText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CustomDialogBox;
