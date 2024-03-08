import React from 'react';
import {ScrollView, StyleSheet, TextInput, View, Alert} from 'react-native';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import useResetPassword from './useResetPassword';

const ResetPassword = () => {
  const {
    setCurrentPass,
    currentPass,
    newPass,
    setNewPass,
    confirmNewPass,
    setConfirmNewPass,
    handleResetPassword,
  } = useResetPassword();
  return (
    <ScrollView style={styles.MainContainer}>
      <View>
        <CustomHeader title={'Reset Password'} style={{color: 'black'}} />
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Old Password"
              secureTextEntry={true}
              value={currentPass}
              onChangeText={text => setCurrentPass(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="New Password"
              secureTextEntry={true}
              value={newPass}
              onChangeText={text => setNewPass(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Retype New Password"
              secureTextEntry={true}
              value={confirmNewPass}
              onChangeText={text => setConfirmNewPass(text)}
            />
          </View>
          <View style={styles.resetPasswordBtn}>
            <Button name={'Reset Password'} onPress={handleResetPassword} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',

    backgroundColor: 'white',
  },
  container: {
    height: 650,
    width: '90%',
    alignSelf: 'center',
    margin: 16,
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    fontFamily: 'Inter-Regular',
    borderColor: '#D3D3D3',
    paddingHorizontal: 10,
    marginTop: 24,
  },
  resetPasswordBtn: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});
