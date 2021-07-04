import React, {useRef, useState} from 'react';
import {View, Image, FlatList, useWindowDimensions} from 'react-native';
import styles from './styles';

type Props = {
  images: Array<string>;
};

const ImageCarousel: React.FC<Props> = ({images}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(viewableItems => {
    const {
      viewableItems: {
        0: {index},
      },
    } = viewableItems;

    setActiveIndex(index);
  });

  const windowWidth = useWindowDimensions().width;

  const renderDots = () =>
    images.map((_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          // eslint-disable-next-line react-native/no-inline-styles
          {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'},
        ]}
      />
    ));

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={{...styles.image, width: windowWidth - 40}}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment="center"
        decelerationRate="fast"
        keyExtractor={item => item}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onViewableItemsChanged={onViewRef.current}
      />

      <View style={styles.dots}>{renderDots()}</View>
    </View>
  );
};

export default ImageCarousel;
