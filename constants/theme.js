export const COLORS = {
  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#ABAFB8',
  gray: '#A9A9A9',
  pink: '#F94263',
};

export const SIZES = {
  h1: 17,
  body: 15,
  padding: 24,
  secondary: 25,
  body2: 12,
};

export const FONTS = {
  h1: {fontFamily: 'FontAwesome5_Solid', fontSize: SIZES.h1, lineHeight: 22},
  body: {
    fontFamily: 'FontAwesome5_Regular',
    fontSize: SIZES.body,
    lineHeight: 22,
  },
  secondary: {
    fontFamily: 'FontAwesome5_Solid',
    fontSize: SIZES.secondary,
    lineHeight: 22,
    color: COLORS.pink,
  },
  body2: {
    fontFamily: 'FontAwesome5_Regular',
    fontSize: SIZES.body2,
    lineHeight: 22,
    color: COLORS.gray,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
