import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import renderRatingStars from '../../helpers/renderRatingStars';
import QuantitySelector from '../../components/QuantitySelector';
import styles from './styles';

type Props = {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
};

const ProductCartItem: React.FC<Props> = ({cartItem}): JSX.Element => {
  const {
    quantity: quantityProp,
    item: {avgRating, image, title, oldPrice, price, ratings},
  } = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />

        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>

          <View style={styles.ratingsContainer}>
            {renderRatingStars(avgRating)}

            <Text>&nbsp;{ratings}</Text>
          </View>

          <Text style={styles.price}>
            ${price}
            {oldPrice && (
              <Text style={styles.oldPrice}>&nbsp;From ${oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default ProductCartItem;
