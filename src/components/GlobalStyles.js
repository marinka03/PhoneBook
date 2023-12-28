import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    /* background-color: #FFEDFF; */ //before update
    /* background-color: #7B5A8C; */
    background-color: #DEB887;
     /* background-color: cadetblue; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  ul {
  margin: 0;
  list-style: none;
}
img {
  object-fit: cover;
}
input{
  font-size: revert;
}
h1,h2,h3,h4,h5{
  margin: 0;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
}`;
export default GlobalStyles;
