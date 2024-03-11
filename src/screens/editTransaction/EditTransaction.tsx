// // import {StyleSheet, Text, View} from 'react-native';
// // import React from 'react';

// // const EditTransaction = () => {
// //   return (
// //     <View>
// //       <Text>EditTransaction</Text>
// //     </View>
// //   );
// // };

// // export default EditTransaction;

// // const styles = StyleSheet.create({});

// import React, {useEffect, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Modal,
//   KeyboardAvoidingView,
// } from 'react-native';
// import DetailPageHeader from '../../components/DetailsPageHeader';
// import AppButton from '../../components/AppButton';
// import {useRoute} from '@react-navigation/native';
// import useTransactionDetail from './useTransactionDetail';
// import {TransactionInterface} from '../../types/types';
// import ConfirmAlert from '../../components/ConfirmAlert';
// import Alert from '../../components/Alert';
// import {styles} from './styles';

// const TransactionDetail: React.FC = () => {
//   const route = useRoute();

//   const {
//     id,
//     docId,
//     category,
//     description,
//     money,
//     transactionType,
//     imageUrl,
//     timestamp,
//     imageId,
//   } = route.params as TransactionInterface;

//   const transactionData: TransactionInterface = {
//     id,
//     docId,
//     transactionType,
//     category,
//     description,
//     money,
//     imageUrl,
//     timestamp,
//     imageId,
//   };

//   const {
//     handleDelete,
//     handleEdit,
//     editableCategory,
//     setEditableCategory,
//     editableTransactionType,
//     setEditableTransactionType,
//     editableDescription,
//     setEditableDescription,
//     editableMoney,
//     setEditableMoney,
//     typeModalVisible,
//     setTypeModalVisible,
//     categoryModalVisible,
//     setCategoryModalVisible,
//     transactionTypes,
//     handleCancelDelete,
//     confirmAlert,
//     setConfirmAlert,
//     alert,
//     setAlert,
//     alertMessage,
//   } = useTransactionDetail(transactionData);

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={{flexGrow: 1}}>
//         <View
//           style={[
//             styles.UpperContainer,
//             {
//               backgroundColor:
//                 transactionType === 'Expense' ? '#FD3C4A' : '#00A86B',
//             },
//           ]}>
//           <DetailPageHeader onPress={() => setConfirmAlert(true)} />
//           <View style={styles.UpperContainerText}>
//             <TextInput
//               onChangeText={setEditableMoney}
//               editable={true}
//               style={styles.uppercontainerCashText}>
//               {money}
//             </TextInput>
//             <TextInput style={styles.uppercontainerHeadingText}>
//               {description.split(' ').slice(0, 5).join(' ')}
//             </TextInput>
//             <Text style={styles.upperContainerDateText}>{timestamp}</Text>
//           </View>
//           <View style={styles.CategoryContainer}>
//             <View>
//               <Text>Type</Text>
//               <Text>{transactionType}</Text>
//             </View>
//             <View>
//               <Text>Category</Text>
//               <Text>{category}</Text>
//             </View>
//             <View>
//               <Text>Wallet</Text>
//               <Text>Wallet</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.lowerContainer}>
//           <Text style={styles.lowerContainerHeading}>Description</Text>
//           <TextInput editable={true} onChangeText={setEditableDescription}>
//             {description}
//           </TextInput>
//           <Text style={styles.lowerContainerHeading}>Attachment</Text>
//           <View style={styles.preview}>
//             {imageUrl && (
//               <Image style={styles.image} source={{uri: `${imageUrl}`}} />
//             )}
//           </View>
//           <View style={styles.editButton}>
//             <AppButton onPress={handleEdit} title="Edit" />
//           </View>
//         </View>
//       </ScrollView>
//       {/* Type Modal */}
//       <Modal
//         visible={typeModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setTypeModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {transactionTypes.map((type, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   setEditableTransactionType(type);
//                   setTypeModalVisible(false);
//                 }}>
//                 <Text>{type}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </Modal>
//       {/* Category Modal */}
//       <Modal
//         visible={categoryModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setCategoryModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {/* Replace with your category options */}
//             <TouchableOpacity
//               onPress={() => {
//                 setEditableCategory('Category 1');
//                 setCategoryModalVisible(false);
//               }}>
//               <Text>Category 1</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => {
//                 setEditableCategory('Category 2');
//                 setCategoryModalVisible(false);
//               }}>
//               <Text>Category 2</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => {
//                 setEditableCategory('Category 3');
//                 setCategoryModalVisible(false);
//               }}>
//               <Text>Category 3</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <ConfirmAlert
//         visible={confirmAlert}
//         title={'Remove this Transaction'}
//         message={'Are you sure you want to remove this transaction'}
//         onYesPress={() => handleDelete(transactionType, docId)}
//         onNoPress={handleCancelDelete}
//       />
//       <Alert
//         message={alertMessage}
//         visible={alert}
//         onPress={() => setAlert(false)}
//       />
//     </View>
//   );
// };

// export default TransactionDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: 116,
//     width: 116,
//   },
//   UpperContainer: {
//     backgroundColor: '#FD3C4A',
//     padding: 16,
//     flex: 2,
//     borderBottomEndRadius: 16,
//     borderBottomStartRadius: 16,
//     position: 'relative',
//   },
//   UpperContainerText: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   uppercontainerCashText: {
//     fontSize: 48,
//     fontWeight: '700',
//     color: 'white',
//   },
//   uppercontainerHeadingText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: 'white',
//     marginVertical: 8,
//   },
//   upperContainerDateText: {
//     fontSize: 13,
//     fontWeight: '500',
//     color: 'white',
//   },
//   lowerContainer: {
//     flex: 4,
//     padding: 16,
//     position: 'relative',
//   },
//   CategoryContainer: {
//     borderWidth: 1,
//     borderColor: '#91919F',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignContent: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 16,
//     backgroundColor: 'white',
//     marginHorizontal: 16,
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 16,
//     position: 'absolute',
//     top: 270,
//   },
//   preview: {
//     width: '100%',
//     height: 116,
//     borderRadius: 16,
//     backgroundColor: '#7F3DFF',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   lowerContainerHeading: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginVertical: 8,
//     color: '#91919F',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     maxHeight: '80%',
//   },
//   editButton: {
//     position: 'absolute',
//     bottom: 16,
//     width: '100%',
//     marginHorizontal: 16,
//   },
// });
