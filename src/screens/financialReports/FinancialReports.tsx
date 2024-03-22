import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  FoodLineGraph,
  ShoppigLineGraph,
  SubscriptionLineGraph,
  Passive_Income,
  SalaryLineGraph,
  Arrow_Down_2,
  Graph_Icon,
  Graph_Expense,
  Graph_Income,
  Arrow_Down,
  Category_Button,
  CustomHeader,
} from '../../assets/constants/Constants';
import useFinancialReports from './useFinancialReports';
import Category from '../../components/Category';

const FinancialReports = () => {
  const {
    totalExpense,
    totalIncome,
    isExpenseSelected,
    setIsExpenseSelected,
    categoryIncomeTotals,
    categoryExpenseTotals,
    PassiveIncome,
  } = useFinancialReports();
  const handleToggle = () => {
    setIsExpenseSelected(!isExpenseSelected);
  };

  const expenseBackgroundColor = isExpenseSelected ? '#F1F1FA' : '#F1F1FA';
  const incomeBackgroundColor = isExpenseSelected ? '#F1F1FA' : '#F1F1FA';

  const bottomContentText = isExpenseSelected ? (
    <>
      <View style={styles.BarGraphContainer}>
        <Category
          category="Shopping"
          amount={categoryExpenseTotals.Shopping}
          image={ShoppigLineGraph}
          style={styles.category1}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <Category
          category="Subscription"
          amount={categoryExpenseTotals.Subscription}
          image={SubscriptionLineGraph}
          style={styles.category2}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <Category
          category="Food"
          amount={categoryExpenseTotals.Food}
          image={FoodLineGraph}
          style={styles.category3}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <Category
          category="Transportation"
          amount={categoryExpenseTotals.Transportation}
          image={Passive_Income}
          style={styles.category4}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <Category
          category="Salary"
          amount={categoryExpenseTotals.Salary}
          image={SalaryLineGraph}
          style={styles.category5}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <View style={{width: 0.1, height: 40, backgroundColor: 'white'}}></View>
      </View>
    </>
  ) : (
    <>
      <View style={styles.BarGraphContainer}>
        <Category
          category="Salary"
          amount={categoryIncomeTotals.Salary || 0}
          image={SalaryLineGraph}
          style={styles.Incomecategory}
          styleamount={styles.IncomeAmountColor}
          transactionType="Income"
        />
        <Category
          category="Passive Income"
          amount={PassiveIncome || 0}
          image={Passive_Income}
          style={styles.IncomeCategory2}
          styleamount={styles.IncomeAmountColor}
          transactionType="Income"
        />
      </View>
    </>
  );
  const financialText = `$${isExpenseSelected ? totalExpense : totalIncome}`;

  return (
    <View style={styles.MainContainer}>
      <CustomHeader
        title="Financial Reports"
        style={{paddingHorizontal: 20, color: 'black'}}
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={Arrow_Down_2} style={styles.filterImage} />
            <Text style={styles.filterButtonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.burgerIcon}>
            <Image source={Graph_Icon} style={styles.filterImage2} />
          </TouchableOpacity>
        </View>
        <View style={styles.financialContainer}>
          {isExpenseSelected ? (
            <Image source={Graph_Expense} style={styles.financialImage} />
          ) : (
            <Image source={Graph_Income} style={styles.financialImage} />
          )}
          <Text style={styles.financialText}>{financialText}</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={handleToggle}>
            <View
              style={[
                styles.headingContainer,
                {backgroundColor: expenseBackgroundColor},
              ]}>
              <Text
                style={[
                  styles.headingText,
                  isExpenseSelected && {
                    backgroundColor: '#7F3DFF',
                    color: 'white',
                  },
                ]}>
                Expense
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggle}>
            <View
              style={[
                styles.headingContainer,
                {backgroundColor: incomeBackgroundColor},
              ]}>
              <Text
                style={[
                  styles.headingText,
                  !isExpenseSelected && {
                    backgroundColor: '#7F3DFF',
                    color: 'white',
                  },
                ]}>
                Income
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContent}>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.bottomContentButton}>
              <Image source={Arrow_Down} style={styles.bottomImage} />
              <Text style={styles.bottomButtonText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttomIcon}>
              <Image source={Category_Button} style={styles.categorybtn} />
            </TouchableOpacity>
          </View>
        </View>
        <Text>{bottomContentText}</Text>
      </ScrollView>
    </View>
  );
};

export default FinancialReports;

const styles = StyleSheet.create({
  container: {
    width: 342,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1FA',
    borderRadius: 25,
  },
  headingContainer: {
    height: 56,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    width: 167,

    borderRadius: 25,
  },
  headingText: {
    height: 48,
    width: 167,
    fontSize: 18,
    color: 'black',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 25,
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Inter-Medium',
  },
  MainContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    height: 40,
    width: 96,
    borderRadius: 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterImage: {
    height: 24,
    width: 24,
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'black',
  },
  burgerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterImage2: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  financialContainer: {
    marginVertical: 30,
    position: 'relative',
  },
  financialImage: {
    height: 196,
    width: 196,
    alignSelf: 'center',
  },
  financialText: {
    width: 147,
    height: 50,
    overflow: 'hidden',
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 30,
    color: 'black',
    alignSelf: 'center',
    marginBottom: 30,
    position: 'absolute',
    top: 45,
  },
  bottomContent: {},
  bottomContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContentButton: {
    height: 40,
    width: 115,
    borderRadius: 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  bottomButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'black',
  },
  buttomIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
  },
  categorybtn: {height: 40, width: 40},
  category1: {backgroundColor: 'orange'},
  category2: {backgroundColor: '#7F3DFF'},
  category3: {backgroundColor: 'red'},
  category4: {backgroundColor: 'black'},
  category5: {backgroundColor: '#00A86B'},
  amountColor1: {color: 'red'},
  BarGraphContainer: {
    paddingVertical: 0,
    marginHorizontal: 20,

    marginTop: 20,
  },
  Incomecategory: {backgroundColor: '#00A86B'},
  IncomeCategory2: {backgroundColor: 'black'},
  IncomeAmountColor: {color: '#00A86B'},
});
