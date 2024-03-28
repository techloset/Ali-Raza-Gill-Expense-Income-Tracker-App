import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {useLogin} from './useLogin';
import {Image} from 'react-native';
import {Eye} from '../../../assets/constants/Constants';

const Login = () => {
  const {
    email,
    password,
    navigation,
    isChecked,
    handleCheckBoxToggle,
    handleGoogleSignup,
    handleLogIn,
    secureTextEntry,
    handleLogEmail,
    handleLogPassword,
    togglePasswordVisibility,
    isPasswordVisible,
    isFocused,
    handleFocus,
    handleBlur,
  } = useLogin();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <ScrollView style={{backgroundColor: 'white'}}>
        <KeyboardAvoidingView style={{alignItems: 'center'}}>
          <View style={styles.mainHeaderSection}>
            <View>
              <InputField
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={handleLogEmail}
                style={{}}
              />
              <View style={styles.passwordContainer}>
                <InputField
                  placeholder="Password"
                  secureTextEntry={!isPasswordVisible}
                  value={password}
                  onChangeText={handleLogPassword}
                  style={{}}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image
                    source={isPasswordVisible ? Eye : Eye}
                    style={styles.EyeIcon}
                  />
                </TouchableOpacity>
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
    </>
  );
};
export default Login;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 65,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  headerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: 'black',
  },
  mainHeaderSection: {
    paddingLeft: 0,
    marginTop: 72,
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
    color: 'black',
    fontSize: 16,
  },
  accountTouchable: {},
  loginbtn: {
    marginTop: 40,
  },
  accountBtn: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Medium',
    marginStart: 5,
    fontSize: 16,
  },
  orContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  orText: {
    height: 18,
    width: 15,
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: 'gray',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  EyeIcon: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 5,
    width: 40,
    height: 40,
    borderRadius: 10,
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
