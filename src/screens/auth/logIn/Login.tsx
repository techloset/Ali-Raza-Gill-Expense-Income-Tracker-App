import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';
import ButtonGoogle from '../../../components/comman/ButtonGoogle';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };
  const handleSignUp = () => {
    // Add your sign-up logic here
    // You can check the value of isChecked to determine if the checkbox is checked or not
  };
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, margin: 150}}>
      <View style={styles.mainHeaderSection}>
        <View>
          <InputField placeholder="Email" keyboardType="email-address" />
          <View>
            <InputField placeholder="Password" secureTextEntry={true} />
          </View>
          <View style={styles.loginbtn}>
            <Button name="Log In " />
          </View>
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </View>
          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>
          <View>
            <ButtonGoogle
              icon={require('../../../assets/images/SignUpImages/GoogleIcon.png')}
              text="Sign Up with Google"
            />
          </View>
          <Text style={styles.account}>
            Don't have an account yet?{' '}
            <Text style={styles.accountBtn}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainHeaderSection: {
    width: 320,
  },
  account: {
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 19,
  },
  loginbtn: {
    marginTop: 40,
  },
  orContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  orText: {
    height: 18,
    width: 15,
    fontFamily: 'Inter-Bold',
  },
  accountBtn: {
    color: '#7F3DFF',
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
    marginBottom: 10,
  },
  forgotPass: {
    fontFamily: 'Inter-Bold',
    color: '#7F3DFF',
    paddingRight: 8,
  },
});
