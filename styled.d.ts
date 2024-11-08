import 'styled-components';

import { type CustomTheme } from './src/shared/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
