import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/container/index.style'
import { Wrapper } from './style'
import ExtendedSearch from "../../components/extended.search"
import ContainerMap from "../../components/templates/container.temp.f2"
import ImageContainer from "../../components/molecules/img.container"
import Adds from "../../assets/img/choosegid/bn1.png"
import Adds2 from "../../assets/img/choosegid/bn2.png"
import { getApiResponse } from "../../hooks/response_get"
import { Pagination } from 'antd';
import { searchToObject } from "../../custom/function"
import TestComponent from "../../components/templates/test.component"

const mediaGrid = {
    m_width: "959.5px",
    m_display: "none"
}
const mediaGridUSers = {
    m_padding: "10px 0px",
    m_width: "768px",
}
const Index = () => {
    let query = window.location.search
    const [queryObj, setQueryObj] = useState(null)
    const [typeQuery, setTypeQuery] = useState('gid')
    const [pagination, setPagination] = useState({ current: 1 })
    const [state, setState] = useState({ success: '', error: '', loading: false })
    const [callback, setCallback] = useState(false)




    useEffect(() => {

        const params = new URLSearchParams(query);
        let state = params.get('state');
        if (state == 'all') {
            params.delete('date_after');
            params.delete('date_before');
        }
        const type = params.get('type');
        params.delete('type');


        if (type) {
            getApiResponse(`/api/${type}s/profiles/?${params.toString()}&page=${pagination?.current}`, setState, true);
        } else {
            getApiResponse(`/api/translators/all/?page=${pagination?.current}&page_size=10`, setState, true);
        }
        setTypeQuery(type)
        let urlQuery = searchToObject(query);
        setQueryObj(urlQuery)
    }, [query, pagination, callback]);

    const onChange = (pageNumber) => {
        setPagination({ current: pageNumber || 1 });
        window.scrollTo(0, 0);
    }
    return (
        <Wrapper>

            <Container>
                <Grid container spacing={1} className="media_grid_flex">
                    <Grid item xs={12} sm={12} md={4}>
                        <ExtendedSearch loader={state} queryObj={queryObj} />
                        {
                            state?.success && state?.data?.results?.length > 0 ?
                                <>
                                    <Container {...mediaGrid} margin="15px 0" >
                                        <ImageContainer src={Adds} className="ImagesChoose" width="350px" />
                                    </Container>
                                    <Container {...mediaGrid} margin="15px 0" >
                                        <ImageContainer src={Adds2} className="ImagesChoose" width="350px" />
                                    </Container>
                                    <Container {...mediaGrid} margin="15px 0" >
                                        <ImageContainer src={Adds} className="ImagesChoose" width="350px" />
                                    </Container>
                                </>
                                : null
                        }
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} style={!state?.success ? { paddingTop: 40 } : {}}>
                        <Container {...mediaGridUSers}>
                            {
                                <TestComponent
                                    {...state}
                                    setCallback={() => setCallback(!callback)}
                                    currentJSX={
                                        <ContainerMap data={state?.data} type={typeQuery} />
                                    }
                                />
                            }
                            <div className="pagination">
                                <Pagination className="sss" current={pagination?.current} onChange={onChange} pageSize={10} total={state?.data?.count} />
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}

export default Index
