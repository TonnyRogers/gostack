import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: #7159c1;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: var(--primary-color);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    color: #222;
    font-family:Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
