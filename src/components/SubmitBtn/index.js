import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const SubmitBtn = props => {
  const {name, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.btnArea}>
        <Text style={styles.txtStyle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubmitBtn;
