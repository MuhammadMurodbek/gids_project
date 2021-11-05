import React from 'react';
import { Wrapper } from './style';
import { Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import user from '../../../assets/img/request/user1.svg';
import cal from '../../../assets/img/request/cal.svg';
import gps from '../../../assets/img/request/gps.svg';
// import ptich from '../../../assets/img/request/rozi.svg';
import moment from "moment"
import { Link } from 'react-router-dom';

export default function Index(props) {
    const { id, manzil, name, gpss, dan, gacha, sana } = props;
    return (
        <Wrapper>
            <div>
                <Link to="/fullrequest" className="Link">
                    <div className="responsText">
                        <div className="title-respons11">
                            <div>
                                <b className="id">Ariza raqami:</b>
                                <b>{id}</b>
                            </div>

                        </div>
                        <p className="Rp">{manzil} </p>
                    </div>

                    <div className="responsFooter">
                        <Grid container spacing={1} diraction="row">
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
                            <Grid item md={1} justifyContent="flex-end">
                                <div className="sana">{sana}</div>
                            </Grid>
                        </Grid>
                    </div>
                </Link>
            </div>

        </Wrapper>
    )
}
