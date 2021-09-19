import React from 'react'
import { AboutTravel, Wrapper } from './index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import Button from "../../components/atom/button";
import { Grid } from '@material-ui/core';
import CitiLeftPart from '../../components/organism/citiesLeftPart';
import ImgContainer from "../../components/molecules/img.container"
import ad from '../../assets/img/citiyes/ad.png'


export default function index() {
    return (
        <Wrapper>
            <AboutTravel>
                <TextTitle>Safar qalay o‘tdi?</TextTitle>
                <p className="aboutT__text">Safar qanday o’tgani haqida maqola yozib boshqalarga foyda ulashing ham daromadingizni kengaytiring!</p>

                <TextTitle width="50%" left="auto" right="auto" bottom="40px">
                    <Button>Maqola yozish</Button>
                </TextTitle>
            </AboutTravel>
            
            <Grid justifyContent="center" container spacing={1}>
                <Grid item md={7}>

                    <CitiLeftPart title="Xitoyga sayoxat"/>
                    <CitiLeftPart />
                    <CitiLeftPart />
                    <CitiLeftPart />


                </Grid>

                <Grid className="msa2" item md={4}>
                    <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>
                    <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>
                    <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>
                    <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>
                </Grid>
            </Grid>

        </Wrapper>
    )
}
