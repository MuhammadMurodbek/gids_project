import React from 'react';
import { Wrapper } from './style';
import { Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import user from '../../../assets/img/request/user1.svg';
import cal from '../../../assets/img/request/cal.svg';
import gps from '../../../assets/img/request/gps.svg';
import moment from "moment"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Index(props) {

    const {t} = useTranslation()

    const { id, manzil, name, gpss, dan, gacha, sana } = props;
    const token = JSON.parse(localStorage.getItem("user_token"))
    console.log(id)
    
    return (
        <Wrapper>
            <div>
                <Link to={ token?.role === 'simple_user' ? 'gid-personal' : `/fullrequest/${id}`} className="Link">
                    <div className="responsText">
                        <div className="title-respons11">
                            <div>
                                <b className="id">Id:</b>
                                <b>{id}</b>
                            </div>

                        </div>
                        <p className="Rp">{manzil} </p>
                    </div>

                    <div className="responsFooter">
                        <Grid container spacing={1} >
                            <Grid item md={4}>
                                <img src={user} />
                                <span className="textS" >{name}</span>
                            </Grid>
                            <Grid item md={3}>
                                <img src={gps} /> 
                                <span className="textS" >{gpss}</span>
                            </Grid>
                            <Grid item md={4} className="item33">
                                <img src={cal} />
                                <span className="textS " >
                                    <span >
                                        {moment(dan).format('DD-MM-YYYY')} <ArrowForwardIosIcon className="a11" /> {moment(gacha).format('DD-MM-YYYY')}
                                    </span>
                                </span>
                            </Grid>
                            <Grid item md={1}>
                                <div className="sana">{sana}</div>
                            </Grid>
                        </Grid>
                    </div>
                </Link>
            </div>

        </Wrapper>
    )
}
