import React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import images from '../../config/images';

const HeaderBar = ({ GoToBackScreen, backToScreen = true, screen }) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.headerBox}>
        {backToScreen === false ? (
          <View></View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              GoToBackScreen();
            }}>
            <Image style={styles.leftshiftImgStyle} source={images.source1} />
          </TouchableOpacity>
        )}
        <Image style={styles.cancelImgStyle} source={images.source2} />
      </View>
      <View style={styles.bar}>
        <View
          style={[
            styles.progressiveBar,
            styles.progressiveBarDev,
            screen === 'Development' ? styles.progressiveBarDev :
              screen === 'Department' ? styles.progressiveBarDep :
                screen === 'UserAuth' ? styles.progressiveBarAuth :
                  screen === 'UserDetails' ? styles.progressiveBarDeta :
                    screen === 'UserProfession' ? styles.progressiveBarProf :
                      {},
          ]}></View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderBar;
