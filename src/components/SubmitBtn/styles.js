import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import Fonts from '../../fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '20%',
    marginVertical: 10,
    borderRadius: 20,
  },
  txtStyle: {
    fontSize: Fonts.fontSize_11_5,
    color: colors.white,
    width: '100%',
    fontWeight: '600',
    height: 40,
    textAlign: 'center',
    paddingTop: 12,
  },
  btnArea: {
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
});

export default styles;
