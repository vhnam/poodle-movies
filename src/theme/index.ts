import { ThemeConfig, extendTheme } from '@chakra-ui/react';

import styles from './styles';

const config: ThemeConfig = {
  cssVarPrefix: 'poodle',
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles,
  config,
});

export default theme;
