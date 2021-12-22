import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Arrow, Laundry} from '../../assets';

const OrderScreen = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={styles.container}
        vertical={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerArrow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={Arrow} />
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <View style={styles.containerOrder}>
            <View style={styles.order}>
              <Text style={styles.textOrder}>Order sumary</Text>
            </View>
            <View style={styles.containerOrderText}>
              <Text style={styles.orderText}>ORDER #21340</Text>
            </View>
            <View style={{paddingHorizontal: 20, marginTop: 20}}>
              <Text style={styles.textName}>John Doe</Text>
              <Text style={styles.textAddress}>123 Pasar Ris,</Text>
              <Text style={styles.textAddress}>13810, Singapore</Text>
            </View>
            <View>
              <View style={styles.containerLaundry}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Image source={Laundry} />
                  </View>
                  <View>
                    <Text style={styles.textBag}>Bag of Laundry</Text>
                    <Text style={styles.textQty}>Qty: 2</Text>
                  </View>
                </View>
                <View>
                  <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={styles.textTotal}>Total</Text>
                  </View>
                  <Text style={styles.textPrice}>$ 180.00</Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
            <View>
              <View style={styles.containerLaundry}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Image source={Laundry} />
                  </View>
                  <View>
                    <Text style={styles.textBag}>Dry Cleaning</Text>
                    <Text style={styles.textQty}>Qty: 3</Text>
                  </View>
                </View>
                <View>
                  <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={styles.textTotal}>Total</Text>
                  </View>
                  <Text style={styles.textPrice}>$ 10.00</Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
            <View>
              <View style={styles.containerLaundry}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <View>
                    <Image source={Laundry} />
                  </View>
                  <View>
                    <Text style={styles.textBag}>Rug</Text>
                    <Text style={styles.textQty}>Qty: 1</Text>
                  </View>
                </View>
                <View>
                  <View style={{display: 'flex', alignItems: 'center'}}>
                    <Text style={styles.textTotal}>Total</Text>
                  </View>
                  <Text style={styles.textPrice}>$ 14.00</Text>
                </View>
              </View>
              <View style={styles.line}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F5FD',
  },
  containerArrow: {
    paddingHorizontal: 35,
    marginTop: 45,
  },
  containerOrder: {
    width: 302,
    height: 553,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 50,
  },
  order: {
    backgroundColor: '#0099EE',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textOrder: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '700',
    color: '#ffffff',
  },
  containerOrderText: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  orderText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    color: '#0099ee',
  },
  textName: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
  },
  textAddress: {
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: '400',
    color: '#535353',
  },
  containerLaundry: {
    display: 'flex',
    flexDirection: 'row',
    // paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textBag: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    color: '#525252',
    // paddingHorizontal: -60
  },
  textQty: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: '400',
    color: '#3b97cb',
    // marginLeft: -60
  },
  textTotal: {
    fontFamily: 'Roboto',
    fontSize: 9,
    fontWeight: '400',
    color: '#535353',
  },
  textPrice: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700',
    color: '#0099ee',
  },
  line: {
    // width: '100%',
    height: 1,
    backgroundColor: '#0099ee',
    // marginHorizontal: 20,
  },
});

export default OrderScreen;
