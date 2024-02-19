import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../components/CustomHeader';
import AppButton from '../../../components/Button';
import AttachmentInputPopUp from '../../../components/InputPopup';
import Shopping from '../../../assets/images/HomeScreenImages/Shopping.png';
import Subscription from '../../../assets/images/HomeScreenImages/Subscription.png';
import Food from '../../../assets/images/HomeScreenImages/Food.png';
import Salary from '../../../assets/images/HomeScreenImages/Salary.png';
import Transpotation from '../../../assets/images/HomeScreenImages/Transpotation.png';
interface Category {
  id: number;
  name: string;
  image: any;
}
const categories: Category[] = [
  {id: 1, name: 'Shopping', image: Shopping},
  {id: 2, name: 'Subscription', image: Subscription},
  {id: 3, name: 'Food', image: Food},
  {id: 4, name: 'Salary', image: Salary},
  {id: 5, name: 'Transportation', image: Transpotation},
];

interface CreateTransactionProps {
  navigation?: any;
  backgroundColor?: string;
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({
  navigation,
  backgroundColor,
}) => {
  const [category, setCategory] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fileModalVisible, setFileModalVisible] = useState(false);

  const selectCategory = (categoryName: string) => {
    setCategory(categoryName);
    setModalVisible(false);
  };

  const toggleFileModal = () => {
    setFileModalVisible(!fileModalVisible);
  };

  const handleOutsidePress = () => {
    setFileModalVisible(false);
  };

  return (
    <>
      <CustomHeader
        title="Income Expense"
        style={{
          backgroundColor: 'transparent',
          paddingTop: 20,
          paddingRight: 20,
        }}
      />
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
          <View style={styles.navigationContainer}></View>
          <View style={styles.displayContainer}>
            <Text style={styles.displayContainerHeading}>How Much ?</Text>
            <Text style={styles.displayContainerCash}>$0</Text>
          </View>
          <View
            style={[styles.inputContainer, {flex: fileModalVisible ? 5 : 2}]}>
            <View>
              <TouchableOpacity
                style={styles.textInput}
                onPress={() => setModalVisible(true)}>
                <Text>{category || 'Select Category'}</Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.modalContainer}>
                  <FlatList
                    data={categories}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        style={styles.categoryItem}
                        onPress={() => selectCategory(item.name)}>
                        <Image
                          source={item.image}
                          style={styles.categoryImage}
                        />
                        <Text style={styles.categoryText}>{item.name}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Modal>
              <TextInput
                style={styles.textInput}
                placeholder="Description"
                value={expenseName}
                onChangeText={text => setExpenseName(text)}
              />
              <TouchableOpacity
                style={styles.fileInput}
                onPress={toggleFileModal}>
                <Image
                  source={require('../../../assets/images/InputPopup/Vector.png')}
                />
                <Text style={{fontFamily: 'Inter-Medium'}}>Add Attachment</Text>
              </TouchableOpacity>
              <Modal
                animationType="fade"
                transparent={true}
                visible={fileModalVisible}>
                <TouchableWithoutFeedback onPress={handleOutsidePress}>
                  <View style={styles.fileModalContainer}>
                    <View style={styles.modalBackground} />
                    <View style={styles.attachmentPopup}>
                      <AttachmentInputPopUp />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
            <View style={styles.button}>
              <AppButton name="Continue" onPress={() => {}} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CreateTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displayContainer: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: 25,
  },
  displayContainerHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  displayContainerCash: {
    fontSize: 64,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  navigationContainer: {
    padding: 16,
  },
  textInput: {
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 16,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter-Medium',
  },
  fileInput: {
    flexDirection: 'row',
    gap: 10,
    height: 56,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  button: {
    margin: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  categoryItem: {
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Inter-Medium',
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  categoryText: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
  },
  fileModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  attachmentPopup: {
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
  },
});
