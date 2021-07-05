import React from 'react';
import ProductItem from '../../components/ProductItem';
import {View, FlatList} from 'react-native';
import styles from './styles';

import products from '../../data/products';

const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
