import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import images from '../../config/images';

const HeaderBar = () => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.headerBox}>
        <Image style={styles.leftshiftImgStyle} source={images.source1} />
        <Image style={styles.cancelImgStyle} source={images.source2} />
      </View>
      <View style={styles.bar}></View>
    </SafeAreaView>
  );
};

export default HeaderBar;
