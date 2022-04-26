import Reac, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { TextTitle } from '../../../styles/textTitle/index.style'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import { getApiResponse } from "../../../hooks/response_get"
import Spinner from "../../../components/molecules/loading.spinner"
import moment from "moment"
export default function Index() {
    const [historyState, setHistoryState] = useState({ data: null, error: false, success: false, loading: false })

    useEffect(() => {
        getApiResponse('/api/posts/payment-history/', setHistoryState)
    }, [])
    // console.log(historyState)
    return (
        <Wrapper>

            <Link to="/reklama" className="link-text"> <ArrowBackIcon className="arroles11" /> Reklama bo'limiga qaytish  </Link>
            <TextTitle className="text-title" bottom="50px" top="50px">
                To’lovlar tarixi
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
                                            <p className="services_1">To‘lov No.{item.id}</p>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sit ornare mattis id non aliquam convallis ut.</span>
                                        </div>
                                        <div className="right-prise">
                                            <b className="price_part">{item?.total_sum || '0'} so‘m</b>
                                            <b className="right-b">{moment(item?.payed_time).format('DD.MM.YYYY HH:mm') || '01.01.2000'} gacha</b>
                                        </div>
                                    </Grid>
                                </Grid>
                            )) :
                            <Grid container spacing={1} justifyContent="center" className="services history">
                                <div style={{ padding: '20px 0' }}>Sizda to'lovlar tarixi mavjud emas</div>
                            </Grid>
                    }
                </>
            }
        </Wrapper>
    )
}
