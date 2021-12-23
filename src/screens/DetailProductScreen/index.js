import React, {useState, useEffect} from 'react';
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
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {Arrow} from '../../assets';

const API_URL = 'http://192.168.1.5:8000';

const DetailProductScreen = ({navigation, route}) => {
  const {itemId} = route.params;
  const [product, setProduct] = useState([]);
  console.log('ini id', itemId);
  const getProduct = async itemId => {
    await axios
      .get(`${API_URL}/product/${itemId}`)
      .then(res => {
        const productId = res.data;
        console.log('ini productId', productId);
        setProduct(productId);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProduct(itemId);
  }, [itemId]);
  return (
    <>
      <ScrollView
        style={styles.container}
        vertical={true}
        showsVerticalScrollIndicator={false}>
        {product.map(
          ({
            id,
            product_name,
            product_price,
            category_name,
            image,
            product_description,
          }) => {
            return (
              <>
                <View key={id}>
                  <Image
                    source={{uri: `${API_URL}${JSON.parse(image).shift()}`}}
                    style={{
                      width: '100%',
                      height: 350,
                    }}
                  />
                  <LinearGradient
                    colors={['#0000', 'transparent', '#2D9CDB']}
                    style={styles.continerDrylinear}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Home');
                      }}>
                      <View style={{paddingHorizontal: 20, marginTop: 40}}>
                        <Image source={Arrow} />
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>
                  <View style={styles.containerText}>
                    <View style={styles.containerTextCat}>
                      <Text style={styles.textCategory}>{category_name}</Text>
                    </View>
                    <Text style={styles.textName}>{product_name}</Text>
                    <Text style={styles.textPrice}>$ {product_price}.00/pc</Text>
                    <Text style={styles.textDesc}>{product_description}</Text>
                  </View>
                </View>
              </>
            );
          },
        )}
        <TouchableOpacity style={styles.containerAddProduct} onPress={() => {
          navigation.navigate('AddProduct')
        }}>
          <View style={styles.addProduct}>
            <Text style={styles.textAdd}>Add New Product</Text>
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
  continerDrylinear: {
    width: '100%',
    height: 350,
    marginTop: -350,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerText: {
    paddingHorizontal: 15,
  },
  containerTextCat: {
      width: 69,
      height: 30,
      backgroundColor: '#caecff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 40,
      marginBottom: 20
  },
  textCategory: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    color: '#0099ee',
  },
  textName: {
      fontFamily: 'Roboto',
      fontSize: 44,
      fontWeight: '700',
      color: '#3b97cb'
  },
  textPrice: {
      fontFamily: 'Roboto',
      fontSize: 27,
      fontWeight: '500',
      color: '#0099ee',
      marginBottom: 10
  },
  textDesc: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: '400',
      color: '#838383'
  },
  containerAddProduct: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  addProduct: {
    backgroundColor: '#0099ee',
    width: 150,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAdd: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    color: '#fff'
  }
});

export default DetailProductScreen;
