import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomHeader from '../../../components/CustomHeader';
import Button from '../../../components/Button';

import {Avatar, EditIcon} from '../../../assets/constants/Constants';
import useUpdateProfile from './useUpdateProfile';

const UpdateProfile: React.FC = () => {
  const {
    name,
    email,
    imageURI,
    handleSelectImage,
    handleUpdateProfile,
    setEmail,
    setName,
  } = useUpdateProfile();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.main}>
        <View style={styles.container}>
          <CustomHeader title="Update Profile" style={{}} />
          <View style={styles.profileView}>
            <TouchableOpacity onPress={handleSelectImage}>
              <View style={styles.imageContainer}>
                {imageURI ? (
                  <Image style={styles.profileImage} source={{uri: imageURI}} />
                ) : (
                  <Image style={styles.profileImage} source={Avatar} />
                )}
              </View>
              <View style={styles.editIconContainer}>
                <Image style={styles.editIcon} source={EditIcon} />
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              editable={false}
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>

          <View style={styles.updateProfileBtn}>
            <Button name="Update Profile" onPress={handleUpdateProfile} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  main: {
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
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderColor: '#7F3DFF',
    borderWidth: 3,
  },
  editIconContainer: {
    backgroundColor: 'white',
    width: 36,
    height: 36,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },
  inputLabel: {
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
    color: 'black',
  },
  updateProfileBtn: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
  },
});
