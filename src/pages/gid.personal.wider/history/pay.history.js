import Reac, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { TextTitle } from '../../../styles/textTitle/index.style'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { getApiResponse } from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"
import moment from "moment"
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

export default function Index() {
    const { t } = useTranslation()
    const [historyState, setHistoryState] = useState({ data: null, error: false, success: false, loading: false })

    useEffect(() => {
        getApiResponse('/api/posts/payment-history/', setHistoryState)
    }, [])
    // console.log(historyState)
    return (
        <Wrapper>

            <Link to="/reklama" className="link-text"> <ArrowBackIcon className="arroles11" /> {t("reklama.rekgaQaytish")}  </Link>
            <TextTitle className="text-title" bottom="50px" top="50px">
                {t("reklama.tolovlar")}
            </TextTitle>

            { historyState.loading && <Spinner />}
            {  
                historyState?.success &&
                <>
                    {
                        historyState.data?.length > 0 ?
                            historyState?.data?.map((item, index) => (
                                <Grid key={index} container spacing={1} justifyContent="center" className="services history">
                                    <Grid item md="11" xs="12" className="item_md_11">
                                        <div className="services_item" >
                                            <p className="services_1">{t("hisobni_toldirish.tolovlar")} No.{item.id}</p>
                                            {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span> */}
                                            <div className="right-prise">
                                            <b className="price_part">{t("tariflar.tolovSumma")} {item?.total_sum || '0'} {t("reklama.som")}</b>
                                            <b className="right-b">{t("tariflar.olinganSana")} {moment(item?.payed_time).format('DD.MM.YYYY HH:mm') || '01.01.2000'}  </b>
                                        </div>
                                        </div>
                                     
                                    </Grid>
                                </Grid>
                            )) :
                            <Grid container spacing={1} justifyContent="center" className="services history">
                                <div style={{ padding: '20px 0' }}>{t("hisobni_toldirish.tolovlarTarixi")}</div>
                            </Grid>
                    }
                </>
            }
        </Wrapper>
    )
}
