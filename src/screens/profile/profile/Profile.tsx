import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useProfile from './useProfile';

interface ProfileHomeProps {
  navigation: any;
}

const ProfileHome: React.FC<ProfileHomeProps> = ({navigation}) => {
  const {handleLogout, userImageURL, name} = useProfile();

  return (
    <View>
      <View style={styles.profileHeader}>
        <View style={styles.UserProfile}>
          <View style={styles.ImageContainer}>
            {userImageURL ? (
              <Image style={styles.ProfileImage} source={{uri: userImageURL}} />
            ) : (
              <Image
                style={styles.ProfileImage}
                source={require('../../../assets/images/Profile/AvatarProfile.png')}
              />
            )}
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.usernameText}>Username</Text>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
          <Image source={require('../../../assets/images/Profile/Edit.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image
                style={styles.actionImage}
                source={require('../../../assets/images/Profile/Settings.png')}
              />
            </View>
            <View>
              <Text style={styles.actionText}>Setting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
            style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image
                style={styles.actionImage}
                source={require('../../../assets/images/Profile/ResetPassword.png')}
              />
            </View>
            <View>
              <Text style={styles.actionText}>Reset Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image
                style={styles.actionImage}
                source={require('../../../assets/images/Profile/LogOut.png')}
              />
            </View>
            <View>
              <Text style={styles.actionText}>Logout</Text>
            </View>
          </TouchableOpacity>
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
});
