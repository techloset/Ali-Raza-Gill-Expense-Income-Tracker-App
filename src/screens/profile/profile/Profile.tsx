import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import useProfile from './useProfile';
import {
  Avatar,
  EditProfile,
  Logout,
  ResetPassword,
  Settings,
} from '../../../assets/constants/Constants';

interface ProfileHomeProps {
  navigation: any;
}

const ProfileHome: React.FC<ProfileHomeProps> = ({navigation}) => {
  const {
    handleLogout,
    userImageURL,
    name,
    confirmLogout,
    fileModalVisible,
    cancelLogout,
  } = useProfile();

  return (
    <View>
      <View style={styles.profileHeader}>
        <View style={styles.UserProfile}>
          <View style={styles.ImageContainer}>
            {userImageURL ? (
              <Image style={styles.ProfileImage} source={{uri: userImageURL}} />
            ) : (
              <Image style={styles.ProfileImage} source={Avatar} />
            )}
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.usernameText}>Username</Text>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
          <Image source={EditProfile} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImage} source={Settings} />
            </View>
            <View>
              <Text style={styles.actionText}>Setting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
            style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImage} source={ResetPassword} />
            </View>
            <View>
              <Text style={styles.actionText}>Reset Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImage} source={Logout} />
            </View>
            <View>
              <Text style={styles.actionText}>Logout</Text>
            </View>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={fileModalVisible}>
            <TouchableWithoutFeedback>
              <View style={styles.fileModalContainer}>
                <View style={styles.modalBackground} />
                <View style={styles.attachmentPopup}>
                  <View>
                    <Text style={styles.title}>LogOut?</Text>
                    <Text style={styles.text}>
                      Are you sure do you wanna logout?
                    </Text>

                    <View style={styles.btnContainer}>
                      <TouchableOpacity onPress={cancelLogout}>
                        <View style={styles.content}>
                          <Text style={styles.btnName}>No</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={confirmLogout}>
                        <View style={styles.content1}>
                          <Text style={styles.btnName}>Yes</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default ProfileHome;

const styles = StyleSheet.create({
  profileHeader: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UserProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#7F3DFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },
  usernameText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  nameText: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: 'black',
  },
  ProfileText: {
    marginLeft: 16,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
  },
  actionImage: {
    height: 52,
    width: 52,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 9,
    fontFamily: 'Inter-Medium',
    color: 'black',
  },
  actionImgContainer: {},
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
  },

  fileModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  attachmentPopup: {
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
  },
  container2: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    marginBottom: 30,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'lightgrey',
    height: 56,
    width: 140,
    padding: 10,
    borderRadius: 16,
  },
  content1: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 56,
    width: 140,
    backgroundColor: '#7F3DFF',
    padding: 10,
    borderRadius: 16,
  },
  btnName: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 5,
  },
});
