import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

interface ButtonGoogleProps {
  icon: any;
  text: string;
}

const ButtonGoogle: React.FC<ButtonGoogleProps> = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 16,
    marginTop: 10,
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    padding: 5,
    marginRight: 10,
  },
  btnText: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 18,
  },
});
export default ButtonGoogle;
