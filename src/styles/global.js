import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    font: 400 14px 'Roboto', sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button, textarea {
    font: 400 14px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 68px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    resize: vertical;
    width: 100%;
    min-height: 140px;
    height: 68px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }

`;
