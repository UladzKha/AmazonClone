import React from 'react';
import {View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';
import AddressScreen from './src/screens/AddressScreen';

const App = () => {
  return (
    <View>
      <AddressScreen />
    </View>
  );
};

export default App;
