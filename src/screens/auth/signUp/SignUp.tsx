import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';
import ButtonGoogle from '../../../components/comman/ButtonGoogle';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = (props: any) => {
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
    <ScrollView>
      <KeyboardAvoidingView
        style={{flex: 1, marginTop: 70, marginBottom: 'auto'}}>
        <View style={styles.mainHeaderSection}>
          <View>
            <InputField placeholder="Name" />
            <InputField placeholder="Email" keyboardType="email-address" />
            <View>
              <InputField placeholder="Password" secureTextEntry={true} />
            </View>

            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Checkbox value={isChecked} onValueChange={handleCheckBoxToggle} /> */}
              </View>
            </View>

            <View style={styles.CheckboxContainer}>
              <View>
                <Text style={styles.CheckText}>
                  By signing up, you agree to the{' '}
                  <Text style={styles.termsPrivacy}>
                    Terms of Service and Privacy Policy
                  </Text>
                </Text>
              </View>
            </View>
            <View>
              <Button name="Sign Up " />
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
            <View style={styles.account}>
              <Text style={styles.accountText1}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('login');
                }}>
                <Text style={styles.accountTouchable}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainHeaderSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  CheckText: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 20,
    fontFamily: 'Inter-Medium',
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
    width: 32,
    height: 32,
    tintColor: '#666',
  },
  termsPrivacy: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Medium',
    fontSize: 14,
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
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 19,
  },
  accountText1: {
    fontFamily: 'Inter-Medium',
  },
  accountTouchable: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Medium',
  },
});
