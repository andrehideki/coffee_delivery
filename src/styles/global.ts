import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        border-collapse: collapse;
    }

    input {
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme["base-label"]};;
        background: ${(props) => props.theme["base-input"]};
    }
`;