import { Grid } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { Container } from '../../styles/container/index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import { Wrapper } from './style'
import ExtendedSearch from "../../components/extended.search"
import ContainerMap from "../../components/templates/container.temp.f2"
import ImageContainer from "../../components/molecules/img.container"
import Adds from "../../assets/img/choosegid/adds.jpg"
import { mediaTextField, mediaTextFieldSec } from "../../custom/global.media.variables"
import { useTranslation } from 'react-i18next'
import {getResponse} from "../../hooks/response_get"
const mediaGrid = {
    m_width: "962px",
    m_display: "none"
}
const mediaGridUSers = {
    m_padding: "10px 0px",
    m_width: "768px",
}
const Index = () => {
    const { t } = useTranslation()
    let query = window.location.search
    const [typeQuery, setTypeQuery] = useState('gid')
    const [state, setState] = useState({ success: '', error: '', loading: false})
    useEffect(()=>{
        let filterQuery = query.substr(1)?.split('&')?.filter(a=>!a.includes('type'))?.join('&')
        let type = query.substr(1)?.split('&')?.filter(a=>a.includes('type'))?.join('&').slice(5)
        if(type){
            getResponse(`/api/${type}s/profiles/?${filterQuery}`, setState)
        }else{
            getResponse(`/api/translators/all/`, setState)
        }
        setTypeQuery(type)
    },[query])
    return (
        <Wrapper>
            <TextTitle top="40px" {...mediaTextField} {...mediaTextFieldSec} bottom="30px">
                {t("Gid_Tanlash.title")}
            </TextTitle>
            <Container>
                <Grid container spacing={1} className="media_grid_flex">
                    <Grid item xs={12} sm={12} md={4}>
                        <ExtendedSearch loader={state}/>
                        {
                            state && state?.success?.data?.results.length > 0 ?
                                <>
                                    <Container {...mediaGrid} margin="15px 0" >
                                        <ImageContainer src={Adds} width="350px" />
                                    </Container>
                                    <Container {...mediaGrid} margin="15px 0" >
                                        <ImageContainer src={Adds} width="350px" />
                                    </Container>
                                </>
                                : null
                        }
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Container {...mediaGridUSers}>
                            <ContainerMap data={state?.success?.data}  type={typeQuery} />
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
