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

export default function index() {
    return (
        <Wrapper>
            <Grid container spacing={1} direction="row" justifyContent="center">
                <Grid className="gridTitle" item md={4}>
                    <b>Id: </b>
                    <b>#071364754</b>
                </Grid>
                <Grid className="gridTitle2" item md={6}>
                    <p className="comback"> <ArrowBackIcon className="arrole" />  arizlar ro’yhatiga qaytish</p>
                </Grid>
            </Grid>
            <Grid container spacing={1} diraction="row" justifyContent="center">
                <Grid item md={4}>
                    <div className="div1title">Tafsilotlar</div>
                    <div className="tafsilot-text">
                        <b><ImageContainer src={user} /></b>
                        <b>E’lon beruvchi: </b>
                        <p>Abdusattor</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={gps} /></b>
                        <b>Shahar: </b>
                        <p>Angliya, London </p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={cal} /></b>
                        <b>Sana: </b>
                        <p>23.01.2021 || 30.01.2021</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={kim} /></b>
                        <b>Narx (gacha): </b>
                        <p>50$ kuniga</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={narx} /></b>
                        <b>Kim kerak: </b>
                        <p>Tarjimon</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={odamlar} /></b>
                        <b>Tillar: </b>
                        <p>Rus tili, Ingiliz tili</p>
                    </div>
                    <div className="tafsilot-text">
                        <b> <ImageContainer src={til}/></b>
                        <b>Odamlar soni: </b>
                        <p>4 kishi</p>
                    </div>
                    <Button type="button">Arizaga javob qaytarish</Button>

                    
                </Grid>

                <Grid className="grid6text" item md={6}>
                    <div className="div1title">Ariza matni</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sodales tristique dolor turpis. Non pretium ante gravida suscipit faucibus lectus aliquet nullam. Justo sapien quam tincidunt lectus laoreet lacus eu sit. Aliquam nulla pellentesque arcu est ullamcorper pretium, elit.</p>

                    <p>Nunc adipiscing vel praesent urna. Vulputate amet phasellus lobortis at cras pellentesque consectetur purus. Lectus sem aliquet hendrerit cras adipiscing sit nisl diam. Volutpat pretium semper lacus, amet aliquam orci. Quis semper posuere nulla sit eu feugiat eget. Donec dignissim sed et mi diam eu. Tincidunt id convallis euismod enim mauris, facilisis faucibus pharetra.</p>

                    <p>
                    At massa arcu ut nibh nullam netus. At mi non viverra eu scelerisque mollis id. Diam nec sed hendrerit lectus libero mattis amet. Sit mi pharetra felis, pretium et ac quisque dolor. Massa elit, elit vitae  . Non ultrices senectus tellus etiam pharetra rhoncus erat nulla. Dictum purus ante nibh elementum eu etiam vivamus in.
                    </p>
                </Grid>
            </Grid>
        </Wrapper>
    )
}
