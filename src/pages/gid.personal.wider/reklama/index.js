import React, { useState, useEffect } from 'react';
import { Wrapper, Wrapper01 } from './style';
import { TextTitle } from '../../../styles/textTitle/index.style'
import { Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom"
import ImgContainer from '../../../components/molecules/img.container';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Modal} from 'antd';
import Button from "../../../components/atom/button";
import true400 from '../../../assets/img/advertasing/truebg.svg';
import fols from '../../../assets/img/advertasing/fols.svg';
import ckashalok from '../../../assets/img/advertasing/kashlok.svg';
import { useTranslation } from 'react-i18next';
import { getApiResponse, postApiResponse } from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"

import { objApi } from "./external"
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
    const onSelectCard = (item)=>{setClassId(item)}
    const handleHistory = () => {history.push('/history')}
    const handleHistoryPayment = () => {history.push('/history/payment')}
    const handlePayment = () => {
        if(!classId)  Modal.error({ title:'Tariflardan birini tanlang!!',content: "To'lov qilish uchun mavjud tariflardan birini tanlang."});
        else postApiResponse('/api/posts/ad/', {tariff:classId}, setMyTarifPay)
    }
    useEffect(()=>{
        if(myTarifPay.error && myTarifPay.data?.data?.tariff[0] === 'not enough money') Modal.error({title:'Sizda yetarli mablag\' mavjud emas!!!', content:'Hisobingizni to\'ldiring'})
        else if(myTarifPay.success) {
            Modal.success({title:'Tarif sotib olish muvaffaqqiyatli amalga oshirildi !!!'})
            setCallback(prev=>!prev)
        }else if(myTarifPay.error && !myTarifPay.data?.data?.tariff[0] === 'not enough money'){
            Modal.error({title:"Xatolik yuz berdi", content:"Qaytadan urinib ko'ring." })
        }
    },[myTarifPay])
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
                                        <span className="spansa">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                                    </div>
                                    <div className="right-prise">
                                        <b>{myTarif?.data?.tariff?.price || '0'} so‘m</b>
                                        <b className="right-b">{moment(myTarif?.data?.top_until_date).format('DD.MM.YYYY') || '01.01.2000'} gacha</b>
                                    </div>
                                </Grid> :
                                <div style={{ padding: "20px 0" }}>Sizda tarif mavjud emas !!</div>
                        }
                    </Grid>
                }
                <div className="historybtn">
                    <Button className="btn-pey " margin="30px 0" type="outlined" onClick={handleHistory}>Tariflar tarixni ko’rish</Button>
                    <Button className="btn-pey " margin="30px 0" type="outlined" onClick={handleHistoryPayment}>To'lovlar tarixni ko’rish</Button>
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
                                    <Grid key={index} container spacing={1} justifyContent="center" onClick={()=>onSelectCard(item?.id)}
                                        className={classId === item.id ? "services " : "services services2"} >
                                        <Grid item md="1" sm="1" xs="1" className="grid__img">
                                            <ImgContainer className="img12" src={classId === item.id ? true400 : fols} />
                                        </Grid>
                                        <Grid item md="11" sm="11" xs="11" className="item_md_11">
                                            <div className="services_item" >
                                                <p className="services_1">{objApi[item?.name]}</p>
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                                            </div>
                                            <div className="somdiv">
                                                <b >{item?.price} so‘m</b>
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
                    To‘lov turini tanlang
                </TextTitle>
                <Grid container spacing={1}>
                    <Grid item md="6" className="cashlok">
                        <div>
                            <div className="pay pay2">
                                <CheckCircleIcon className="icon-g" />
                                <ImgContainer src={ckashalok} />
                                <p className="cashlok_text">Gits.uz xisob  <br />
                                    raqamidan to‘lash</p>
                                <p><b>Xisobingiz:</b> {myTarif?.data?.wallet || '0'} so’m</p>
                            </div>
                            <Button width="300px" margin="30px 0" type="outlined" onClick={()=>history.push('/reklama/pay')}>Xisobni to‘ldirish</Button>
                        </div>
                    </Grid>
                </Grid>
            </Wrapper>
            <div className="payment">
                <div className="btn-group">
                    <Button loader={myTarifPay?.loading} className="btn-pey" margin="30px 0" type="outlined">Bekor qilish</Button>
                    <Button loader={myTarifPay?.loading} className="btn_payment" onClick={handlePayment}>To‘lov qilish</Button>
                </div>
            </div>

        </Wrapper01>
    )
}
