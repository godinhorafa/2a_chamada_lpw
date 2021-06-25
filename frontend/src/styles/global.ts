import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  background: #241571;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 4px;
}
`;
