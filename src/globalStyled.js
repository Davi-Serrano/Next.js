import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body :root{
        min-height: 100%;
    }
    :root{
        --blue: #032233;
        --gray-700: #222222;
        --gray-500: #707070;
    }
    body{
        background: #222222;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    a{
        color: white;
        text-decoration: none;
    }
`;
