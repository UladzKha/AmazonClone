import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantitySelector: React.FC<Props> = ({
  quantity,
  setQuantity,
}): JSX.Element => {
  const onMinus = (): void => {
    setQuantity(prev => (prev <= 1 ? 1 : prev - 1));
  };

  const onPlus = (): void => {
    setQuantity(prev => prev + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <Text style={styles.buttonText}>−</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable style={styles.button} onPress={onPlus}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
