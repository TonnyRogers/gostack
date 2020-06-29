import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700;900&display=swap');

  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #353940;
    color: #FFF;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;
