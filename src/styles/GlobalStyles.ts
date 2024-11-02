import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inter, sans-serif;

    }

    body {
        color: black;
        background-color: #f3f3f3;

    }

    button {
        font-size: 0.9rem;
        border: none;
        font-weight: 500;
        background-color: white;
    }
`;
