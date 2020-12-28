import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = height < width ? height : width;
const screenHeight = width < height ? height : width;
const headerSize = screenHeight / 6;

const spacingMinimun = 4;
const spacingSM = 8;
const spacingMD = 12;
const spacingLG = 24;
const spacingXLG = 36;

const subHeaderHeight = 32;

const refresherSize = 80;

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
  spacingMinimun,
  spacingSM,
  spacingMD,
  spacingLG,
  spacingXLG,
  refresherSize,
  headerSize,
};
