import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({text, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText} onPress={onPress}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
