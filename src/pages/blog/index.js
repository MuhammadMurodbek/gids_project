import React, { useEffect, useMemo, useState } from 'react'
import { TextTitle } from '../../styles/textTitle/index.style'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import CitiLeftPart from '../../components/organism/citiesLeftPart'
import ad from '../../assets/img/citiyes/ad.png'
import ImgContainer from "../../components/molecules/img.container"
import { useTranslation } from 'react-i18next'
import { getResponse } from "../../hooks/response_get"
import Button from "../../components/atom/button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import moment from 'moment'
import { Pagination } from 'antd';


export default function Index() {
    const { t } = useTranslation()
    const [state, setState] = useState({ success: '', error: '' })
    const [articleList, setArticleList] = useState(undefined)
    const [counter, setCounter] = useState(1)

    function getArticleList() {
        getResponse("/api/posts/article/", setState)
    }
    useEffect(() => {
        getArticleList()
    }, [])
    useEffect(() => {
        if (state?.success) {
            setArticleList(state.success?.data?.results)
        }
    }, [state])
    const handlePagination = () => {
        setCounter(prev => prev + 1)
        let url = `/api/posts/article/?page=${counter + 1}`
        getResponse(url, setState)
    }
    // let visibleButton = state?.success?.data?.num_pages

    function onChange(pageNumber) {
        let url = `/api/posts/article/?page=${pageNumber}`
        getResponse(url, setState)
    }
    return (
        <Wrapper>
            <TextTitle width="50%" left="auto" right="auto" bottom="30px" top="80px">
                {t("Blog.blog")}
            </TextTitle>
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
                                btnText={t("Blog.davomiOqish")}
                            />
                        ))
                    }



                </Grid>
                <Grid xs={12} sm={12} item md={4} className="msa2">
                    <div className="imgcla"><ImgContainer src={ad} width="350px" margin="0 auto" /></div>
                    <div className="imgcla"><ImgContainer src={ad} width="350px" margin="0 auto" /></div>
                    <div className="imgcla"><ImgContainer src={ad} width="350px" margin="0 auto" /></div>
                    <div className="imgcla"><ImgContainer src={ad} width="350px" margin="0 auto" /></div>
                </Grid>
            </Grid>
            <Pagination defaultCurrent={state?.success?.data?.num_pages} total={state?.success?.data?.count} onChange={onChange} />
        </Wrapper>
    )
}

// {
//     counter === visibleButton ? null :
//         <div className="divbtns">
//             <Button type="outlined" className="davomi" onClick={handlePagination}>{t("arizalar_royhati.davomi")} <ArrowForwardIcon className="arrovicon" /></Button>
//         </div>
// }