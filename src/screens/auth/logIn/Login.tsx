import {
  KeyboardAvoidingView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';
import ButtonGoogle from '../../../components/comman/ButtonGoogle';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import {AuthRoutes} from '../../../navigation/Navigation';

interface LoginProps {
  navigation: StackNavigationProp<AuthRoutes, 'SignUp'>;
}
const Login = (props: any) => {
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
    <ScrollView style={{backgroundColor: 'white'}}>
      <KeyboardAvoidingView style={{alignItems: 'center'}}>
        <View style={styles.mainHeaderSection}>
          <View>
            <InputField placeholder="Email" keyboardType="email-address" />
            <View>
              <InputField placeholder="Password" secureTextEntry={true} />
            </View>
            <View style={styles.loginbtn}>
              <Button name="Log In " />
            </View>
            <TouchableOpacity
              style={styles.forgotContainer}
              onPress={() => {
                props.navigation.navigate('forgotPassword');
              }}>
              <Text style={styles.forgotPass}>Forgot Password?</Text>
            </TouchableOpacity>
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
              Don't have an account yet?
              <TouchableOpacity
                style={styles.accountTouchable}
                onPress={() => {
                  props.navigation.navigate('signup');
                }}>
                <Text style={styles.accountBtn}>Sign Up</Text>
              </TouchableOpacity>
            </Text>
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
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 19,
  },
  accountTouchable: {},
  loginbtn: {
    marginTop: 40,
  },
  accountBtn: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Bold',
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
});
