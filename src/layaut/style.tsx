import styled from 'styled-components';

import { white, greenLight, gray } from '../assets/css/colors';

export const LayautFormStyle = styled.section`
    border: 1px solid rgba(0,0,0,.1);
    width: 380px;
    padding: 15px 35px;
    margin: 0 auto;
    background-color: ${white};

    img {
        width: 200px;
        height: 160px;
    }

    .btn {
        background: ${greenLight};
        color: ${gray};
        fill: rgb(61, 70, 77);
        margin-bottom: 26px;

        &:hover {
            color: ${white};
        }
    }
`;