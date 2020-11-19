import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: SIZES.base,
    borderRadius: 10,
    paddingLeft: SIZES.radius,
    paddingRight: SIZES.padding,
    height: 150,
    marginBottom: 5,
  },
  trendingShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  white: {
    backgroundColor: COLORS.white,
  },
  loader: {
    width: '30%',
    alignSelf: 'center',
  },
  loaderConatiner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 50,
  },
  textWrapper: {
    flex: 1.5,
    marginLeft: SIZES.radius,
    justifyContent: 'center',
  },
});

export default styles;
