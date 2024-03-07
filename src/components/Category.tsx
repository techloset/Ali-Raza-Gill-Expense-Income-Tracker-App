import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

interface CategoryProps {
  category: string;
  color: string;
  style: object;
  styleamount: object;
  amount: number;
  image: any;
  transactionType: 'Expense' | 'Income';
}

const Category: React.FC<CategoryProps> = ({
  category,
  color,
  amount,
  image,
  style,
  styleamount,
  transactionType,
}) => {
  return (
    <View>
      <View style={styles.CategoryContainer}>
        <View style={styles.Container}>
          <Text style={[styles.ContainerDot, style]}>{color}</Text>
          <Text style={styles.ContainerText}>{category}</Text>
        </View>
        <View>
          <Text style={[styles.ContainerText2, styleamount]}>
            {transactionType === 'Expense' ? '-' : '+'}${amount}
          </Text>
        </View>
      </View>
      <View style={styles.categoryImageContainer}>
        <Image source={image} style={styles.categoryImage} />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  CategoryContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    maxWidth: 230,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 17,
    overflow: 'hidden',
  },
  ContainerDot: {
    height: 14,
    width: 14,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 7,
  },
  ContainerText: {
    height: 34,
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    overflow: 'hidden',

    textAlignVertical: 'center',
  },
  ContainerText2: {
    fontFamily: 'Inter-Medium',
    fontSize: 24,
    backgroundColor: 'white',
    marginRight: 3,
  },
  categoryImageContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  categoryImage: {
    width: 323,
    borderRadius: 25,
    marginTop: 5,
    height: 15,
  },
});
