import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {LoginProps} from '../../../types/types';
import {useSignUp} from '../signUp/useSingnUp';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';

const SignUp = () => {
  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    passwordVisible,
    isChecked,
    handleCheckBoxToggle,
    handleGoogleSignup,
    handleSignUp,
    navigation,
  } = useSignUp();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          marginTop: 70,
          marginBottom: 'auto',
        }}>
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
              <TouchableOpacity>
                <Button name="Sign Up" onPress={handleSignUp} />
              </TouchableOpacity>
            </View>
            <View style={styles.orContainer}>
              <Text style={styles.orText}>or</Text>
            </View>
            <View>
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
            </View>
            <View style={styles.account}>
              <Text style={styles.accountText1}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
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
