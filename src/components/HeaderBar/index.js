import React from 'react';
import {View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import images from '../../config/images';

const HeaderBar = ({GoToBackScreen}) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={()=>{GoToBackScreen()}}>
          <Image style={styles.leftshiftImgStyle} source={images.source1} />
        </TouchableOpacity>

        <Image style={styles.cancelImgStyle} source={images.source2} />
      </View>
      <View style={styles.bar}></View>
    </SafeAreaView>
  );
};

export default HeaderBar;
