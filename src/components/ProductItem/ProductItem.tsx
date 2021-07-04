import React, {useMemo} from 'react';
import {Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

  const fullStar = (
    <FontAwesome style={styles.star} name="star" size={18} color="#e47911" />
  );

  const halfStar = (
    <FontAwesome
      style={styles.star}
      name="star-half-full"
      size={18}
      color="#e47911"
    />
  );

  const emptyStar = (
    <FontAwesome style={styles.star} name="star-o" size={18} color="#e47911" />
  );

  const renderRatingStars = useMemo(
    () => () => {
      // for (let i = 0; i < 100000000; i++) {
      //   console.log(i);
      // }

      const resArr = [];
      let index = 0;

      for (let i = index; i < Math.floor(avgRating); i++) {
        resArr.push({...fullStar, key: {index}});
        index++;
      }

      if (index < 5 && avgRating !== Math.floor(avgRating)) {
        resArr.push({...halfStar, key: index});
        index++;
      }

      for (let i = index; i < 5; i++) {
        resArr.push({...emptyStar, key: index});
      }

      return resArr;
    },
    [item],
  );

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
          {renderRatingStars()}

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
