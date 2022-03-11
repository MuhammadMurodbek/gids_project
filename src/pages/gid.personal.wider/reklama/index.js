import React, { useState } from 'react';
import { Wrapper, Wrapper01 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "../../../components/atom/button";
import true400 from '../../../assets/img/advertasing/truebg.svg';
import fols from '../../../assets/img/advertasing/fols.svg';
import ckashalok from '../../../assets/img/advertasing/kashlok.svg';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export default function Index() {

    const {t} = useTranslation()
    const [class1, setClass1] = useState(false)

    function tanlash() {
        setClass1(true)
        console.log(class1)
        console.log("asdfsdf")
    }


    return (
        <Wrapper01>
            <Wrapper>
                <TextTitle className="text-title" bottom="70px" top="70px">
                    {t("reklama.Hozirgi")}
                </TextTitle>
                <Grid container spacing={1} justifyContent="center" className="services history">

                    <Grid item md="11" sm="11" xs="11" className="item_md_11">
                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span className="spansa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>
                        <div className="right-prise">
                            <b>1 500 so‘m</b>
                            <b className="right-b">22.05.2.21 gacha</b>
                        </div>
                    </Grid>
                </Grid>
                <div className="historybtn">
                    <Link to="/history">
                        <Button className="btn-pey " margin="30px 0" type="outlined">Tarixni ko’rish</Button>
                    </Link>
                </div>



                <TextTitle className="text-title text-title11" bottom="70px" top="70px">
                    {t("reklama.hizmatlarni")}
                </TextTitle>

                <Grid container spacing={1} justifyContent="center" onClick={tanlash}
                    className={class1 ? "services " : "services services2"} >
                    <Grid item md="1" sm="1" xs="1" className="grid__img">
                        <ImgContainer className="img12" src={fols} />
                    </Grid>
                    <Grid item md="11" sm="11" xs="11" className="item_md_11">
                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>
                        <div className="somdiv">
                            <b >1 500 so‘m</b>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={1} justifyContent="center" className="services cervises2">
                    <Grid item md="1" sm="1" xs="1" className="grid__img">
                        <ImgContainer src={fols} />
                    </Grid>
                    <Grid item md="11" sm="11" xs="11" className="item_md_11">
                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>
                        <div className="somdiv">
                            <b>1 500 so‘m</b>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={1} justifyContent="center" className="services cervises2">
                    <Grid item md="1" sm="1" xs="1" className="grid__img">
                        <ImgContainer src={fols} />
                    </Grid>
                    <Grid item md="11" sm="11" xs="11" className="item_md_11">
                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>
                        <div className="somdiv">
                            <b>1 500 so‘m</b>
                        </div>
                    </Grid>
                </Grid>

                <TextTitle className="text-title" bottom="50px" top="50px">
                    To‘lov turini tanlang
                </TextTitle>


                <Grid container spacing={1}>
                    <Grid item md="6" className="cashlok">
                        
                        <div>
                            <div className="pay pay2">
                                <CheckCircleOutlineIcon className="icons-w" />
                                <ImgContainer src={ckashalok} />
                                <p className="cashlok_text">Gits.uz xisob  <br />
                                    raqamidan to‘lash</p>
                                <p><b>Xisobingiz:</b> 20 000 so’m</p>
                            </div>
                            <Button width="300px" margin="30px 0" type="outlined">Xisobni to‘ldirish</Button>
                        </div>
                    </Grid>
                </Grid>

            </Wrapper>
            <div className="payment">
                <div className="btn-group">
                    <Button className="btn-pey" margin="30px 0" type="outlined">Bekor qilish</Button>
                    <Link to="/pay"><Button className="btn-pey" margin="30px 0">To‘lov qilish</Button></Link>
                </div>
            </div>

        </Wrapper01>
    )
}
