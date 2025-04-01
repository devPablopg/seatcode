import { commonColors } from './colors';
import { ThemeProps } from './typing';
import { fontFamily } from './fonts/index';

const darkerTheme: ThemeProps = {
  colors: {
    ...commonColors
  },
  fontFamily: {
    ...fontFamily
  }
};

export default darkerTheme;
