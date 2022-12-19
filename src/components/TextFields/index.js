import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

const TextFields = props => {
  const {placeholder, warrning, defaultValue} = props;
  return (
    <View>
      <View style={styles.constainer}>
        <TextInput
          style={[
            styles.textInputStyle,
            placeholder === 'Enter Email' || placeholder === 'Enter Phone No.'
              ? warrning === ''
                ? styles.textBorder
                : styles.textBorderWarning
              : styles.textBorder,
          ]}
          {...props}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </View>
      <Text style={styles.warrningTxt}>{warrning}</Text>
    </View>
  );
};

export default TextFields;
