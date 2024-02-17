import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

interface ExpenseCardProps {
  img: any;
  category: string;
  description: string;
  amount: number;
  time: string;
  style: object;
  onPress: () => void;
}
const ShoppingCard: React.FC<ExpenseCardProps> = ({
  img,
  category,
  description,
  amount,
  time,
  style,
}) => {
  return (
    <TouchableOpacity>
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
          <Text style={styles.expenseContainerAmount}>{amount}</Text>
          <Text style={styles.expenseContainerDate}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ShoppingContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    marginTop: 20,
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
  },
});

export default ShoppingCard;
