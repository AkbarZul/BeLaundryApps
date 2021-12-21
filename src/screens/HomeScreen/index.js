import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {Laundry, Dry, Coolicon} from '../../assets';

const HomeScreen = () => {
  return (
    <>
      <ScrollView
        style={styles.container}
        vertical={true}
        showsVerticalScrollIndicator={false}>
        {/* <View style={{flex: 1, marginBottom: 10}}> */}
          <SafeAreaView style={styles.containerWelcome}>
            <Text style={styles.containerText}>Welcome, John</Text>
          </SafeAreaView>
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
              <View style={styles.bagLaundryContents}>
                <View>
                  <Image style={styles.pictureLaundry} source={Laundry} />
                </View>
                <View>
                  <Text style={styles.bagLaundryText}>Bag of Laundry</Text>
                  <Text style={styles.laundryTotalText}>Total Order</Text>
                  <Text style={styles.laundryPriceText}>$ 180.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.invoice}>
              <Image style={styles.pictureInvoice} source={Coolicon} />
              <Text style={styles.textInvoice}>INVOICE</Text>
            </View>
          </View>
          <View style={styles.containerOrder}>
            <Text style={styles.mostOrderText}>YOUR MOST ORDERED</Text>
          </View>
          <View style={styles.continerDry}>
            <Image style={styles.pictureDry} source={Dry} />
          </View>
          <View>
          <Text style={styles.textDryTotal}>12x | total of $ 4.000</Text>
          <Text style={styles.textDryCleaning}>Dry Cleaning</Text>
          </View>
          <View style={styles.containerOrder}>
            <Text style={styles.mostOrderText}>OUR LATEST PRODUCT</Text>
          </View>
        {/* </View> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F5FD',
    // paddingBottom: 10,
    // height: 500
    // marginEnd: 10
  },
  containerWelcome: {
    backgroundColor: '#F36868',
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    // display: 'flex',
    // justifyContent: 'center',
    paddingHorizontal: '7%',
    // flex: 1
  },
  containerText: {
    fontFamily: 'Roboto',
    fontSize: 21,
    fontWeight: '500',
    marginTop: 70,
    color: '#ffffff',
  },
  subContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -100,
  },
  cardBalance: {
    backgroundColor: '#ccedff',
    width: 341,
    height: 202,
    borderRadius: 10,
    // zIndex: 2,
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
    // zIndex: 1,
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
    marginTop: 30,
  },
  laundry: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  bagLaundry: {
    width: 220,
    height: 95,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  invoice: {
    backgroundColor: '#0099ee',
    width: 112,
    height: 95,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureInvoice: {
    width: 44,
    height: 44,
  },
  textInvoice: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 10,
  },
  bagLaundryContents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  pictureLaundry: {
    width: 70,
    height: 79,
    marginTop: 10,
  },
  bagLaundryText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '500',
    color: '#525252',
  },
  laundryTotalText: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '400',
    color: '#535353',
    marginTop: 15,
  },
  laundryPriceText: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: '#0099ee',
  },
  mostOrderText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    color: '#3b97cb',
    marginTop: 30,
    marginBottom: 20
  },
  continerDry: {
    display: 'flex',
    alignItems: 'center',
  },
  pictureDry: {
    width: 340,
    height: 250,
    borderRadius: 5
    // marginBottom: 180
  },
  textDryCleaning: {
    fontFamily: 'Roboto',
    fontSize: 23,
    fontWeight: '700',
    paddingHorizontal: '13%',
    color: '#ffffff',
    marginTop: -60,
    // marginBottom: 100
  },
  textDryTotal: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: '13%',
    color: '#ffffff',
    marginTop: -55
  }
});

export default HomeScreen;
