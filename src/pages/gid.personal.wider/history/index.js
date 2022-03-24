import Reac, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { TextTitle } from '../../../styles/textTitle/index.style'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { getApiResponse } from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"
import { objApi } from "../reklama/external"
import moment from "moment"
export default function Index() {
    const [historyState, setHistoryState] = useState({ data: null, error: false, success: false, loading: false })

    useEffect(() => {
        getApiResponse('/api/posts/ad-history/', setHistoryState)
    }, [])
    // console.log(historyState)
    return (
        <Wrapper>

            <Link to="/reklama" className="link-text"> <ArrowBackIcon className="arroles11" /> reklama bo'limiga qaytish  </Link>
            <TextTitle className="text-title" bottom="50px" top="50px">
                Tariflar tarixi
            </TextTitle>

            { historyState.loading && <Spinner />}
            {
                historyState?.success &&
                <>
                    {
                        historyState.data?.length > 0 ?
                            historyState?.data?.map((item, index) => (
                                <Grid key={index} container spacing={1} justifyContent="center" className="services history">
                                    <Grid item md="11" className="item_md_11">
                                        <div className="services_item" >
                                            <p className="services_1">{objApi[item?.tariff?.name] || "Ma'lumot mavjud emas !!"}</p>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                                        </div>
                                        <div className="right-prise">
                                            <b className="price_part">{item?.tariff?.price || '0'} so‘m</b>
                                            <b className="right-b">{moment(item?.created_date).format('DD.MM.YYYY') || '01.01.2000'} gacha</b>
                                        </div>
                                    </Grid>
                                </Grid>
                            )) :
                            <Grid container spacing={1} justifyContent="center" className="services history">
                                <div style={{ padding: '20px 0' }}>Sizda tariflar tarixi mavjud emas</div>
                            </Grid>
                    }
                </>
            }
        </Wrapper>
    )
}
