import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const renderRatingStars = (avgRating: number) => {
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
};

const styles = StyleSheet.create({
  star: {
    margin: 2,
  },
});

export default renderRatingStars;
