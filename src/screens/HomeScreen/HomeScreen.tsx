import React from 'react';
import ProductItem from '../../components/ProductItem';
import {StyleSheet, View, FlatList} from 'react-native';

import products from '../../data/products';

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
