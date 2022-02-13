import styled from 'styled-components';

import { white, greenLight, gray, darkGray } from '../assets/css/colors';
import { IStyleListItem } from './interfaces';

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

export const StyleNavbar = styled.div`
    transition: color .2s ease-in-out;
    
    .text-navbar {
    
        &:hover {
            color: ${greenLight};
        }
    }

    .menu {
        transition: background-color .2s ease-in-out;

        &:hover {
            background-color: rgba(254, 254, 254, .8);
            color: ${darkGray};
        }
    }
`;

export const StyleListItem = styled.div`
    .rotate-180 {
        transform: rotateZ(180deg);
    }

    input {
        opacity: ${({open}:IStyleListItem) => open ? 1 : 0};

        &:focus-visible {
            outline: none;
        }
    }

    span {
        color: #343A40;
    }
`;

export const StyleInput = styled.div`
    input {
        padding: ${({isPadding}:{isPadding:boolean}) => isPadding ? '10px 12px' : '5px 12px'};
    }
`;