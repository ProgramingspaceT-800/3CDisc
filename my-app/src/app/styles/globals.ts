import theme from './theme'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 0;
    font-family: Arial, sans-serif;
    background: black;
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`