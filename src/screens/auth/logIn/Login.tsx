import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import arrow from '../../../assets/images/SignUpImages/arrowleft.png';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';
import ButtonGoogle from '../../../components/comman/ButtonGoogle';
import {AuthRoutes} from '../../../navigation/Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenPropT = NativeStackScreenProps<AuthRoutes, 'Login'>;

const Login = ({navigation}: ScreenPropT) => {
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

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <View style={styles.mainHeaderSection}>
        <View>
          <InputField placeholder="Email" keyboardType="email-address" />
          <View>
            <InputField placeholder="Password" secureTextEntry={true} />
          </View>
          <View>
            <Button name="Login" />
            <Text>
              Didn't have an account?{' '}
              <Text style={styles.termsPrivacy}>
                <Text
                  style={styles.termsPrivacy}
                  onPress={() => {
                    handleNavigateToSignUp;
                  }}>
                  Sign Up
                </Text>
              </Text>
            </Text>
          </View>
          <View style={{alignItems: 'center', paddingVertical: 12}}>
            <Text>or</Text>
          </View>
          <View>
            <ButtonGoogle
              icon={require('../../../assets/images/SignUpImages/GoogleIcon.png')}
              text="Login with Google"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainHeaderSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer2: {
    color: 'black',
    alignItems: 'center',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
  headerTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: 'black',
  },

  headerSectionMain: {
    width: 345,
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
    margin: 10,
    padding: 16,
  },
  headerArrowContainer1: {
    // backgroundColor: 'red',
    height: 32,
    width: 32,
    paddingHorizontal: 4,
    paddingVertical: 7,
    marginBottom: -10,
    justifyContent: 'center',
  },
  headerArrow: {
    width: 24,
    height: 16,
    flexShrink: 0,
    // marginLeft: -120
  },
  headerTitleContainer3: {
    height: 32,
    width: 32,
    // backgroundColor: 'pink'
  },
  // CheckboxTextHeader:{
  //   // color:'black',
  // },
  CheckboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  CheckText: {
    color: 'black',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'pink',
  },
  eyeIconContainer: {
    padding: 8,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#666',
  },
  termsPrivacy: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
