import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Add} from '../../assets';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

const API_URL = 'http://192.168.1.5:8000';

const AddProductScreen = ({navigation}) => {
  const category = [
    {
      id: 1,
      category_name: 'Wash and Fold',
    },
    {
      id: 2,
      category_name: 'Dry Clean',
    },
  ];
  const otherCategory = [
    {
      id: 3,
      category_name: 'Home',
    },
    {
      id: 4,
      category_name: 'Others',
    },
  ];
  const [filePath, setFilePath] = useState([]);
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState('');
  const [prodDesc, setProdDesc] = useState('');
  const [prodSku, setProdSku] = useState('');
  const [prodStock, setProdStock] = useState('');
  const [prodCtg, setProdCtg] = useState(0);

  console.log('file', filePath);

  const handleSubmit = async () => {
    const data = new FormData();
    data.append('product_name', prodName);
    data.append('product_description', prodDesc);
    data.append('product_sku', prodSku);
    data.append('product_stock', prodStock);
    data.append('product_price', prodPrice);
    data.append('category_id', prodCtg);
    for (let i = 0; i < filePath.length; i++) {
      data.append('image', {
        name: filePath[i].path.split('/').pop(),
        type: filePath[i].mime,
        uri:
          Platform.OS === 'android'
            ? filePath[i].path
            : filePath[i].path.replace('file://', ''),
      });
    }
    await axios
      .post(API_URL + '/products', data)
      .then(res => {
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then(images => {
        setFilePath(images);
      })
      .catch(e => {
        console.log(e);
      });
  };
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
        <View style={styles.containerTextAdd}>
          <Text style={styles.textAdd}>Add New Product</Text>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 30}}>
          <Text style={styles.text}>Product Name</Text>
          <TextInput
            value={prodName}
            onChangeText={prodName => setProdName(prodName)}
            style={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <Text style={styles.text}>Description</Text>
          <TextInput
            value={prodDesc}
            onChangeText={prodDesc => setProdDesc(prodDesc)}
            style={{
              backgroundColor: '#fff',
              height: 90,
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <Text style={styles.text}>SKU</Text>
          <TextInput
            value={prodSku}
            onChangeText={prodSku => setProdSku(prodSku)}
            style={{
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <Text style={styles.text}>Stock</Text>
          <TextInput
            value={prodStock}
            onChangeText={prodStock => setProdStock(prodStock)}
            style={{
              backgroundColor: '#fff',
              width: 100,
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <Text style={styles.text}>Category</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {category.map(({id, category_name}) => {
              return (
                <View
                  style={{
                    width: 155,
                    height: 49,
                    backgroundColor: '#caecff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  key={id}>
                  <TouchableOpacity
                    onPress={() => {
                      setProdCtg(id);
                    }}>
                    <Text style={styles.categoryText}>{category_name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            {otherCategory.map(({id, category_name}) => {
              return (
                <View
                  style={{
                    width: 155,
                    height: 49,
                    backgroundColor: '#caecff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  key={id}>
                  <TouchableOpacity
                    onPress={() => {
                      setProdCtg(id);
                    }}>
                    <Text style={styles.categoryText}>{category_name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20}}>
          <Text style={styles.text}>Price</Text>
          <TextInput
            value={prodPrice}
            onChangeText={prodPrice => setProdPrice(prodPrice)}
            style={{
              backgroundColor: '#fff',
              width: 150,
              borderWidth: 1,
              borderColor: '#0099ee',
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 20, marginBottom: 20}}>
          <TouchableOpacity onPress={pickImage}>
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
              {filePath == 0 ? (
                <>
                  <Image source={Add} />
                  <Text style={styles.uploadText}>Upload image here</Text>
                </>
              ) : null}
              {filePath.map(item => {
                return (
                  <Image
                    key={filePath.indexOf(item)}
                    source={{uri: filePath.length !== 0 ? item.path : ''}}
                    style={styles.imgStyle}
                  />
                );
              })}
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSubmit}>
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
              <Text style={styles.textPublish}>Publish</Text>
            </View>
          </View>
        </TouchableOpacity>
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
  textAdd: {
    fontFamily: 'Roboto',
    fontSize: 37,
    fontWeight: '700',
    color: '#303030',
  },
  containerTextAdd: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
    color: '#3b97cb',
  },
  categoryText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '400',
    color: '#3b97cb',
  },
  uploadText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    color: '#3b97cb',
    marginTop: 30,
  },
  textPublish: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  imgStyle: {
    width: 200,
    height: 200,
    margin: 5,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default AddProductScreen;
