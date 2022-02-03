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

export const ScreenLoadingStyle = styled.div`
    min-height: 100vh;
    background-color: ${greenLight};
    overflow: hidden;

    .box {
        left: calc(50% - 20px);
    }
`;

export const StyleBlockUI = styled.div`
    background-color: rgba(254, 254, 254, .4);
    min-height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
`;