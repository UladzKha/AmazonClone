import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

type Props = {
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  placeHolder: string;
  additionalSettings?: object;
};

const Input: React.FC<Props> = ({
  value,
  onChangeText,
  text,
  additionalSettings,
  placeHolder,
}): JSX.Element => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        {...additionalSettings}
      />
    </View>
  );
};

export default Input;
