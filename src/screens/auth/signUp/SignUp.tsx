import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import arrow from '../../../assets/images/SignUpImages/arrowleft.png';
import InputField from '../../../components/comman/InputField';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };
  const handleSignUp = () => {
    // Add your sign-up logic here
    // You can check the value of isChecked to determine if the checkbox is checked or not
  };

  return (
    <>
      <View style={styles.mainHeaderSection}>
        <View style={styles.headerSectionMain}>
          <View style={styles.headerArrowContainer1}>
            <Image source={arrow} style={styles.headerArrow} />
          </View>
          <View style={styles.headerTitleContainer2}>
            <Text style={styles.headerTitle}>SignUp</Text>
          </View>
          <View style={styles.headerTitleContainer3}>
            <Text></Text>
          </View>
        </View>

        <View>
          <InputField placeholder='Name' />
          <InputField placeholder='Email'
            keyboardType='email-address' />
          <InputField placeholder='Password'
            secureTextEntry={true} />

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <Checkbox value={isChecked} onValueChange={handleCheckBoxToggle} /> */}
            </View>
          </View>

          <View style={styles.CheckboxContainer}>
            <View>
              <Text style={styles.CheckText}>
                By signing up, you agree to the <Text style={styles.termsPrivacy}>Terms of Service and Privacy
                Policy</Text>
              </Text>
            </View>
          </View>
          <Button title="Go to Home" />
        </View>
      </View>

    </>
  )
};

export default SignUp;

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
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: 'black',
  },
  inputContainer: {
    marginTop: 80,
  },
  headerSectionMain: {
    width: 375,
    height: 64,
    // justifyContent: 'center',
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
    marginTop:5,
    marginBottom:20,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'pink',
  },
  termsPrivacy:{
    color: '#7F3DFF',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});
