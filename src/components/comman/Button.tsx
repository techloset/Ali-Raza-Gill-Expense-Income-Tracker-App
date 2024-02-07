import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.content}>
        <Text style={styles.btnName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: '#7F3DFF',
    padding: 10,
    borderRadius: 16,
    marginTop: 10,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnName: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    fontWeight: '600',
  },
});

export default Button;
