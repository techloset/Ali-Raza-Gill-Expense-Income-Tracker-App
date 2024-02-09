import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';

const ForgotPassword = () => {
  return (
    <KeyboardAvoidingView style={{paddingVertical: 100}}>
      <View style={styles.forgotMainContainer}>
        <View style={styles.forgotTextContainer}>
          <Text style={styles.forgotText}>Don't worry.</Text>
          <Text style={styles.forgotText}>
            Enter your email and we'll send you a link to reset your password.
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <InputField placeholder="Email" keyboardType="email-address" />
        </View>
        <Button name="Send Email" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgotMainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  forgotTextContainer: {
    marginBottom: 46,
  },
  forgotText: {
    color: 'black',
    fontFamily: 'Inter-Bold',
    fontSize: 24,
  },
  emailContainer: {
    marginBottom: 32,
  },
});
export default ForgotPassword;
