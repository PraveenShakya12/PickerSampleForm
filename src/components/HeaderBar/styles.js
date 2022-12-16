import {StyleSheet} from 'react-native';

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
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  bar: {
    width: '92%',
    height: 8,
    marginVertical: 35,
    marginHorizontal: '4%',
    borderRadius: 4,
    backgroundColor: 'lightgreen',
  },
});

export default styles;
