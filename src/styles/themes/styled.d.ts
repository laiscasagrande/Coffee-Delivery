//Arquivo de declaração para o styled-components, permitindo que o TypeScript reconheça os tipos do tema personalizado.
import 'styled-components'
import { defaultTheme } from '../themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}