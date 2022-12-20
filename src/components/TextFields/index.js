import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';
import styles from './styles';

const TextFields = props => {
  const {placeholder, warrning, defaultValue} = props;
  return (
    <View style={styles.containerPaper}>
      {/* <View style={styles.constainer}>
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
      <Text style={styles.warrningTxt}>{warrning}</Text> */}

      <PaperTextInput
        {...props}
        style={[styles.textInputStylePaper,
        ]}
        label={placeholder}
        mode="outlined"
        defaultValue={defaultValue}
        // outlineColor={'red'}
        // activeOutlineColor={'red'}
        // selectionColor={'red'}
      />
      <Text style={styles.warrningTxtPaper}>{warrning}</Text>
    </View>
  );
};

export default TextFields;
