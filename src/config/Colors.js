import { DefaultTheme } from 'react-native-paper';

const appBg = '#F2EBE5';
const white = '#F2EBE5';
const primary = '#647295';
const secondary = '#9F496E';
const aux = '#2B262D';

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
  primary,
  secondary,
  error: red,
  white,
  aux,
  btnPrimary: primary,
  btnSecondary: secondary,
  appBg,
};

const alternativeTheme = {
  primary: secondary,
  secondary: primary,
  error: red,
  white,
  aux,
  btnPrimary: secondary,
  btnSecondary: primary,
  appBg,
};

const paperMainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
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
