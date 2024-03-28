import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import useResetPassword from './useResetPassword';
import {CustomHeaderImgae, Eye} from '../../../assets/constants/Constants';
import image1 from '../../../assets/images/HomeScreenImages/Avatar.png';
import {Image} from 'react-native';

const ResetPassword = () => {
  const {
    setCurrentPass,
    currentPass,
    newPass,
    setNewPass,
    confirmNewPass,
    setConfirmNewPass,
    handleResetPassword,
  } = useResetPassword();
  return (
    <ScrollView style={styles.MainContainer}>
      <View>
        <CustomHeader
          title={'Reset Password'}
          style={{color: 'black', marginHorizontal: 15}}
        />
        <View style={styles.container}>
          <View>
            <View>
              <TextInput
                style={styles.textInput}
                placeholder="Old Password"
                placeholderTextColor={'black'}
                secureTextEntry={false}
                value={currentPass}
                selectionColor="black"
                onChangeText={text => setCurrentPass(text)}
              />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="New Password"
              placeholderTextColor={'black'}
              secureTextEntry={false}
              value={newPass}
              selectionColor="black"
              onChangeText={text => setNewPass(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Retype New Password"
              placeholderTextColor={'black'}
              secureTextEntry={false}
              value={confirmNewPass}
              selectionColor="black"
              onChangeText={text => setConfirmNewPass(text)}
            />
          </View>

          <View style={styles.resetPasswordBtn}>
            <Button name={'Reset Password'} onPress={handleResetPassword} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',

    backgroundColor: 'white',
  },
  container: {
    height: 650,
    width: '90%',
    alignSelf: 'center',
    margin: 16,
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    fontFamily: 'Inter-Regular',
    borderColor: '#D3D3D3',
    paddingHorizontal: 10,
    marginTop: 24,
    color: 'black',
  },
  resetPasswordBtn: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  EyeIcon: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    zIndex: 5,
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  showPassword: {
    marginTop: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  showPasswordText: {
    fontFamily: 'Inter-SemiBold',
    color: '#000',
  },
});
