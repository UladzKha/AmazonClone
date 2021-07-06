import React from 'react';
import {View, FlatList, Text} from 'react-native';
import ProductCartItem from '../../components/ProductCartItem';
import Button from '../../components/Button';
import styles from './styles';

import products from '../../data/cart';

const ShoppingCartScreen: React.FC = (): JSX.Element => {
  const totalPrice = products.reduce(
    (acc, item) => (acc += item.item.price * item.quantity),
    0,
  );
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCartItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Subtotal: ({products.length} items):{' '}
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{fontSize: 18, color: '#e47911'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>

            <Button
              text="Proceed to checkout"
              onPress={() => console.warn('go to checkout')}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                backgroundColor: '#e4d316',
                borderColor: '#e4d316',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;
