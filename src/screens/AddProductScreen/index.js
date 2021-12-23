import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Add} from '../../assets';

const AddProductScreen = () => {
  return (
    <>
      <ScrollView
        style={styles.container}
        vertical={true}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerBelaundry}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.circleBlue}></View>
            <View style={styles.circleRed}></View>
          </View>
          <View style={{marginLeft: 15}}>
            <Text>BeLaundry</Text>
          </View>
        </View>
        <View>
          <Text>ADD NEW PRODUCT</Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text>Product Name</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text>Description</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              height: 90,
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text>SKU</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text>Stock</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              width: 100,
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text>Price</Text>
          <TextInput
            style={{
              backgroundColor: '#fff',
              width: 150,
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 10, marginBottom: 20}}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: 250,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Image source={Add} />
            <Text>Upload image here</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginBottom: 20}}>
          <View
            style={{
              height: 60,
              backgroundColor: '#56e4a0',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Publish</Text>
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
  containerBelaundry: {
    width: '100%',
    height: 68,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  circleBlue: {
    width: 40,
    height: 40,
    backgroundColor: '#0099ee',
    borderRadius: 100,
  },
  circleRed: {
    width: 13,
    height: 13,
    borderRadius: 100,
    backgroundColor: '#f36868',
  },
});

export default AddProductScreen;
