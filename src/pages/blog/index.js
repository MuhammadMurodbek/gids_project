import React, { useEffect, useMemo, useState } from 'react'
import { TextTitle } from '../../styles/textTitle/index.style'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import CitiLeftPart from '../../components/organism/citiesLeftPart'
import ad from '../../assets/img/citiyes/ad.png'
import ImgContainer from "../../components/molecules/img.container"
import { useTranslation } from 'react-i18next'
import { getResponse } from "../../hooks/response_get"

export default function Index() {
    const { t } = useTranslation()
    const [state, setState] = useState({ success: '', error: '' })
    const [articleList, setArticleList] = useState(undefined)

    function getArticleList() {
        getResponse("/api/posts/article/", setState)
    }
    useEffect(() => {
        getArticleList()
    }, [])
    useEffect(() => {
    if(state?.success) {
        setArticleList(state.success?.data?.results)
    }
    }, [state])
    console.log(articleList, 'data')

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
                        kalendar="23.01.2021"
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

        </Wrapper>
    )
}
