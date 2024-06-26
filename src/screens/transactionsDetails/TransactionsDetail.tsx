import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import useTransactionsDetail from './useTransactionsDetail';
import moment from 'moment';
import ShoppingCard from '../../components/ShoppingCard';
import {ScrollView} from 'react-native-gesture-handler';
import {AuthRoutes} from '../../navigation/stackNavigation/StackNavigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  Shopping,
  Subscription,
  Food,
  Salary,
  Transpotation,
  Arrow_Down_2,
  ButtonIcon,
  arrow_right,
} from '../../assets/constants/Constants';

interface Props {
  navigation: StackNavigationProp<AuthRoutes>;
}
interface Category {
  id: number;
  name: string;
  cardimage: any;
}

const categories: Category[] = [
  {id: 1, name: 'Shopping', cardimage: Shopping},
  {id: 2, name: 'Subscription', cardimage: Subscription},
  {id: 3, name: 'Food', cardimage: Food},
  {id: 4, name: 'Salary', cardimage: Salary},
  {id: 5, name: 'Transportation', cardimage: Transpotation},
];

const TransactionsDetails: React.FC<Props> = ({navigation}) => {
  const {isLoading, isError, fetchTransactions} = useTransactionsDetail();

  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={Arrow_Down_2} style={styles.filterImage} />
            <Text style={styles.filterButtonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.burgerIcon}>
            <Image source={ButtonIcon} style={styles.filterImage2} />
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
          <Image source={arrow_right} style={styles.alertContainerImage} />
        </TouchableOpacity>
        <View>
          <Text style={styles.headingText}>All Transactions</Text>
        </View>
        {isLoading ? (
          <Text
            style={{
              fontSize: 20,
              color: 'grey',
            }}>
            Loading...
          </Text>
        ) : isError ? (
          <Text>Error fetching transactions</Text>
        ) : (
          <>
            {fetchTransactions?.map((item: any, index: number) => {
              const categoryObj = categories.find(
                cat => cat.name === item.category,
              );

              const img = categoryObj ? categoryObj.cardimage : {image: Salary};

              return (
                <ShoppingCard
                  key={index.toString()}
                  img={img}
                  category={item?.category}
                  discription={item?.discription}
                  amount={item?.amount}
                  time={item?.time ? moment(item.time).format('hh:mm A') : ''}
                  imageUrl={item?.imageUrl}
                  onPress={() => {}}
                  wallet=""
                  transType={item.transType}
                  documentId={item.docId}
                  style={{}}
                />
              );
            })}
            {fetchTransactions.length === 0 && (
              <Text style={styles.headingText1}>
                No Today's transactions available
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
  MainContainer: {
    paddingTop: 20,

    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
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
    paddingLeft: 16,
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
