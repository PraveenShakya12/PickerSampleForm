import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  constainer: {
    marginHorizontal: '10%',
    marginTop: 10,
    marginBottom: 2,
  },
  textInputStyle: {
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  warrningTxt: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: '12%',
  }
});

export default styles;
