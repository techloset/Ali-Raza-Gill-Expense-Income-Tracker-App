import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AttachmentInputPopUp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/images/InputPopup/camera.png')} />
        <Text style={styles.Text}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/images/InputPopup/gallery.png')} />
        <Text style={styles.Text}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/images/InputPopup/document.png')} />
        <Text style={styles.Text}>File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttachmentInputPopUp;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  buttonContainer: {
    padding: 14,
    backgroundColor: '#eee5ff',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 16,
    flex: 1,
  },
  Text: {
    fontFamily: 'Inter-Medium',
  },
});
