import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './styles';

const SubmitBtn = props => {
  const name = props.name;
  return (
    <SafeAreaView>
      <View style={styles.btnArea}>
        <Text style={styles.txtStyle}>{name}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubmitBtn;
