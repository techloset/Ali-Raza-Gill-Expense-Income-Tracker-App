import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputField from '../../../components/comman/InputField';
import Button from '../../../components/comman/Button';
import ButtonGoogle from '../../../components/comman/ButtonGoogle';
import {ScrollView} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {LoginProps} from '../../../types/Types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const SignUp = ({navigation}: LoginProps) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '577251364044-7kqqdtbio0420g24gburmmreheh8cadr.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignup = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };
  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
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
            <InputField
              placeholder="Name"
              onChangeText={text => setUserName(text)}
              value={userName}
            />
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <View>
              <InputField
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
              />
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
              <TouchableOpacity onPress={() => handleSignUp()}>
                <Button name="Sign Up" onPress={() => handleSignUp()} />
              </TouchableOpacity>
            </View>
            <View style={styles.orContainer}>
              <Text style={styles.orText}>or</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  handleGoogleSignup()
                    .then(gmail =>
                      ToastAndroid.show(
                        'User Signup Successfully' + '',
                        ToastAndroid.LONG,
                      ),
                    )
                    .catch(error =>
                      ToastAndroid.show(error.message, ToastAndroid.LONG),
                    )
                }>
                <Text>Google</Text>
              </TouchableOpacity>
              <ButtonGoogle
                icon={require('../../../assets/images/SignUpImages/GoogleIcon.png')}
                text="Sign Up with Google"
              />
            </View>
            <View style={styles.account}>
              <Text style={styles.accountText1}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login');
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
