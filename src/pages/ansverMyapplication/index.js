import React from 'react'
import Myapplication from '../../components/organism/fullRequest';
import Button from "../../components/atom/button";
import { Wrapper } from './style';
import { Grid } from '@material-ui/core';
import ImgContainer from "../../components/molecules/img.container"
import imggid from '../../assets/img/answerMy-application/imggid.svg'
import star from '../../assets/img/answerMy-application/star.svg'
import sms from '../../assets/img/answerMy-application/sms.svg'
import {mediaBtn} from "../../custom/global.media.variables"
export const mediaImage = {
    m_width:"960px",
    m_m_width:"280px",
    m_m_text_align:"center",
}
export default function index() {
    return (
        <Wrapper>
            <Myapplication
                btnText="Arizani taxrirlash"
            />
            <div className="btnBack">
                <Button type="outlined" >
                    Arizani bekor qilish
                </Button>
            </div>
            <br /><br />
            <div className="title-answers">
                Quyidagi arizangizga javob qaytargan Gid/Tarjimonlardan birini tanlang va u bilan bog’laning
            </div>
            <div className="answers"  >
                <Grid container spacing={1} direction="row" justifyContent="center"
                    className="grid-container">
                    <Grid item xs={12} md={1} className="item">
                        <ImgContainer {...mediaImage} src={imggid} />
                    </Grid>
                    <Grid item xs={12} md={11} className="item">
                        <div className="feedback-div">
                            <h4><b>Abdusattor Ergashev </b></h4>
                            <div className="feedback">
                                <div> <ImgContainer src={star} /></div>
                                <div> <span>10.0/10</span></div>
                                <div className="imgss"> <ImgContainer src={sms} /></div>
                                <div> <span>Fikrlar: 34</span></div>
                            </div>
                        </div>
                        <div className="tarjimon">
                            <span>33 yosh</span>|
                            <span>Tarjimon</span>
                        </div>
                        <div className="feedbeeck-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.

                        </div>
                        <div className="btn-groups">
                            <Button type="outlined">O’chirish</Button>
                            <Button className="btn-Pview">Profilni ko’rish</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="answers"  >
                <Grid container spacing={1} direction="row" justifyContent="center"
                    className="grid-container">
                    <Grid item xs={12} md={1} className="item">
                        <ImgContainer {...mediaImage} src={imggid} />
                    </Grid>
                    <Grid item xs={12} md={11} className="item">
                        <div className="feedback-div">
                            <h4><b>Abdusattor Ergashev </b></h4>
                            <div className="feedback">
                                <div> <ImgContainer src={star} /></div>
                                <div> <span>10.0/10</span></div>
                                <div className="imgss"> <ImgContainer src={sms} /></div>
                                <div> <span>Fikrlar: 34</span></div>
                            </div>
                        </div>
                        <div className="tarjimon">
                            <span>33 yosh</span>|
                            <span>Tarjimon</span>
                        </div>
                        <div className="feedbeeck-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.

                        </div>
                        <div className="btn-groups">
                            <Button type="outlined">O’chirish</Button>
                            <Button className="btn-Pview">Profilni ko’rish</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="answers"  >
                <Grid container spacing={1} direction="row" justifyContent="center"
                    className="grid-container">
                    <Grid item xs={12} md={1} className="item">
                        <ImgContainer {...mediaImage} src={imggid} />
                    </Grid>
                    <Grid item xs={12} md={11} className="item">
                        <div className="feedback-div">
                            <h4><b>Abdusattor Ergashev </b></h4>
                            <div className="feedback">
                                <div> <ImgContainer src={star} /></div>
                                <div> <span>10.0/10</span></div>
                                <div className="imgss"> <ImgContainer src={sms} /></div>
                                <div> <span>Fikrlar: 34</span></div>
                            </div>
                        </div>
                        <div className="tarjimon">
                            <span>33 yosh</span>|
                            <span>Tarjimon</span>
                        </div>
                        <div className="feedbeeck-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.

                        </div>
                        <div className="btn-groups">
                            <Button type="outlined">O’chirish</Button>
                            <Button className="btn-Pview">Profilni ko’rish</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="answers"  >
                <Grid container spacing={1} direction="row" justifyContent="center"
                    className="grid-container">
                    <Grid item xs={12} md={1} className="item">
                        <ImgContainer {...mediaImage} src={imggid} />
                    </Grid>
                    <Grid item xs={12} md={11} className="item">
                        <div className="feedback-div">
                            <h4><b>Abdusattor Ergashev </b></h4>
                            <div className="feedback">
                                <div> <ImgContainer src={star} /></div>
                                <div> <span>10.0/10</span></div>
                                <div className="imgss"> <ImgContainer src={sms} /></div>
                                <div> <span>Fikrlar: 34</span></div>
                            </div>
                        </div>
                        <div className="tarjimon">
                            <span>33 yosh</span>|
                            <span>Tarjimon</span>
                        </div>
                        <div className="feedbeeck-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.

                        </div>
                        <div className="btn-groups">
                            <Button className="btn"type="outlined">O’chirish</Button>
                            <Button className="btn-Pview">Profilni ko’rish</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Wrapper>
    )
}
