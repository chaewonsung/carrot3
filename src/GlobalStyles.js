import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import palette from './lib/styles/palette';

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
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  min-width: 0px;
  font-size: inherit;
}
input[type='number'] {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
}
* {
  color: inherit;
  box-sizing: border-box;
  letter-spacing: -0.02em;
  --market-img-hover-scale-to: 1.05;
}
body {
  font-family: 'Noto Sans KR';
  height: 100%;
  color: ${palette.gray[9]};
  &:has(#modal-root > *), &:has([aria-expanded='true']) {
    overflow: hidden;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
main {
  overflow: hidden;
}
img {
  object-fit: cover;
}
  `;
export default GlobalStyles;
