import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

type Props = {
  text: string;
  onPress: () => void;
  containerStyle?: object;
};

const Button: React.FC<Props> = ({
  text,
  onPress,
  containerStyle,
}): JSX.Element => {
  return (
    <Pressable style={{...styles.button, ...containerStyle}} onPress={onPress}>
      <Text style={styles.buttonText} onPress={onPress}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
