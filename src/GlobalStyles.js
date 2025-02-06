import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import palette from './lib/styles/palette';
import { rem } from './lib/styles/variables';

const GlobalStyles = createGlobalStyle`
${reset}
button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font: inherit;
  text-align: left;
}
a {
  color: inherit;
  text-decoration: none;
}
input {
  border: none;
  outline: none;
  font: inherit;
  font-size: 1rem;
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  min-width: 0px;
}
body {
  font-family: 'Noto Sans KR';
  height: 100%;
}
* {
  color: ${palette.gray[9]};
  box-sizing: border-box;
}

  `;
export default GlobalStyles;
