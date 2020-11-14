import {Dimensions, StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../constants';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 30,
    marginVertical: height * 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
  },
  imageCover: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    elevation: 15,
    borderRadius:10
  },
  image: {
    width: 120,
    height: 120,
  },
  name: {
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  box: {
    padding: 15,
  },
  labelDetail: {
    fontSize: 20,
    fontFamily: 'FontAwesome5_Solid',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default styles;
