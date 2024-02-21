import React from 'react';
import {ScrollView, StyleSheet, TextInput, View, Alert} from 'react-native';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import useResetPassword from './useResetPassword';

const ResetPassword = () => {
  const {
    setCurrentPass,
    currentPass,
    newPasss,
    setNewPass,
    confirmNewPass,
    setConfirmNewPass,
    handleResetPassword,
  } = useResetPassword();
  return (
    <ScrollView style={styles.MainContainer}>
      <View>
        <View style={styles.container}>
          <CustomHeader title={'Reset Password'} style={{}} />
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
              value={newPasss}
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
    height: 712,
    margin: 16,
    position: 'relative',
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
    bottom: 60,
    width: '100%',
  },
});
