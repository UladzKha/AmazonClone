import React, {useState, useMemo} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';
import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';
import styles from './styles';

const AddressScreen: React.FC = (): JSX.Element => {
  const [country, setCountry] = useState({});
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const countries = useMemo(() => countryList.getData(), []);

  const onCheckout = () => {
    if (!fullName) {
      Alert.alert('Please provide a Full Name');
      return;
    }

    if (!phoneNumber) {
      Alert.alert('Please provide a Phone Number');
      return;
    }
  };

  return (
    <View>
      <View style={styles.row}>
        <Picker onValueChange={setCountry} selectedValue={country}>
          {Object.keys(countries).length &&
            countries.map((item, index: number) => (
              <Picker.Item key={index} label={item.name} value={item.code} />
            ))}
        </Picker>
      </View>

      <CustomInput
        value={fullName}
        onChangeText={setFullName}
        text="Full name (First and Last name)"
        placeHolder="Full name"
      />

      <CustomInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        text="Phone number"
        placeHolder="Phone name"
        additionalSettings={{keyboardType: 'phone-pad'}}
      />

      <CustomInput
        value={address}
        onChangeText={setAddress}
        text="Address"
        placeHolder="Address"
      />

      <CustomInput
        value={city}
        onChangeText={setCity}
        text="City"
        placeHolder="City"
      />

      <Button text="Checkout" onPress={onCheckout} />
    </View>
  );
};

export default AddressScreen;
