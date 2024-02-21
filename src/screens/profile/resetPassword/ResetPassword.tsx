import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';

const ResetPassword = () => {
  return (
    <ScrollView style={styles.MainContainer}>
      <View>
        <View style={styles.container}>
          <CustomHeader title={'Reset Password'} style={{}} />
          <View>
            <TextInput style={styles.textInput} placeholder="New Password" />
            <TextInput style={styles.textInput} placeholder="New Password" />
            <TextInput
              style={styles.textInput}
              placeholder="Retype New Password"
            />
          </View>
          <View style={styles.resetPasswordBtn}>
            <Button name={'Reset Password'} onPress={() => {}} />
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
    // height: '100%',
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
