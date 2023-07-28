import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}
    *, *::before, *::after{
        box-sizing: border-box;
    }
    html{
        font-size: 5vw;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'YouTubeSansBold';
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`;

export default GlobalStyle;