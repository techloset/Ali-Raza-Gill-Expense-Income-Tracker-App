import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface ExpenseCardProps {
  img: any;
  documentId: string;
  imageUrl: any;
  amount: number;
  discription: string;
  category: string;
  wallet: string;
  time: string;
  style?: object;
  transType: string;
  onPress: () => void;
}

const ShoppingCard: React.FC<ExpenseCardProps> = ({
  img,
  documentId,
  imageUrl,
  amount,
  discription,
  category,
  time,
  transType,
}) => {
  const navigation = useNavigation<
    StackNavigationProp<
      {
        EditTransaction: {
          documentId: string;
          imageUrl: any;
          amount: number;
          discription: string;
          category: string;
          time: string;
          transType: string;
        };
      },
      'EditTransaction'
    >
  >();

  const onPressHandle = () => {
    navigation.navigate('EditTransaction', {
      documentId,
      imageUrl,
      amount,
      discription,
      category,
      time,
      transType,
    });
  };

  return (
    <TouchableOpacity onPress={onPressHandle}>
      <View style={styles.shoppingContainer}>
        <View style={styles.shoppingMain}>
          <View style={styles.imageMain}>
            <Image source={img} style={styles.image} />
          </View>
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryContainerText}>{category}</Text>
            <Text style={styles.categoryContainerDesc}>{discription}</Text>
          </View>
        </View>
        <View style={styles.expenseContainer}>
          <Text
            style={{
              color: transType.toLowerCase() === 'expense' ? 'red' : 'green',
            }}>
            ${amount}
          </Text>
          <Text style={styles.expenseContainerDate}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shoppingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    marginTop: 10,
    height: 89,
    borderRadius: 20,
  },
  shoppingMain: {
    flexDirection: 'row',
  },
  imageMain: {
    marginTop: 15,
  },
  image: {height: 60, width: 60},
  expenseContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
  categoryContainer: {
    marginHorizontal: 9,
    justifyContent: 'space-evenly',
  },
  categoryContainerText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: 'black',
  },
  categoryContainerDesc: {
    fontFamily: 'Inter-Medium',
  },
  expenseContainerAmount: {
    fontFamily: 'Inter-SemiBold',
    color: 'red',
  },
  expenseContainerDate: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
  },
});

export default ShoppingCard;
