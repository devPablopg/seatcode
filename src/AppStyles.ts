import { createGlobalStyle } from "styled-components";
const GlobalAppStyles = createGlobalStyle`
    body {
      overflow-x: hidden;
      min-width: 100%;
      min-height: 100%;
      position: relative;
      padding: 0;
      margin: 0;
      background-color: black;
    }
  
  * {
    font-family: ${(props) => props.theme.fontFamily.regular}, sans-serif;
    /* firefox */
    scrollbar-width: thin;
    /* chrome, safari, edge */
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 16px;
    }
  }
`;

export default GlobalAppStyles;
