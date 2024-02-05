import { Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import arrow from "../../../assets/images/SignUpImages/arrowleft.png"

const SignUp = () => {

  const [passwordVisible, setPasswordVisible] = useState(true)

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
          <View style={styles.headerArrowContainer1}><Image source={arrow} style={styles.headerArrow} /></View>
          <View style={styles.headerTitleContainer2}><Text style={styles.headerTitle}>SignUp</Text></View>
          <View style={styles.headerTitleContainer3}><Text ></Text></View>
        </View>

        <View >
          <View style={styles.inputContainer}>

            <TextInput
              style={styles.input}
              placeholder="Name"
              // value={name}
              // onChangeText={handleNameChange}
              placeholderTextColor="gray"
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              // value={email}
              // onChangeText={handleEmailChange}
              placeholderTextColor="gray"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={passwordVisible}
              // value={password}
              // onChangeText={handlePasswordChange}
              placeholderTextColor="gray"
            // right={
            //   <TextInput />
            // }
            />
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <Checkbox value={isChecked} onValueChange={handleCheckBoxToggle} /> */}

              </View>
            </View>

            <View style={styles.CheckboxContainer}>
              <View><Text style={styles.checkbox}>checkBox</Text></View>
              <View >
                <Text style={styles.CheckText}>By signing up, you agree to the Terms of Service and Privacy Policy</Text>
              </View>
            </View>
            <Button title='Go to Home' />
          </View>
        </View>
      </View>
    </>
  )
}

export default SignUp

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
  input: {
    width: 313,
    height: 56,
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    // color: '#000000',
    fontFamily: 'Inter-Regular',
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
  CheckboxContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    
    
  },
  CheckText: {
    color: 'black',
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    // textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: 'pink',
    
  },


})