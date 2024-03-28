import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomHeaderImgae} from '../assets/constants/Constants';

interface CustomHeaderProps {
  title: string;
  style: object;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({title, style}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Image
          source={CustomHeaderImgae}
          style={[styles.backIcon]}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  backButton: {
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  backIcon: {
    width: 25,
    height: 60,
    tintColor: 'black',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
});

export default CustomHeader;
