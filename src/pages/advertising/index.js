import React from 'react';
import { Wrapper } from './style';
import { TextTitle } from '../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../components/molecules/img.container';

import true400 from '../../assets/img/advertasing/truebg.svg';
import fols from '../../assets/img/advertasing/fols.svg';
import ckashalok from '../../assets/img/advertasing/kashlok.svg';
  

export default function Index() {
    return (
        <Wrapper>
            <TextTitle className="text-title"     bottom="70px" top="70px">
                Xizmatlarni tanlang
            </TextTitle>
            <Grid container spacing={1} justifyContent="center">
                <Grid item md="1">
                <ImgContainer/>
                </Grid>
                <Grid item md="11">
                 
                </Grid>
            </Grid>
        </Wrapper>
    )
}
