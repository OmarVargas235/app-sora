import React, { ReactChildren, ReactChild } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { LayautFormStyle } from './style';
import Logo from '../assets/images/logo.png';
import ButtonPage from '../layaut/Button';

interface IProps extends RouteComponentProps<any> {
    children:ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
    title: string;
    textBtn: string;
    textLink: string;
    path:string;
    onSubmit: (model:any)=>void;
    handleSubmit: any;
}

const LayautFormLoginAndReset = ({ history, children, title, textBtn, textLink, path, onSubmit, handleSubmit }:IProps):JSX.Element => (
    <div className='flex justify-center items-center min-h-screen background-gray'>
        <LayautFormStyle className='flex flex-col justify-center items-center'>
            <img src={Logo} alt="logo" className='mb-10' />
            
            <div className='w-full'>
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                    className='font-black text-2xl'
                >
                    {title}
                </Typography>

                <form
                    className='flex flex-col justify-center items-center w-full'
                    onSubmit={handleSubmit(onSubmit)}
                >

                    {children}

                    <ButtonPage
                        textBtn={textBtn}
                    />
                </form>
            </div>

            <div className='w-full'>
                <Link
                    className="cursor-pointer"
                    onClick={() => history.push(path)}
                >{textLink}</Link>
            </div>
        </LayautFormStyle>
    </div>
);

export default withRouter(LayautFormLoginAndReset);
