import React from 'react';
import { Wrapper, Wrapper01, Wrapper02 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "../../../components/atom/button";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



import true400 from '../../../assets/img/advertasing/truebg.svg';
import fols from '../../../assets/img/advertasing/fols.svg';
import ckashalok from '../../../assets/img/advertasing/kashlok.svg';
import click from '../../../assets/img/advertasing/click400.svg';
import payme from '../../../assets/img/advertasing/payme400.svg';
import paynet from '../../../assets/img/advertasing/paynet400.svg';
import { Link } from 'react-router-dom';


export default function Index() {



    return (
        <Wrapper01>
            <Wrapper>
                <TextTitle className="text-title" bottom="70px" top="70px">
                    Xizmatlarni tanlang
                </TextTitle>
                <Grid container spacing={1} justifyContent="center" className="services">
                    <Grid item md="1" className="grid__img">
                        <ImgContainer src={true400} />
                    </Grid>
                    <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>
                        <div>
                            <b>1 500 so‘m</b>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1} justifyContent="center" className="services cervises2">
                    <Grid item md="1" className="grid__img">
                        <ImgContainer src={fols} />
                    </Grid>
                    <Grid item md="11" className="item_md_11">

                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>

                        <div>
                            <b>1 500 so‘m</b>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={1} justifyContent="center" className="services cervises2">
                    <Grid item md="1" className="grid__img">
                        <ImgContainer src={fols} />
                    </Grid>
                    <Grid item md="11" className="item_md_11">
                        <div className="services_item" >
                            <p className="services_1">Ro'yxatning yuqori qismiga ko'tarish</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                        </div>
                        <div>
                            <b>1 500 so‘m</b>
                        </div>
                    </Grid>
                </Grid>

                <TextTitle className="text-title" bottom="70px" top="70px">
                    To‘lov turini tanlang
                </TextTitle>
                <Grid container spacing={1}>
                    <Grid item md="6" className="cashlok">
                        <div>
                            <div className="pay">
                                <CheckCircleIcon className="icon-g" />
                                <ImgContainer src={ckashalok} />
                                <p className="cashlok_text">Gits.uz xisob  <br />
                                    raqamidan to‘lash</p>
                                <p><b>Xisobingiz:</b> 20 000 so’m</p>
                            </div>
                            <Button width="300px" margin="30px 0" type="outlined">Xisobni to‘ldirish</Button>
                        </div>
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
                  <Link to="/pay"><Button className="btn-pey" margin="30px 0"    >To‘lov qilish</Button></Link>
                </div>
            </div>


            
        </Wrapper01>
    )
}
