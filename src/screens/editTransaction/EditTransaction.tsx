import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import useEditTransaction from './useEditTransaction';
import {TransactionInterface} from '../../types/types';
import Button from '../../components/Button';
import {useRoute} from '@react-navigation/native';
import CustomHeader from '../../components/CustomHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface EditTransactionProps {
  transactionTypes: string[];
}
interface EditTransactionProps {
  category: string;
  discription: string;
  amount: number;
  time: string;
  imageUrl: any;
  transType: string;
  _id: string;
  documentId: string;
  wallet: string;
  addExpenseTime: string;
  walletId: string;
  docId: string;
}

const EditTransaction: React.FC<EditTransactionProps> = () => {
  const route = useRoute();
  const {documentId, category, discription, amount, time, imageUrl, transType} =
    route.params as TransactionInterface;

  const {
    handleEdit,
    editableCategory,
    setEditableCategory,
    editableDiscription,
    setEditableDiscription,
    editableMoney,
    setEditableMoney,
    handleDelete,
    loading,
  } = useEditTransaction(documentId, category, discription, amount);

  useEffect(() => {
    setEditableCategory(category);
    setEditableDiscription(discription);
    setEditableMoney(amount);
  }, [documentId, category, discription, amount]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={[
            styles.UpperContainer,
            {
              backgroundColor: transType === 'Expense' ? '#FD3C4A' : '#00A86B',
            },
          ]}>
          <CustomHeader
            title="Detail Transaction"
            style={{
              backgroundColor: transType === 'Expense' ? '#FD3C4A' : '#00A86B',
            }}
          />
          <TouchableOpacity onPress={handleDelete}>
            <Image
              source={require('../../assets/images/TransactionImages/DeleteIcon.png')}
              style={styles.DeleteIcon}
            />
          </TouchableOpacity>
          <View style={styles.UpperContainerText}>
            <TextInput
              onChangeText={setEditableMoney as any}
              editable={true}
              style={styles.uppercontainerCashText}
              value={editableMoney as any}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.uppercontainerHeadingText}
              value={(editableDiscription ?? '')
                .split('')
                .slice(0, 25)
                .join('')}
            />
            <Text style={styles.upperContainerDateText}>{time}</Text>
          </View>
          <View style={styles.CategoryContainer}>
            <View>
              <Text style={styles.CategoryContainerText}>Type</Text>
              <Text style={styles.CategoryContainerText1}>{transType}</Text>
            </View>
            <View>
              <Text style={styles.CategoryContainerText}>Category</Text>
              <Text style={styles.CategoryContainerText1}>
                {editableCategory}
              </Text>
            </View>
            <View>
              <Text style={styles.CategoryContainerText}>Wallet</Text>
              <Text style={styles.CategoryContainerText1}>Cash</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.lowerContainerHeading}>Description</Text>
          <TextInput
            editable={true}
            onChangeText={setEditableDiscription}
            value={editableDiscription}
            style={styles.lowerContainerDescription}
          />
          <Text style={styles.lowerContainerHeading}>Attachment</Text>
          <View style={styles.preview}>
            {imageUrl && (
              <Image style={styles.image} source={{uri: imageUrl}} />
            )}
          </View>
          <View style={styles.editButton}>
            <Button name="Edit" onPress={handleEdit} />
            {loading && (
              <ActivityIndicator
                animating={loading}
                color="white"
                size="large"
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 70,
                  bottom: 0,
                  left: 0,
                }}
              />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditTransaction;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 116,
    width: '100%',
    borderRadius: 10,
    objectFit: 'contain',
  },
  UpperContainer: {
    backgroundColor: '#FD3C4A',
    padding: 16,
    flex: 2,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    position: 'relative',
  },
  UpperContainerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uppercontainerCashText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
  },
  uppercontainerHeadingText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginVertical: 0,
  },
  upperContainerDateText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginBottom: 28,
  },
  lowerContainer: {
    marginTop: 16,
    paddingTop: 32,

    padding: 16,
    position: 'relative',
  },
  CategoryContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'white',
    marginHorizontal: 16,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 16,
    position: 'absolute',
    top: 240,
  },
  CategoryContainerText: {
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  CategoryContainerText1: {
    fontFamily: 'Inter-SemiBold',
    color: 'black',
    marginTop: 4,
  },
  preview: {
    width: '100%',
    height: 116,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  lowerContainerHeading: {
    fontSize: 16,
    marginVertical: 8,
    color: '#91919F',
    fontFamily: 'Inter-Bold',
    marginHorizontal: 8,
    width: '100%',
    height: 'auto',
  },
  lowerContainerDescription: {
    fontFamily: 'Inter-SemiBold',
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 16,
    padding: 16,
    width: '100%',
  },
  editButton: {
    marginTop: 12,
    width: '100%',
  },
  DeleteIcon: {
    position: 'absolute',
    top: -45,
    left: 290,
    height: 32,
    width: 32,
  },
});
