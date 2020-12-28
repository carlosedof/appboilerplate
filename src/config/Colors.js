import { DefaultTheme } from 'react-native-paper';

const appBg = '#f1f1f1';
const white = '#fff';
const lightGray = '#e8e8e8';
const softGray = '#d4d4d4';
const gray = '#7f7f7f';
const blue = '#0062FF';
const darkBlue = '#0950C2';
const green = '#3dd598';
const red = '#e24c55';
const black = '#000';
const softBlack = '#444';
const transparent = 'transparent';
const greenCheck = '#3ecc0e';
const yellowAlert = '#ffc200';

// HOME CARD COLORS
const softRed = '#FF5C6B';
const yellow = '#DEA164';
const purple = '#8883E9';
const mapPurple = '#A461D8';

const mainTheme = {
  primary: blue,
  secondary: white,
  textPrimary: white,
  textSecondary: blue,
  softGray,
  lightGray,
  gray,
  error: red,
  black,
  softBlack,
  white,
  btnPrimary: green,
  btnSecondary: transparent,
  appBg,
  darkBlue,
};

const alternativeTheme = {
  primary: white,
  secondary: blue,
  textPrimary: blue,
  textSecondary: white,
  softGray,
  gray,
  error: red,
  black,
  btnPrimary: transparent,
  btnSecondary: green,
};

const paperMainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: blue,
    error: red,
  },
};

export default {
  mainTheme,
  alternativeTheme,
  // HOME CARD COLORS
  softRed,
  yellow,
  purple,
  transparent,
  paperMainTheme,
  mapPurple,
  greenCheck,
  yellowAlert,
};
