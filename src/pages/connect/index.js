import React from 'react';
import { Wrapper } from './index.style';
import { TextTitle } from '../../styles/textTitle/index.style';
import { Grid } from '@material-ui/core';
import imgtg from '../../assets/img/connect/icontg.svg';
import imgfac from '../../assets/img/connect/iconfac.svg';
import imginsta from '../../assets/img/connect/insta.svg';
import InputLabel from '../../components/molecules/input.labeled';

export default function index() {
    return (
        <div>
            <Wrapper>
                <TextTitle top="100px" bottom="100px">
                    Biz bilan bog'lanish
                </TextTitle>
                <Grid container alignItems="center" spacing={1} diracti>
                    <Grid item md={5} >
                        <h3 className="grid1">Kontaktlarimiz</h3>
                        <p>+998 90 123 45 67</p>
                        <p>salom@gits.uz</p>
                        <p>Toshkent sh., Yunusobot tumani, <br /> Palonchi ko‘cha, 4 uy - 194 kv.</p>
                        <div>
                            <img className="icons" src={imgtg} alt="name" />
                            <img className="icons" src={imgfac} alt="facebook" />
                            <img className="icons" src={imginsta} alt="insta" />
                        </div>
                    </Grid>
                    <Grid item md={7} className="grid2" >
                        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50263675497!2d69.13928277818499!3d41.28251254609851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1631513329689!5m2!1sru!2s" width="690" height="530"     ></iframe>
                    </Grid>
                </Grid>
                <TextTitle top="100px" bottom="100px">
                    Savol jo‘natish
                </TextTitle>

                <Grid  container spacing={1} diracti>
                    <Grid justifyContent="center" item md={6} >
                        <InputLabel  width="300px" placeholder="Ismingizni kiriting" />
                    </Grid>
                    <Grid item md={6} >
                        <Grid item md={6} >
                            <InputLabel width="300px" placeholder="Familya kiriting" />
                        </Grid>
                    </Grid>
                </Grid>

            </Wrapper>
        </div>
    )
}
