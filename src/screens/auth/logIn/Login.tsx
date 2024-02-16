import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {useLogin} from './useLogin';
import {Image} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Login = () => {
  const {
    email,
    password,
    navigation,
    passwordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleGoogleSignup,
    handleLogIn,
    secureTextEntry,
    toggleSecureEntry,
    handleLogEmail,
    handleLogPassword,
  } = useLogin();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <KeyboardAvoidingView style={{alignItems: 'center'}}>
        <View style={styles.mainHeaderSection}>
          <View>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={handleLogEmail}
            />
            <View>
              <InputField
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={handleLogPassword}
              />
            </View>
            <View style={styles.loginbtn}>
              <Button name="Log In" onPress={handleLogIn} />
            </View>
            <TouchableOpacity
              style={styles.forgotContainer}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
              <Text style={styles.orText}>or</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGoogleSignup}>
              <View style={styles.content}>
                <Image
                  source={require('../../../assets/images/SignUpImages/GoogleIcon.png')}
                  style={styles.icon}
                />
                <Text style={styles.btnText}>Sign Up with Google</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.account}>
              <Text style={styles.accountText1}>
                Don't have an account yet?
              </Text>
              <TouchableOpacity
                style={styles.accountTouchable}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.accountBtn}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  mainHeaderSection: {
    paddingLeft: 0,
    marginTop: 100,
    width: 320,
  },
  account: {
    flexDirection: 'row',
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 19,
  },
  accountText1: {
    fontFamily: 'Inter-Medium',
  },
  accountTouchable: {},
  loginbtn: {
    marginTop: 40,
  },
  accountBtn: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Medium',
    marginStart: 5,
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
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    padding: 5,
    marginRight: 10,
  },
  btnText: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 17,
  },
  button: {
    height: 56,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 16,
    marginTop: 10,
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
});
