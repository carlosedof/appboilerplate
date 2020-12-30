import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = height < width ? height : width;
const screenHeight = width < height ? height : width;
const headerSize = screenHeight / 6;
const subHeaderHeight = 32;
const refresherSize = 80;

const spacing = {
  minimum: 4,
  sm: 8,
  md: 12,
  lg: 24,
  xlg: 36,
};

const fontSize = {
  xxxsm: '12px',
  xxsm: '14px',
  xsm: '16px',
  sm: '19px',
  md: '22px',
  lg: '24px',
  xlg: '26px',
  xxlg: '28px',
};

export default {
  fontSize,
  screenWidth,
  screenHeight,
  subHeaderHeight,
  spacing,
  refresherSize,
  headerSize,
};
