import { createGlobalStyle } from 'styled-components'

const GlobalStyle =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body{
    height: 100%;
    background-color: #F8F8F8;
    color: #29292e;
  }

  body, input, button, textarea{
    font: 400 1em 'Poppins', sans-serif;
  }
`

export default GlobalStyle;