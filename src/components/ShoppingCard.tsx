import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {AuthRoutes} from '../navigation/stackNavigation/StackNavigation';

interface ExpenseCardProps {
  img: any;
  docId: string;
  imageUrl: any;
  amount: number;
  description: string;
  category: string;
  wallet: string;
  time: string;
  style: object;
  transType: string;
  onPress: () => void;
}

const ShoppingCard: React.FC<ExpenseCardProps> = ({
  img,
  docId,
  imageUrl,
  amount,
  description,
  category,
  time,
  transType,
}) => {
  const navigation = useNavigation();
  const onPressHnadle = () => {
    navigation.navigate('EditTransaction', {
      docId,
      imageUrl,
      amount,
      description,
      category,
      time,
      transType,
    });
  };

  return (
    <TouchableOpacity onPress={onPressHnadle}>
      <View style={styles.ShoppingContainer}>
        <View style={styles.ShoppingMain}>
          <View>
            <View style={styles.imageMain}>
              <Image source={img} style={styles.image} />
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryContainerText}>{category}</Text>
            <Text style={styles.categoryContainerDesc}>{description}</Text>
          </View>
        </View>
        <View style={styles.expenseContainer}>
          {/* <Text style={{color: amount < 0 ? 'red' : 'green'}}>
            {amount < 0 ? `- ${Math.abs(amount)}` : amount}
          </Text> */}
          <Text
            style={category == 'Expense' ? {color: 'red'} : {color: 'green'}}>
            {amount}
          </Text>
          <Text style={styles.expenseContainerDate}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ShoppingContainer: {
    flexDirection: 'row',
    marginHorizontal: 0,
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    marginTop: 10,
    height: 89,
    borderRadius: 20,
  },
  ShoppingMain: {
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
