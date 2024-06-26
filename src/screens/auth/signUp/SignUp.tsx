import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {useSignUp} from '../signUp/useSingnUp';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import {CustomHeaderImgae, Eye} from '../../../assets/constants/Constants';

const SignUp = () => {
  const {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    isPasswordVisible,
    handleGoogleSignup,
    handleSignUp,
    navigation,
    togglePasswordVisibility,
  } = useSignUp();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <CustomHeader title="Sign Up" style={{color: 'black'}} />
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
              onChangeText={text => setDisplayName(text)}
              value={displayName}
              style={{}}
            />
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              value={email}
              style={{}}
            />
            <View style={styles.passwordContainer}>
              <InputField
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                onChangeText={text => setPassword(text)}
                value={password}
                style={{}}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Image
                  source={isPasswordVisible ? Eye : Eye}
                  style={styles.EyeIcon}
                />
              </TouchableOpacity>
            </View>

            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}></View>
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
    marginHorizontal: 12,
  },
  passwordContainer: {
    position: 'relative',
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
  CheckboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
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
    color: 'black',
    fontSize: 16,
  },
  accountTouchable: {
    color: '#7F3DFF',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
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
