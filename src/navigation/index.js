import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HomeScreen,
  OrderScreen,
  DetailProductScreen,
  AddProductScreen,
} from '../screens';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="Home"
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        initialRouteName="Order"
        name="Order"
        component={OrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        initialRouteName="DetailProduct"
        name="DetailProduct"
        component={DetailProductScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        initialRouteName="AddProduct"
        name="AddProduct"
        component={AddProductScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};
