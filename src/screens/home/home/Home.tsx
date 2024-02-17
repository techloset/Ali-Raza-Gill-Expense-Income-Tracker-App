import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import useHome from './useHome';
import ExpenseCard from '../../../components/ExpenseCard';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './HomeStyle';
import ShoppingCard from '../../../components/ShoppingCard';

export default function Home() {
  const {activeButton, handlePress} = useHome();
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
                    source={require('../../../assets/images/HomeScreenImages/Avatar.png')}
                  />
                </View>
                <View style={styles.TopNavigation2}>
                  <Image
                    source={require('../../../assets/images/HomeScreenImages/arrow-down-2.png')}
                    style={styles.TopNavigation2Image}
                  />
                  <Text style={styles.TopNavigation2Text}>October</Text>
                </View>
                <View style={styles.TopNavigation3}>
                  <Image
                    source={require('../../../assets/images/HomeScreenImages/notifiaction.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.accountBalanceTextContainer}>
              <Text style={styles.accountBalanceText}>Account Balance</Text>
            </View>
            <View>
              <View style={styles.accountBalanceContainer}>
                <Text style={styles.accountBalance}>$1000</Text>
              </View>
            </View>
            <View style={styles.ExpenseCards}>
              <ExpenseCard
                name="Income"
                amount={5000}
                imag={require('../../../assets/images/HomeScreenImages/income.png')}
                onPress={() => {}}
                style={{backgroundColor: '#00A86B'}}
              />
              <ExpenseCard
                name="Expense"
                amount={5000}
                imag={require('../../../assets/images/HomeScreenImages/Expnese.png')}
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
              source={require('../../../assets/images/HomeScreenImages/Graph.png')}
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
        <View>
          <View style={styles.recentTransContainer}>
            <Text style={styles.recentTransText1}>Recent Transaction</Text>
            <TouchableOpacity>
              <View style={styles.recentTransText2Container}>
                <Text style={styles.recentTransText2}>See All</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ShoppingCard
            img={require('../../../assets/images/HomeScreenImages/Shopping.png')}
            category="Shopping"
            description="I buy a car"
            amount={-500}
            time={'10:20 pm'}
            onPress={() => {}}
            style={{}}
          />
        </View>

        <View>
          <ShoppingCard
            img={require('../../../assets/images/HomeScreenImages/Subscription.png')}
            category="Subscription"
            description="I buy a car"
            amount={-500}
            time={'10:20 pm'}
            onPress={() => {}}
            style={{}}
          />
          <View>
            <ShoppingCard
              img={require('../../../assets/images/HomeScreenImages/Food.png')}
              category="Food"
              description="I buy a car"
              amount={-500}
              time={'10:20 pm'}
              onPress={() => {}}
              style={{}}
            />
          </View>
        </View>
        <View>
          <ShoppingCard
            img={require('../../../assets/images/HomeScreenImages/Salary.png')}
            category="Salary"
            description="I buy a car"
            amount={-500}
            time={'10:20 pm'}
            onPress={() => {}}
            style={{}}
          />
        </View>
        <View>
          <ShoppingCard
            img={require('../../../assets/images/HomeScreenImages/Transpotation.png')}
            category="Transpotation"
            description="I buy a car"
            amount={-500}
            time={'10:20 pm'}
            onPress={() => {}}
            style={{}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
