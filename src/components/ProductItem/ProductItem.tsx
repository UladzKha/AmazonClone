import React from 'react';
import {Text, View, Image} from 'react-native';
import renderRatingStars from '../../helpers/renderRatingStars';
import styles from './styles';

type Props = {
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

const ProductItem: React.FC<Props> = ({item}): JSX.Element => {
  const {title, image, avgRating, oldPrice, price, ratings} = item;

  return (
    <View style={styles.root}>
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

        <View style={styles.ratingContainer}>
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
  );
};

export default ProductItem;
