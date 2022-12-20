import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import Fonts from '../../fonts';

const styles = StyleSheet.create({
  constainer: {
    marginHorizontal: '10%',
    marginTop: 10,
    marginBottom: 2,
  },
  textInputStyle: {
    paddingVertical: 15,   
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  textBorder: {
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  textBorderWarning: {
    borderWidth: 1,
    borderColor: 'red',
  },
  warrningTxt: {
    fontSize: Fonts.fontSize_11_5,
    color: 'red',
    marginHorizontal: '12%',
  },

  //react-native-paper text input styling
  containerPaper:{
    marginVertical: 5,
  },
  textInputStylePaper: {
    marginHorizontal: '10%',
    marginTop: 10,
    marginBottom: 2,
  },
  warrningTxtPaper: {
    fontSize: Fonts.fontSize_11_5,
    color: 'red',
    marginHorizontal: '12%',
  },

});

export default styles;
