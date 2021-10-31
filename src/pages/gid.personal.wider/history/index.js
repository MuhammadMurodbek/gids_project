import React from 'react'
import { Wrapper } from './style'
import { TextTitle } from '../../../styles/textTitle/index.style'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../../components/molecules/img.container';
import true400 from '../../../assets/img/advertasing/truebg.svg';

export default function Index() {
    return (
        <Wrapper>

            <Link to="/reklama" className="link-text"> <ArrowBackIcon className="arroles11" />  arizlar ro’yhatiga qaytish</Link>

            <TextTitle className="text-title" bottom="50px" top="50px">
                To’lovlar tarixi
            </TextTitle>


            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            
            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            
            <Grid container spacing={1} justifyContent="center" className="services history">
                <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                        <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                    </div>
                    <div className="right-prise">
                        <b>1 500 so‘m</b>
                        <b className="right-b">22.05.2.21 gacha</b>
                    </div>
                </Grid>
            </Grid>
            
            



        </Wrapper>
    )
}
