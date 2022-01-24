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
import { Pagination } from 'antd';
import Spinner from "../../components/atom/loading.spinner.line"
import {searchToObject} from "../../custom/function"

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
    const [queryObj, setQueryObj] = useState(null)
    const [typeQuery, setTypeQuery] = useState('gid')
    const [ pagination, setPagination ] = useState( {current: 1} )
    const [state, setState] = useState({ success: '', error: '', loading: false})
    useEffect(()=>{
        let filterQuery = query.substr(1)?.split('&')?.filter(a=>!a.includes('type'))?.join('&')
        let type = query.substr(1)?.split('&')?.filter(a=>a.includes('type'))?.join('&').slice(5)
        if(type){
            getResponse(`/api/${type}s/profiles/?${filterQuery}&page=${pagination?.current}`, setState, true)
        }else{
            getResponse(`/api/translators/all/?page=${pagination?.current}`, setState, true)
        }
        setTypeQuery(type)
        let urlQuery = searchToObject(query)
        setQueryObj(urlQuery)
    },[query, pagination])

    function onChange ( pageNumber ) {
        setPagination( { current: pageNumber} )
    }
    
    return (
        <Wrapper>
             
            <Container>
                <Grid container spacing={1} className="media_grid_flex">
                    <Grid item xs={12} sm={12} md={4}>
                        <ExtendedSearch loader={state} queryObj={queryObj}/>
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
                        {
                            state?.success === '' ?  <Spinner marginTop="60px" width={ 50 } height={ 50 } />:
                            <Container {...mediaGridUSers}>
                                <ContainerMap data={state?.success?.data}  type={typeQuery} />
                                <div className="pagination">
                                    <Pagination className="sss" current={pagination?.current} onChange={ onChange } pageSize={7} total={ state?.success?.data?.count } />
                                </div>
                            </Container>
                        }
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
