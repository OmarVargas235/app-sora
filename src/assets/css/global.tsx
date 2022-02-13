import { createGlobalStyle } from 'styled-components';

import { gray, white, backgroundGray } from './colors';

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${gray};
        background-color: ${white};
    }

    h5, h6 {
        color: ${gray};
    }

    .background-gray {
        background-color: ${backgroundGray};
    }

    input {
        &::placeholder {
            color: ${gray} !important;
            opacity: 1 !important;
        }
    }
`;