import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
          source={require('../assets/images/SignUpImages/arrowleft.png')}
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
    alignItems: 'center',
    height: 60,
    backgroundColor: '#ffffff',
    elevation: 0,
  },
  backButton: {
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 20,
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
