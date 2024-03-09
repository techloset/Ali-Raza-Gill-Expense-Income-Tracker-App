import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import useTransactionsDetail from './useTransactionsDetail';
import moment from 'moment';
import ShoppingCard from '../../components/ShoppingCard';
import {ScrollView} from 'react-native-gesture-handler';
import {AuthRoutes} from '../../navigation/stackNavigation/StackNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

interface Props {
  navigation: StackNavigationProp<AuthRoutes>;
}
const TransactionsDetails: React.FC<Props> = ({navigation}) => {
  const {
    isLoading,
    isError,
    combinedTransactions,
    todaysTransactions,
    yesterdaysTransactions,
    previousTransactions,
    fetchTransactions,
  } = useTransactionsDetail();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Image
              source={require('../../assets/images/TransactionImages/arrow-down-2.png')}
              style={styles.filterImage}
            />
            <Text style={styles.filterButtonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.burgerIcon}>
            <Image
              source={require('../../assets/images/TransactionImages/ButtonIcon.png')}
              style={styles.filterImage2}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.financialContainer}
          onPress={() => {
            navigation.navigate('FinancialReports');
          }}>
          <Text style={styles.financialContainerText}>
            See your financial report
          </Text>
          <Image
            source={require('../../assets/images/TransactionImages/arrow-right.png')}
            style={styles.alertContainerImage}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headingText}>Today</Text>
        </View>
        {isLoading ? (
          <Text
            style={{
              fontSize: 30,
              color: 'grey',
            }}>
            Loading...
          </Text>
        ) : isError ? (
          <Text>Error fetching transactions</Text>
        ) : (
          <>
            {fetchTransactions?.map((item: any, index: number) => (
              <ShoppingCard
                key={index.toString()}
                img={require('../../assets/images/HomeScreenImages/Shopping.png')}
                category={item.category}
                description={item.discription.slice(0, 12)}
                amount={item.amount}
                time={
                  item.addExpenseTime
                    ? moment(item.addExpenseTime).format('hh:mm A')
                    : ''
                }
                onPress={() => {}}
                style={{}}
                wallet=""
              />
            ))}
            {fetchTransactions.length === 0 && (
              <Text style={styles.headingText1}>
                No Today's transactions available
              </Text>
            )}

            <Text style={styles.headingText}>Yesterday</Text>
            {yesterdaysTransactions.map((item: any, index: number) => (
              <ShoppingCard
                key={index.toString()}
                img={require('../../assets/images/HomeScreenImages/Shopping.png')}
                category={item.category}
                description={item.discription.slice(0, 10)}
                amount={item.amount}
                time={
                  item.addExpenseTime
                    ? moment(item.addExpenseTime).format('hh:mm A')
                    : ''
                }
                onPress={() => {}}
                style={{}}
                wallet=""
              />
            ))}
            {yesterdaysTransactions.length === 0 && (
              <Text style={styles.headingText1}>
                No yesterday's transactions available
              </Text>
            )}
            <Text style={styles.headingText}>Previous Transactions</Text>
            {previousTransactions.map((item: any, index: number) => (
              <ShoppingCard
                key={index.toString()}
                img={require('../../assets/images/HomeScreenImages/Shopping.png')}
                category={item.category}
                description={item.discription.slice(0, 10)}
                amount={item.amount}
                time={
                  item.addExpenseTime
                    ? moment(item.addExpenseTime).format('hh:mm A')
                    : ''
                }
                onPress={() => {}}
                style={{}}
                wallet=""
              />
            ))}

            {previousTransactions.length === 0 && (
              <Text style={styles.headingText1}>
                No previous transactions available
              </Text>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default TransactionsDetails;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    height: 40,
    width: 96,
    borderRadius: 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterImage: {
    height: 24,
    width: 24,
    marginTop: 3,
  },
  filterButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'black',
  },
  burgerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterImage2: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  financialContainer: {
    height: 54,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
    width: '100%',
    alignSelf: 'center',
  },
  alertContainerImage: {
    height: 32,
    width: 32,
  },
  financialContainerText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7F3DFF',
    fontFamily: 'Inter-Medium',
  },
  headingText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
    fontFamily: 'Inter-SemiBold',
  },
  headingText1: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    marginBottom: 10,
    fontFamily: 'Inter-Medium',
  },
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modelBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flatList: {},
});