import {
  Text,
  View,
  Image,
  BackHandler,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import useHome from './useHome';
import ExpenseCard from '../../components/ExpenseCard';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './HomeStyle';
import ShoppingCard from '../../components/ShoppingCard';
import moment from 'moment';

export default function Home() {
  const {
    activeButton,
    handlePress,
    submit,
    expence,
    totalExpense,
    totalIncome,
    accountBalance,
  } = useHome();

  // console.log('first', expence.length);
  return (
    <ScrollView>
      <View style={styles.MainContainer1}>
        <LinearGradient
          colors={['#FFF6E5', '#FAF2E4']}
          style={styles.MainContainer}>
          <View>
            <View style={styles.TopNavigationContainer}>
              <View style={styles.TopNavigation1}>
                <View>
                  <Image
                    source={require('../../assets/images/HomeScreenImages/Avatar.png')}
                  />
                </View>
                <View style={styles.TopNavigation2}>
                  <Image
                    source={require('../../assets/images/HomeScreenImages/arrow-down-2.png')}
                    style={styles.TopNavigation2Image}
                  />
                  <Text style={styles.TopNavigation2Text}>October</Text>
                </View>
                <View style={styles.TopNavigation3}>
                  <Image
                    source={require('../../assets/images/HomeScreenImages/notifiaction.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.accountBalanceTextContainer}>
              <Text style={styles.accountBalanceText}>Account Balance</Text>
            </View>
            <View>
              <View style={styles.accountBalanceContainer}>
                <Text style={styles.accountBalance}>${accountBalance}</Text>
              </View>
            </View>
            <View style={styles.ExpenseCards}>
              <ExpenseCard
                name="Income"
                amount={totalIncome}
                imag={require('../../assets/images/HomeScreenImages/income.png')}
                onPress={() => {}}
                style={{backgroundColor: '#00A86B'}}
              />
              <ExpenseCard
                name="Expense"
                amount={totalExpense}
                imag={require('../../assets/images/HomeScreenImages/Expnese.png')}
                onPress={() => {}}
                style={{backgroundColor: '#FD3C4A'}}
              />
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.MainContainer2}>
        <View style={styles.frequencyContainer}>
          <View style={styles.frequencyMain}>
            <Text style={styles.frequencyText}>Spend Frequency</Text>
          </View>
        </View>
        <View>
          <View style={styles.graphMain}>
            <Image
              source={require('../../assets/images/HomeScreenImages/Graph.png')}
            />
          </View>
        </View>
        <View>
          <View style={styles.dateMain}>
            <TouchableOpacity
              style={[styles.button, activeButton === 1 && styles.activeButton]}
              onPress={() => handlePress(1)}>
              <Text style={styles.dateText}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, activeButton === 2 && styles.activeButton]}
              onPress={() => handlePress(2)}>
              <Text style={styles.dateText}>Week</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, activeButton === 3 && styles.activeButton]}
              onPress={() => handlePress(3)}>
              <Text style={styles.dateText}>Month</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, activeButton === 4 && styles.activeButton]}
              onPress={() => handlePress(4)}>
              <Text style={styles.dateText}>Year</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recentTransContainer}>
          <Text style={styles.recentTransText1}>Recent Transaction</Text>
          <TouchableOpacity
            onPress={() => {
              // submit();
            }}>
            <View style={styles.recentTransText2Container}>
              <Text style={styles.recentTransText2}>See All</Text>
            </View>
          </TouchableOpacity>
        </View>

        {expence.map((item, index) => (
          <ShoppingCard
            key={index.toString()}
            img={require('../../assets/images/HomeScreenImages/Subscription.png')}
            category={item.category}
            description={item.discription.slice(0, 20)}
            amount={item.amount}
            time={moment(item.addExpneseTime).format('hh:mm A')}
            onPress={() => {}}
            style={{}}
            wallet={''}
          />
        ))}
      </View>
    </ScrollView>
  );
}
