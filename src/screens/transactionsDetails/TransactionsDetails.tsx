// import React,{useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
//   FlatList
// } from 'react-native';
// import useTransactionsDetail from './useTransactionsDetail';
// import moment from 'moment';

// //   import DetailPageHeader from '../../components/DetailsPageHeader';
// //   import AppButton from '../../components/AppButton';
// //   import {useRoute} from '@react-navigation/native';
// //   import useTransactionDetail from './useTransactionDetail';
// //   import {TransactionInterface} from '../../types/types';

// const TransactionsDetails = () => {
//   const {
//       activeButton,
//       handlePress,
//     submit,
//     expence,
//     totalExpense,
//     totalIncome,
//     accountBalance,
// } = useTransactionsDetail();
// const [isLoading, setIsLoading] = useState(false)
// const [isError, setIsError] = useState(false)
//   return (
//     <>
//        <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.filterButton}>
//           <Image source={require('../../assets/dropdown.png')} />
//           <Text style={styles.filterButtonText}>Month</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//         //   onPress={handleFilterModelShow}
//           style={styles.burgerIcon}>
//           <Image source={require('../../assets/burgerIcon.png')} />
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.alertContainer}>
//         <Text style={styles.alertContainerText}>See your financial report</Text>
//         <Image source={require('../../assets/arrowright.png')} />
//       </TouchableOpacity>
//       <View>
//         <Text style={styles.headingText}>Today</Text>
//       </View>
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : isError ? (
//         <Text>Error fetching transactions</Text>
//       ) : (
//         <FlatList
//           style={styles.flatList}
//           data={transactionsState}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//         <FlatList
//           style={styles.flatList}
//         //   data={transactions}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       )}
//       {showFilter && (
//         <Modal
//           style={styles.modelContainer}
//           animationType="slide"
//           transparent={true}
//           visible={true}
//       onRequestClose={() => {}/*setShowFilter(false)*/}>
//           <View style={styles.modelBackground}>
//             {/* <FilterTransactionPopup /> */}
//           </View>
//         </Modal>
//       )}
//     </View>
//     </>
//   );
// };

// export default TransactionsDetails;

// const styles = StyleSheet.create({
//     container: {
//     margin: 16,
//     flex: 1,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   filterButton: {
//     height: 40,
//     width: 96,
//     borderRadius: 20,
//     borderColor: 'whitesmoke',
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   filterButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   burgerIcon: {
//     height: 40,
//     width: 40,
//     borderRadius: 15,
//     borderColor: 'whitesmoke',
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   alertContainer: {
//     height: 54,
//     backgroundColor: '#EEE5FF',
//     borderRadius: 16,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     margin: 16,
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//     width: '100%',
//     alignSelf: 'center',
//   },
//   alertContainerText: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#7F3DFF',
//   },
//   headingText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'black',
//     marginBottom: 10,
//   },
//   modelContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modelBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   flatList: {},
// });
