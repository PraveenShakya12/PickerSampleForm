import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from './styles';

const Message = props => {
  const message = props.message;
  return (
    <SafeAreaView style={styles.constainer}>
      <Text style={styles.txtStyle}>{message}</Text>
    </SafeAreaView>
  );
};

export default Message;
