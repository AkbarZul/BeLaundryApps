import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.containerText}>Welcome, John</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.cardBalance}>
          <View style={styles.containerCircle}>
            <View style={styles.circle}></View>
            <View style={styles.circleRed}></View>
          </View>
          <View style={styles.containerBalance}>
            <Text style={styles.containerBalanceText}>Your Balance</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.containerPriceText}>$ 200.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerOrder}>
        <Text style={styles.orderText}>PREVIOUS ORDER</Text>
      </View>
      <View style={styles.laundry}>
          <View style={styles.bagLaundry}>

          </View>
          <View style={styles.invoice}>

          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F36868',
    width: '100%',
    height: '35%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // display: 'flex',
    // justifyContent: 'center',
    paddingHorizontal: '7%',
  },
  containerText: {
    fontFamily: 'Roboto',
    fontSize: 21,
    fontWeight: '500',
    marginTop: 100,
    color: '#ffffff',
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100,
  },
  cardBalance: {
    backgroundColor: '#ffffff',
    width: 341,
    height: 202,
    borderRadius: 10,
    zIndex: 2,
  },
  containerCircle: {
    display: 'flex',
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: '#0099EE',
    width: 139,
    height: 139,
    borderRadius: 100,
    marginTop: -20,
    marginLeft: -19,
    zIndex: 1,
    //   position: 'absolute'
  },
  circleRed: {
    backgroundColor: '#F36868',
    width: 29,
    height: 29,
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 10,
  },
  containerBalance: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingHorizontal: 9,
  },
  containerBalanceText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
  },
  containerPrice: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingHorizontal: 9,
  },
  containerPriceText: {
    fontFamily: 'Roboto',
    fontSize: 36,
    fontWeight: '700',
    color: '#0099ee',
  },
  containerOrder: {
    paddingHorizontal: '7%',
  },
  orderText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    color: '#3b97cb',
    marginTop: 30
  },
  laundry: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 15,
  },
  bagLaundry: {
      width: 200,
      height: 95,
      backgroundColor: '#ffffff'
  },
  invoice: {
      backgroundColor: '#0099ee',
      width: 132,
      height: 95,
  }
});

export default HomeScreen;
