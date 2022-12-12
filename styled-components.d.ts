import theme from 'styles/theme'

//isso e uma inferencia de tipos 

type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme{}
}