import 'styled-components';
import { ThemeProps } from '../../infrastructure/themes/typing';

/**
 * @see https://styled-components.com/docs/api#create-a-declarations-file
 */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeProps {}
}
