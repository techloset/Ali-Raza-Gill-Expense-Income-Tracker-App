import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import CustomHeader from '../../../components/CustomHeader';
import Button from '../../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';

const UpdateProfile = () => {
  //   const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  return (
    <ScrollView>
      <View style={styles.Main}>
        <View style={styles.container}>
          <CustomHeader title="Update Profile" style={{}} />

          <View style={styles.profileView}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.userImage}
                source={require('../../../assets/images/Profile/ProfilePic.png')}
              />
            </View>
            <View style={styles.editButtonContainer}>
              <View style={styles.editButton}>
                <Image
                  source={require('../../../assets/images/Profile/Edit.png')}
                  style={styles.editIcon}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.inputLable}>Email</Text>
            <TextInput style={styles.textInput} placeholder="Email" />
            <Text style={styles.inputLable}>Name</Text>
            <TextInput style={styles.textInput} placeholder="Name" />
          </View>
          <View style={styles.UpdateProfileBtn}>
            <Button name="Update Profile" onPress={() => {}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'white',
    flex: 1,
    height: 712,
  },
  container: {
    margin: 16,
    position: 'relative',
    height: '100%',
  },
  profileView: {
    marginTop: 26,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: 'red',
    borderColor: '#AD00FF',
    borderWidth: 2,
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  editButtonContainer: {
    paddingLeft: 100,
    position: 'absolute',
    bottom: 5,
    left: 80,
  },
  editButton: {
    height: 36,
    width: 36,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  inputLable: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 24,
    fontFamily: 'Inter-SemiBold',
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    paddingHorizontal: 10,
    fontFamily: 'Inter-Medium',
  },
  UpdateProfileBtn: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
});
