import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  constainer: {
    marginHorizontal: '4%',
    paddingVertical: 15,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftshiftImgStyle: {
    width: 20,
    height: 20,
    marginTop: 3,
    resizeMode: 'contain',
  },
  cancelImgStyle: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginTop: 5,
  },
  bar: {
    width: '92%',
    height: 8,
    marginVertical: 35,
    marginHorizontal: '4%',
    borderRadius: 4,
    backgroundColor: colors.progressBarL,
  },
  progressiveBar: {
    height: '100%', 
    borderRadius: 4, 
    backgroundColor: colors.progressBarD
  },
  progressiveBarDev: {
    width: '0%', 
  },
  progressiveBarDep: {
    width: '20%', 
  },
  progressiveBarAuth: {
    width: '40%', 
  },
  progressiveBarDeta: {
    width: '60%', 
  },
  progressiveBarProf: {
    width: '80%', 
  },
});

export default styles;
