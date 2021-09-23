import React from 'react'
import { Wrapper, Request } from './index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core'
import InDate from '../../components/molecules/dateIn'
import user from '../../assets/img/request/user1.svg';
import cal from '../../assets/img/request/cal.svg';
import gps from '../../assets/img/request/gps.svg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "../../components/atom/button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


export default function index() {
    return (
        <Wrapper>
            <TextTitle top="100px" bottom="50px">
                Arizalar ro’yhati
            </TextTitle>
            <InDate />
            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={3}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <div className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </div>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>
            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt" />
                            <div className="textS" >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </div>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>
            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt" />
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <div className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </div>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <span className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </span>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <span className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </span>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <span className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </span>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <span className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </span>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt"/>
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <span className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </span>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <Request>
                <div className="responsText">
                    <b className="id">Id:</b>
                    <b>#071364754</b>
                    <p className="Rp">London shahridagi klinikada ikki soat davomida tarjima.</p>
                </div>
                <div className="responsFooter">
                    <Grid container spacing={1} diraction="row">
                        <Grid item md={2}>
                            <img src={user} alt="alt"/>
                            <span className="textS" >Abdug’ani</span>
                        </Grid>
                        <Grid item md={2}>
                            <img src={gps} alt="alt" />
                            <span className="textS" >Angliya, London </span>
                        </Grid>
                        <Grid item md={3} className="item33">
                            <img src={cal} alt="alt"/>
                            <span className="textS " >
                                <span >
                                    23.01.2021 <ArrowForwardIosIcon className="a11" />  30.01.2021
                                </span>
                            </span>
                        </Grid>

                        <Grid item md={4} justifyContent="flex-end">
                            <div className="sana">20.06.21</div>
                        </Grid>
                    </Grid>
                </div>
            </Request>

            <div className="divbtns">
                <Button type="outlined" className="davomi">Davomi <ArrowForwardIcon className="arrovicon" /></Button>
            </div>

        </Wrapper>
    )
}
