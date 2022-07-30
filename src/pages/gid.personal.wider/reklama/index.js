import React, { useState, useEffect } from 'react';
import { Wrapper, Wrapper01 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Modal } from 'antd';
import Button from "../../../components/atom/button";
import true400 from '../../../assets/img/advertasing/truebg.svg';
import fols from '../../../assets/img/advertasing/fols.svg';
import ckashalok from '../../../assets/img/advertasing/kashlok.svg';
import { useTranslation } from 'react-i18next';
import { getApiResponse, postApiResponse } from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"

import { objApi, objApiText } from "./external"
import moment from 'moment';    
export default function Index() {
    const history = useHistory()
    const { t } = useTranslation()
    const [classId, setClassId] = useState(null)
    const [callback, setCallback] = useState(false)
    const [tarif, setTarif] = useState({ data: null, error: false, success: false, loading: false })
    const [myTarif, setMyTarif] = useState({ data: null, error: false, success: false, loading: false })
    const [myTarifPay, setMyTarifPay] = useState({ data: null, error: false, success: false, loading: false })
    useEffect(() => {
        getApiResponse('/api/posts/tariff/', setTarif)
        getApiResponse('/api/posts/my-tariff/', setMyTarif)
    }, [callback])
    const onSelectCard = (item) => { setClassId(item) }
    const handleHistory = () => { history.push('/history') }
    const handleHistoryPayment = () => { history.push('/history/payment') }
    const handlePayment = () => {
        if (!classId) Modal.error({ title: t("tariflar.tarifTanlang"), content: t("tariflar.TolovTanlang") });
        else postApiResponse('/api/posts/ad/', { tariff: classId }, setMyTarifPay)
    }
    useEffect(() => {
        if (myTarifPay.error && myTarifPay.data?.data?.tariff[0] === 'not enough money') Modal.error({ title: t("reklama.yetarliEmas"), content: t("reklama.hisobToldiring")})
        else if (myTarifPay.success) {
            Modal.success({ title: t("tariflar.tarifTolov") })
            setCallback(prev => !prev)
        } else if (myTarifPay.error && !myTarifPay.data?.data?.tariff[0] === 'not enough money') {
            Modal.error({ title: t("tariflar.xatolik"), content: t("tariflar.qaytaUrining")})
        }
    }, [myTarifPay])
    // console.log(myTarifPay)
    return (
        <Wrapper01>
            <Wrapper>
                <TextTitle className="text-title" bottom="70px" top="70px">
                    {t("reklama.Hozirgi")}
                </TextTitle>
                {myTarif.loading && <Spinner />}
                {
                    myTarif.success &&
                    <Grid container spacing={1} justifyContent="center" className="services history">
                        {
                            myTarif.data?.is_top ?
                                <Grid item md="11" sm="11" xs="11" className="item_md_11">
                                    <div className="services_item" >
                                        <p className="services_1">{objApi[myTarif.data?.tariff?.name] || 'Yangi tarif'}</p>
                                        <span className="spansa">{objApiText[myTarif.data?.tariff?.name]}</span>
                                    </div>
                                    <div className="right-prise">
                                        <b>{myTarif?.data?.tariff?.price || '0'} {t("reklama.som")}</b>
                                        <b className="right-b">{t("tariflar.muddati")} {moment(myTarif?.data?.top_until_date).format('DD.MM.YYYY') || '01.01.2000'} {t("tariflar.gacha")}</b>
                                    </div>
                                </Grid> :
                                <div style={{ padding: "20px 0" }}>{t("tariflar.MavjudEmas")}</div>
                        }
                    </Grid>
                }
                <div className="historybtn">
                    <Button className="btn-pey " width="250px" margin="0px 0" type="outlined" onClick={handleHistory}>{t("reklama.tarifKorish")}</Button>
                    <Button className="btn-pey " width="250px" margin="0px 0" type="outlined" onClick={handleHistoryPayment}>{t("reklama.tolovKorish")}</Button>
                </div>

                <TextTitle className="text-title text-title11" bottom="70px" top="70px">
                    {t("reklama.hizmatlarni")}
                </TextTitle>
                {tarif.loading && <Spinner />}
                {
                    tarif.success &&
                    <>
                        {
                            tarif.data?.length > 0 ?
                                tarif.data?.map((item, index) => (
                                    <Grid key={index} container spacing={1} justifyContent="center" onClick={() => onSelectCard(item?.id)}
                                        className={classId === item.id ? "services " : "services services2"} >
                                        <Grid item md="1" sm="1" xs="1" className="grid__img">
                                            <ImgContainer className="img12" src={classId === item.id ? true400 : fols} />
                                        </Grid>
                                        <Grid item md="11" sm="11" xs="11" className="item_md_11">
                                            <div className="services_item" >
                                                <p className="services_1">{objApi[item?.name]}</p>
                                                <span>{objApiText[item?.name]}</span>
                                            </div>
                                            <div className="somdiv">
                                                <b >{item?.price} {t("reklama.som")}</b>
                                            </div>
                                        </Grid>
                                    </Grid>
                                )) :
                                <Grid container spacing={1} justifyContent="center" className="services history">
                                    <div style={{ padding: "20px 0" }}>Sizda tarif servislari mavjud emas !!</div>
                                </Grid>

                        }
                    </>
                }

                <TextTitle className="text-title" bottom="50px" top="50px">
                    {t("reklama.tolovturi")}
                </TextTitle>
                <Grid container spacing={1}>
                    <Grid item md="6" className="cashlok">
                        <div>
                            <div className="pay pay2">
                                <CheckCircleIcon className="icon-g" />
                                <ImgContainer src={ckashalok} />
                                <p className="cashlok_text">{t("tariflar.hisobdan")} <br />
                                    {t("tariflar.tolovQilish")}</p>
                                <p><b>{t("tariflar.hisobMablag")}</b> <br /> {myTarif?.data?.wallet || '0'} {t("tariflar.som")}</p>
                            </div>
                            <Button width="300px" margin="30px 0" type="outlined" onClick={() => history.push('/reklama/pay')}>{t("hisobni_toldirish.hisobni_toldirish")}</Button>
                        </div>
                    </Grid>
                </Grid>
            </Wrapper>
            <div className="payment">
                <div className="btn-group">
                    <Button loader={myTarifPay?.loading} className="btn-pey" margin="30px 0" type="outlined">{t("reklama.bekor_qilish")}</Button>
                    <Button loader={myTarifPay?.loading} className="btn_payment" onClick={handlePayment}>{t("hisobni_toldirish.tolovQilish")}</Button>
                </div>
            </div>

        </Wrapper01>
    )
}
