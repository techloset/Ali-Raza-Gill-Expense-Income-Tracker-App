import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  MainContainer1: {
    backgroundColor: 'white',
  },
  MainContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 23,
  },
  TopNavigationContainer: {
    marginTop: 12,
  },
  TopNavigation1: {
    width: '100%',
    height: 64,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  TopNavigation2: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  TopNavigation2Image: {
    width: 24,
    height: 24,
  },
  TopNavigation2Text: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'black',
  },
  TopNavigation3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountBalanceTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontWeight: '500',
  },
  accountBalanceText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#91919F',
  },
  accountBalanceContainer: {
    alignItems: 'center',
    paddingHorizontal: 23,
    marginHorizontal: 23,
  },
  accountBalance: {
    fontFamily: 'Inter-Medium',
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
  },
  ExpenseCards: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  MainContainer2: {
    backgroundColor: 'white',
  },
  frequencyContainer: {
    width: '100%',
    height: 48,
    alignContent: 'center',
    justifyContent: 'center',
  },
  frequencyMain: {
    height: 32,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  frequencyText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: 'black',
    marginHorizontal: 5,
  },
  graphMain: {
    width: '100%',
    height: 185,
    paddingTop: 16,
    alignContent: 'center',
    justifyContent: 'center',
  },
  dateMain: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  dateText: {
    width: 86,
    height: 34,
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginTop: 5,
    fontFamily: 'Inter-Medium',
  },
  button: {
    width: 80,
    height: 34,
    margin: 1,
    borderRadius: 25,
  },
  activeButton: {
    backgroundColor: '#FCEED0',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
  },
  recentTransContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 15,
    height: 40,
    alignItems: 'center',
  },
  recentTransText1: {
    fontFamily: 'Inter-Bold',
    color: 'black',
    fontSize: 18,
  },
  recentTransText2Container: {
    width: 78,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#EEE5FF',
    justifyContent: 'center',
  },
  recentTransText2: {
    width: 78,
    fontFamily: 'Inter-Bold',
    color: '#7F3DFF',
    textAlign: 'center',
    borderRadius: 20,
  },
  ProfileImageContainer: {
    width: '20%',
    marginRight: -55,
  },
  ProfileImage: {
    height: '80%',
    width: '55%',
    borderRadius: 40,
  },
});
