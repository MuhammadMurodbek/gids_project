import Reac, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { TextTitle } from '../../../styles/textTitle/index.style'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { getApiResponse } from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"
import { objApi } from "../reklama/external"
import { useTranslation } from 'react-i18next'
import moment from "moment"

export default function Index() {
    const {t} = useTranslation()
    const [historyState, setHistoryState] = useState({ data: null, error: false, success: false, loading: false })

    useEffect(() => {
        getApiResponse('/api/posts/ad-history/', setHistoryState)
    }, [])
 
      const objApi2 = {
        one_week:t("tariflar.birHafta"),
        two_week:t("tariflar.ikkiHafta"),
        one_month:t("tariflar.birOy")
    }

console.log("ddd ");
    return (
        <Wrapper>

            <Link to="/reklama" className="link-text"> <ArrowBackIcon className="arroles11" /> {t("reklama.rekgaQaytish")}</Link>
            <TextTitle className="text-title" bottom="50px" top="50px">
                {t("reklama.tariflar")}
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
                                            <p className="services_1">{objApi2[item?.tariff?.name] || "Ma'lumot mavjud emas !!"}</p>
                                            {/* <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span> */}
                                            <div className="right-prise">
                                            <b className="right-b">{t("tariflar.tolovSumma")} {item?.tariff?.price || '0'} {t("tariflar.som")}</b>
                                            <b className="right-b">{t("tariflar.olinganSana")} 
                                            {moment(item?.created_date).format('DD.MM.YYYY') || '01.01.2000'} 
                                             </b>
                                        </div>
                                        </div>
                                       {/* {console.log(item)} */}
                                        
                                    </Grid>
                                </Grid>
                            )) :
                            <Grid container spacing={1} justifyContent="center" className="services history">
                                <div style={{ padding: '20px 0' }}>{t("tariflar.tarifEmas")}</div>
                            </Grid>
                    }
                </>
            }
        </Wrapper>
    )
}
