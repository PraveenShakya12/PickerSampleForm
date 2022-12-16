import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

const TextFields = props => {
  const {placeholder, warrning} = props;
  return (
    <View>
      <View style={styles.constainer}>
        <TextInput
          style={styles.textInputStyle}
          {...props}
          placeholder={placeholder}
        />
      </View>
      <Text style={styles.warrningTxt}>{warrning}</Text>
    </View>
  );
};

export default TextFields;
