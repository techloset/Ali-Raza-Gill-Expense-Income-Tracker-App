import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from 'react-native';

import InputField from '../../../components/InputField';
import CustomHeader from '../../../components/CustomHeader';
import {useAddExpense} from './useAddExpense';
import React from 'react';
import Button from '../../../components/Button';
import AttachmentInputPopUp from '../../../components/InputPopup';
export default function AddExpense() {
  const {
    toggleFileModal,
    handleOutsidePress,
    handleAmount,
    selectCategory,
    modalVisible,
    setModalVisible,
    fileModalVisible,
    setFileModalVisible,
    addExpens,
    category,
    setCategory,
    expenseName,
    setExpenseName,
    amount,
    setAmount,
    image,
    setImage,
    transType,
    setTransType,
    categories,
  } = useAddExpense();
  return (
    <>
      <CustomHeader
        title={transType === 'Expense' ? 'Expense' : 'Income'}
        style={[
          styles.color,
          {backgroundColor: transType === 'Expense' ? 'red' : 'green'},
        ]}
      />
      <ScrollView
        style={[
          styles.container,
          {backgroundColor: transType === 'Expense' ? 'red' : 'green'},
        ]}>
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={[styles.container]}>
            <View style={styles.navigationContainer}></View>
            <View style={styles.toggleButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  transType === 'Expense' && styles.activeButton,
                ]}
                onPress={() => setTransType('Expense')}>
                <Text style={styles.toggleButtonText}>Add Expense</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  transType === 'Income' && styles.activeButton,
                ]}
                onPress={() => setTransType('Income')}>
                <Text style={styles.toggleButtonText}>Add Income</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.displayContainer}>
              <Text style={styles.displayContainerHeading}>How Much ?</Text>
              <InputField
                value={amount}
                placeholder="$0"
                onChangeText={handleAmount}
                keyboardType="numeric"
                style={styles.amountContainer}
              />
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
                  <Text style={{fontFamily: 'Inter-Medium'}}>
                    Add Attachment
                  </Text>

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
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <Button
                  name="Continue"
                  onPress={() => {
                    addExpens();
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
  color: {
    color: 'white',
  },
  displayContainer: {
    paddingTop: '10%',
    paddingHorizontal: 25,
    paddingBottom: '16%',
  },
  displayContainerHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FCFCFC',
    fontFamily: 'Inter-Bold',
  },
  amountContainer: {
    fontSize: 45,
    alignContent: 'center',
    justifyContent: 'center',
    color: '#FCFCFC',
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: 77,
    fontFamily: 'Inter-Bold',
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

  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: 'grey',
  },
  activeButton: {
    backgroundColor: '#7F3DFF',
  },
  toggleButtonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
  },
  backgroundColor: {},
});
