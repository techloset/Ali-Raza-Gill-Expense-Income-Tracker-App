import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import useForgotPassword from './useForgotPassword';

const ForgotPassword = ({navigation}: any) => {
  const {email, setEmail, forgotPassword} = useForgotPassword({navigation});

  return (
    <>
      <CustomHeader title="Forgot Password" style={{}} />
      <View style={styles.forgotMainContainer}>
        <KeyboardAvoidingView>
          <View style={styles.forgotContainer}>
            <View style={styles.forgotTextContainer}>
              <Text style={styles.forgotText}>Don't worry.</Text>
              <Text style={styles.forgotText}>
                Enter your email and we'll send you a link to reset your
                password.
              </Text>
            </View>
            <View style={styles.emailContainer}>
              <InputField
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                style={{}}
                onChangeText={(text: string) => setEmail(text)}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.senddEmailBtn}>
                <Button name="Send Email" onPress={forgotPassword} />
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  forgotMainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 69,
    height: 70,
  },
  forgotContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginHorizontal: 16,
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
    height: 56,
    marginBottom: 32,
  },
  senddEmailBtn: {},
});

export default ForgotPassword;
