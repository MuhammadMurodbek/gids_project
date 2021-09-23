import React from 'react'
import { Wrapper } from './index.style'
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import user from '../../assets/img/request/user2.svg';
import gps from '../../assets/img/request/gps2.svg';
import cal from '../../assets/img/request/cal2.svg';
import kim from '../../assets/img/request/kim.svg';
import narx from '../../assets/img/request/narx.svg';
import odamlar from '../../assets/img/request/odamlar.svg';
import til from '../../assets/img/request/til.svg';
import Button from "../../components/atom/button";
import ImageContainer from "../../components/molecules/img.container"
import FullRequest from '../../components/organism/fullRequest';


export default function index() {
    return (
        <Wrapper>
            <FullRequest 
                btnText="Arizaga javob qaytarish"
            />            
        </Wrapper>
    )
}
