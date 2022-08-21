import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
  margin: 0;
  height: 100vh;
  padding:0 80px;
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 background:linear-gradient(#014576,#0B7AA7,#4CB1A3,#B1DB91); 
  background-repeat: no-repeat;
  background-size:cover; 
}


h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
