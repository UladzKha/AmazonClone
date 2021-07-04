import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';

import product from '../../data/product';

const ProductScreen: React.FC = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState(
    product?.options?.[0] ?? '',
  );

  const [quantity, setQuantity] = useState(1);

  const renderOptions = () => {
    return product.options
      ? product.options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))
      : null;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      <ImageCarousel images={product.images} />

      {product.options && (
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}>
          {renderOptions()}
        </Picker>
      )}

      <Text style={styles.price}>
        From&nbsp;${product.price}&nbsp;
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>

      <Text style={styles.description}>{product.description}</Text>

      <View>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>

      <Button
        text="Add to Cart"
        onPress={() => {
          console.warn('Add To Cart');
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{backgroundColor: '#e3c905'}}
      />

      <Button
        text="Buy Now"
        onPress={() => {
          console.warn('Buy Now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
