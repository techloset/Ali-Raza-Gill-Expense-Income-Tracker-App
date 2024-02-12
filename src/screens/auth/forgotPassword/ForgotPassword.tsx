import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const ForgotPassword = (props: any) => {
  const [forgotEmail, setForgotEmail] = useState('');

  return (
    <View style={styles.forgotMainContainer}>
      <KeyboardAvoidingView>
        <View style={styles.forgotContainer}>
          <View style={styles.forgotTextContainer}>
            <Text style={styles.forgotText}>Don't worry.</Text>
            <Text style={styles.forgotText}>
              Enter your email and we'll send you a link to reset your password.
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              value={forgotEmail}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('addtodo')}>
            <View style={styles.senddEmailBtn}>
              <Button name="Send Email" onPress={() => {}} />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotMainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 69,
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
