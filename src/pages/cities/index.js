 
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
import bukhara from '../../assets/img/citiyes/bukhara2.png'
import { TextTitle } from "../../styles/textTitle/index.style"
import { Grid } from '@material-ui/core'
import CitiLeftPart from '../../components/organism/citiesLeftPart'
import ad from '../../assets/img/citiyes/ad.png'
import xitoy from '../../assets/img/citiyes/xitoy.png';
import { mediaTextField, mediaTextFieldSec } from "../../custom/global.media.variables"
import { useTranslation } from 'react-i18next'
// import Blog from '../blog'
// =================================================================================================
import React, { useEffect, useState } from 'react'
import Spinner from "../../components/atom/loading.spinner.line"
import NoDataPage from "../../components/templates/no.data.page.js"
import { getResponse } from "../../hooks/response_get"
import { Pagination } from 'antd';
import moment from 'moment'
import { useHistory } from "react-router-dom"
// ===============================================================================================


export default function Index() {
    const { t } = useTranslation()
    // ===============================================================================================
    // let query = window.location.search

    // const history = useHistory()
    // const [state, setState] = useState({ success: '', error: '' })
    // const [tagName, setTagName] = useState(undefined)
    // const [articleList, setArticleList] = useState([])
    // const [pagination, setPagination] = useState({ current: 1 })
    // const [postData, setPostData] = useState({ success: '', error: '', loading: false })
    // let { current } = pagination
    // useEffect(() => {
    //     let url = `/api/posts/article/${query}`
    //     getResponse(url, setState, true)
    //     history.push(`/blog${query}`)
    //     let pagNumber = query[query.length - 1]
    //     setPagination({ current: parseInt(pagNumber) })
    // }, [query])
    // useEffect(() => { if (state?.success) setArticleList(state.success?.data?.results) }, [state.success?.data?.results])
    // function onChange(pageNumber) {
    //     history.push(`/blog?page=${pageNumber}`)
    //     setPagination({ current: pageNumber })
    //     window.scrollTo(0, 0)
    // }

    // ===============================================================================================


    return (
        <Wrapper>
            <div className="imgBukhara">
                <ImgContainer width="100%" src={bukhara} />
                <p className="bukhara">Bukhara</p>
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">Buxoro</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>Buxoro</b> — O‘zbekiston Respublikasining qadimiy shaharlaridan biri, Buxoro viloyatining maʼmuriy, iqtisodiy va madaniy markazi. Buyuk ipаk yo‘lida yirik tijorat markazlaridan bo‘lgan. Oʻzbekistonning janubiy-gʻarbida, Zarafshon daryosi quyi oqimida joylashgan. Toshkentdan 616 km. Buxoro 2 ta shahar rayoni (Fayzulla Xoʻjayev va Toʻqimachilik)ga boʻlingan. Aholisi 280000 (2019).

                        <br /><br />

                        Buxoro shahri qadim zamonlarda qanday nomlangani — nomaʼlum. Milodiy V asrga oid xitoy manbalarida Buxoro shahri Nyumi tarzida tilga olinib oʻtilgan. Binobarin, shaharda shu nomdagi mulk hukmdorining qarorgohi ham boʻlgan. Tan imperiyasining VII asrga oid solnomalarida Buxoro shahri An (Ango), Ansi, Buxo (Buxe, Fuxo) shakllarida qayd etib oʻtilgan. Keyinchalik shahar har xil nomlana boshladi. Arab qadimiy manbalarda u Bumiskat, Madinat us-sufriya (Mis shahar), Numijkat (soʻgʻdcha numij yoki namich degani mashhur degan maʼnoni anglatgan) tarzida keltirilgan.
                    </div>
                </AboutB>
            </PerentAB>

            {/* ============== */}

{/*  
        
            {
                state?.success === "" ? <Spinner marginTop="60px" width={50} height={50} /> :
                    <>
                        {
                            state.success?.data?.results.length > 0 ?
                                <>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={12} md={8}>
                                            {
                                                articleList?.map(item => (
                                                    <CitiLeftPart
                                                        key={item.id}
                                                        title={item.title}
                                                        kalendar={moment(item.created_at) === "" ? "" : moment(item.created_at).format("MM.DD.YYYY")}
                                                        hteg={item.tags}
                                                        url={item.image}
                                                        text={item.mini_content}
                                                        id={item.id}
                                                        // getArticleList={getArticleList}
                                                        setState={setState}
                                                        postData={postData}
                                                        setPostData={setPostData}
                                                        btnText={t("Blog.davomiOqish")}
                                                        setTagName={setTagName}
                                                    />
                                                ))
                                            }

                                        </Grid>
                                        <Grid xs={12} sm={12} item md={4} className="msa2">
                                            <div className="imgcla"><ImgContainer src={ad} width="350px" margin="0 auto" /></div>
                                            <div className="imgcla"><ImgContainer src={ad} width="350px" margin="0 auto" /></div>
                                        </Grid>
                                    </Grid>
                                    <div className="pagination">
                                        <Pagination current={current} onChange={onChange} pageSize={4} total={state?.success?.data?.count} />
                                    </div>
                                </> :null
                        }
                    </>
            } */}

            {/* ============== */}
 


        </Wrapper>
    )
}
