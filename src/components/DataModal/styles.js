import {StyleSheet, Platform} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
  modalBox: {
    width: '70%',
    height: Platform.OS === 'ios' ? 300 : 320,
    marginHorizontal: '15%',
    marginVertical: Platform.OS === 'ios' ? '60%' : '40%',
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 20,
  },
  modalStyling: {
    marginHorizontal: '4%',
    paddingVertical: 15,
    marginTop: 10,
  },
  heading: {
    marginBottom: 40,
  },
  txtBlock: {
    marginBottom: 70,
  },
  userDetails: {},
  closeBtn: {
    color: colors.primary,
    fontWeight: '600',
    textAlign: 'right',
  },
});

export default styles;
