// import React, {useState} from 'react';
// import {
//   Animated,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import CustomHeader from '../../components/CustomHeader';

// const FinancialReports = () => {
//   const [isExpenseSelected, setIsExpenseSelected] = useState<boolean>(true);
//   const animatedValue = useState(new Animated.Value(0))[0];

//   const handleToggle = () => {
//     setIsExpenseSelected(!isExpenseSelected);

//     Animated.timing(animatedValue, {
//       toValue: isExpenseSelected ? 1 : 0,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   const expenseBackgroundColor = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#F1F1FA', '#F1F1FA'],
//   });

//   const incomeBackgroundColor = animatedValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#F1F1FA', '#F1F1FA'],
//   });

//   const imageText = isExpenseSelected ? 'Expense' : 'Income';
//   const bottomContentText = isExpenseSelected
//     ? 'Expense Content'
//     : 'Income Content';
//   const financialText = `$${isExpenseSelected ? 30000000 : 50000000}`;

//   return (
//     <View style={styles.MainContainer}>
//       <CustomHeader
//         title="Financial Reports"
//         style={{paddingHorizontal: 20, color: 'black'}}
//       />
//       <ScrollView>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity style={styles.filterButton}>
//             <Image
//               source={require('../../assets/images/Report_images/arrow-down.png')}
//               style={styles.filterImage}
//             />
//             <Text style={styles.filterButtonText}>Month</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.burgerIcon}>
//             <Image
//               source={require('../../assets/images/Report_images/graphicon.png')}
//               style={styles.filterImage2}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.financialContainer}>
//           {isExpenseSelected ? (
//             <Image
//               source={require('../../assets/images/Report_images/Graph-Expense.png')}
//               style={styles.financialImage}
//             />
//           ) : (
//             <Image
//               source={require('../../assets/images/Report_images/Graph-Income.png')}
//               style={styles.financialImage}
//             />
//           )}
//           <Text style={styles.financialText}>{financialText}</Text>
//         </View>

//         <View style={styles.container}>
//           <TouchableOpacity onPress={handleToggle}>
//             <Animated.View
//               style={[
//                 styles.headingContainer,
//                 {backgroundColor: expenseBackgroundColor},
//               ]}>
//               <Text
//                 style={[
//                   styles.headingText,
//                   isExpenseSelected && styles.selectedText,
//                 ]}>
//                 Expense
//               </Text>
//             </Animated.View>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleToggle}>
//             <Animated.View
//               style={[
//                 styles.headingContainer,
//                 {backgroundColor: incomeBackgroundColor},
//               ]}>
//               <Text
//                 style={[
//                   styles.headingText,
//                   !isExpenseSelected && styles.selectedText,
//                 ]}>
//                 Income
//               </Text>
//             </Animated.View>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.bottomContent}>
//           <Text>{bottomContentText}</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default FinancialReports;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     borderWidth: 1,
//   },
//   headingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 10,
//     flexDirection: 'row',
//     width: 167,
//   },
//   headingText: {
//     height: 48,
//     width: 167,
//     fontSize: 18,
//     color: '#000',
//     fontFamily: 'Inter-Medium',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     borderWidth: 1,
//     borderRadius: 25,
//     backgroundColor: 'red',
//   },
//   selectedText: {
//     fontWeight: 'bold',
//     color: 'white',
//     fontFamily: 'Inter-Medium',
//   },

//   MainContainer: {
//     height: '100%',
//     backgroundColor: 'white',
//   },
//   headerContainer: {
//     marginTop: 20,
//     marginHorizontal: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   filterButton: {
//     height: 40,
//     width: 96,
//     borderRadius: 40,
//     borderColor: 'lightgrey',
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   filterImage: {
//     height: 24,
//     width: 24,
//   },
//   filterButtonText: {
//     fontSize: 14,
//     fontFamily: 'Inter-Medium',
//     color: 'black',
//   },
//   burgerIcon: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   filterImage2: {
//     height: 40,
//     width: 40,
//     borderRadius: 10,
//   },
//   financialContainer: {
//     marginVertical: 30,
//     position: 'relative',
//   },
//   financialImage: {
//     height: 196,
//     width: 196,
//     alignSelf: 'center',
//   },
//   financialText: {
//     width: 147,
//     height: 50,
//     overflow: 'hidden',
//     fontFamily: 'Inter-Bold',
//     fontSize: 32,
//     textAlign: 'center',
//     marginTop: 30,
//     color: 'black',
//     alignSelf: 'center',
//     marginBottom: 30,
//     position: 'absolute',
//     top: 45,
//   },
//   expenseImage: {
//     height: 50,
//     width: 50,
//     marginLeft: 10,
//   },
//   incomeImage: {
//     height: 50,
//     width: 50,
//     marginRight: 10,
//   },
//   bottomContent: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
// });

// -------------------------------------------------------------------------------------------------------
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import Category from '../../components/Category';
import useFinancialReports from './useFinancialReports';

const FinancialReports = () => {
  const {
    activeButton,
    setActiveButton,
    handlePress,
    totalExpense,
    totalIncome,
    accountBalance,
    expenses,
    incomes,
    isExpenseSelected,
    setIsExpenseSelected,
    isLoading,
    setIsLoading,
    financialReports,
    setFinancialReports,
    setExpenses,
    setIncomes,
    setTotalExpense,
    setTotalIncome,
  } = useFinancialReports();
  const handleToggle = () => {
    setIsExpenseSelected(!isExpenseSelected);
  };

  const expenseBackgroundColor = isExpenseSelected ? '#F1F1FA' : '#F1F1FA';
  const incomeBackgroundColor = isExpenseSelected ? '#F1F1FA' : '#F1F1FA';

  // const imageText = isExpenseSelected ? 'Expense' : 'Income';
  const bottomContentText = isExpenseSelected ? (
    <>
      <View style={styles.BarGraphContainer}>
        <Category
          color=""
          category="Shopping"
          amount={totalIncome}
          image={require('../../assets/images/Report_images/ShoppiingLineGraph.png')}
          style={styles.category1}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <Category
          color=""
          category="Subscription"
          amount={2000}
          image={require('../../assets/images/Report_images/SubscriptionLineGraph.png')}
          style={styles.category2}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
        <Category
          color=""
          category="Food"
          amount={500}
          image={require('../../assets/images/Report_images/FoodLineGraph.png')}
          style={styles.category3}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
      </View>
    </>
  ) : (
    <>
      <View style={styles.BarGraphContainer}>
        <Category
          color=""
          category="Salary"
          amount={45}
          image={require('../../assets/images/Report_images/SalaryLineGraph.png')}
          style={styles.Incomecategory}
          styleamount={styles.IncomeAmountColor}
          transactionType="Income"
        />
        <Category
          color=""
          category="Passive Income"
          amount={700}
          image={require('../../assets/images/Report_images/PassiveIncome.png')}
          style={styles.IncomeCategory2}
          styleamount={styles.IncomeAmountColor}
          transactionType="Income"
        />
      </View>
    </>
  );
  const financialText = `$${isExpenseSelected ? 30000000 : 50000000}`;

  return (
    <View style={styles.MainContainer}>
      <CustomHeader
        title="Financial Reports"
        style={{paddingHorizontal: 20, color: 'black'}}
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Image
              source={require('../../assets/images/Report_images/arrow-down.png')}
              style={styles.filterImage}
            />
            <Text style={styles.filterButtonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.burgerIcon}>
            <Image
              source={require('../../assets/images/Report_images/graphicon.png')}
              style={styles.filterImage2}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.financialContainer}>
          {isExpenseSelected ? (
            <Image
              source={require('../../assets/images/Report_images/Graph-Expense.png')}
              style={styles.financialImage}
            />
          ) : (
            <Image
              source={require('../../assets/images/Report_images/Graph-Income.png')}
              style={styles.financialImage}
            />
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
              <Image
                source={require('../../assets/images/Report_images/arrow-down.png')}
                style={styles.bottomImage}
              />
              <Text style={styles.bottomButtonText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttomIcon}>
              <Image
                source={require('../../assets/images/Report_images/Button-Icon.png')}
                style={styles.categorybtn}
              />
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
  amountColor1: {color: 'red'},
  BarGraphContainer: {
    paddingVertical: 20,
  },
  Incomecategory: {backgroundColor: '#00A86B'},
  IncomeCategory2: {backgroundColor: 'black'},
  IncomeAmountColor: {color: '#00A86B'},
});
