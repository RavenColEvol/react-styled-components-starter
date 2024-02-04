import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    //* rem scaling
    font-size: 62.5%;
  }

  body {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 1.6rem;
  }
`