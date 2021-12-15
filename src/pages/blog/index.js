import React, { useEffect, useState } from 'react'
import { TextTitle } from '../../styles/textTitle/index.style'
import Spinner from "../../components/atom/loading.spinner.line"
import NoDataPage from "../../components/templates/no.data.page.js"
import CitiLeftPart from '../../components/organism/citiesLeftPart'
import ImgContainer from "../../components/molecules/img.container"
import { getResponse } from "../../hooks/response_get"
import ad from '../../assets/img/citiyes/ad.png'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import { Pagination } from 'antd';
import { Wrapper } from './style'
import moment from 'moment'


export default function Index () {
    const { t } = useTranslation()
    const [ state, setState ] = useState( { success: '', error: '' } )
    const [ tagName, setTagName ] = useState( undefined )
    const [ articleList, setArticleList ] = useState( [] )
    const [ pagination, setPagination ] = useState( {
        current: 1
    } )
    const [ postData, setPostData ] = useState( { success: '', error: '', loading: false } )
    let { current } = pagination
    useEffect( () => {
        let url = `/api/posts/article/?page=${ current }`
        getResponse( url, setState )
    }, [ pagination ] )
    useEffect( () => {
        if ( state?.success )
        {
            setArticleList( state.success?.data?.results )
        }
    }, [ state.success?.data?.results ] )

    function onChange ( pageNumber ) {
        setPagination( {
            current: pageNumber
        } )
    }
    // console.log( articleList, 'data' )
    return (
        <Wrapper>
            <TextTitle width="50%" left="auto" right="auto" bottom="30px" top="80px">
                { t( "Blog.blog" ) }
            </TextTitle>
            {
                state?.success === "" ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> :
                    <>
                        {
                            state.success?.data?.results.length > 0 ?
                                <>
                                    <Grid container spacing={ 1 }>
                                        <Grid item xs={ 12 } sm={ 12 } md={ 8 }>
                                            {
                                                articleList?.map( item => (
                                                    <CitiLeftPart
                                                        key={ item.id }
                                                        title={ item.title }
                                                        kalendar={ moment( item.created_at ) === "" ? "" : moment( item.created_at ).format( "MM.DD.YYYY" ) }
                                                        hteg={ item.tags }
                                                        url={ item.image }
                                                        text={ item.mini_content }
                                                        id={ item.id }
                                                        // getArticleList={getArticleList}
                                                        setState={ setState }
                                                        postData={ postData }
                                                        setPostData={ setPostData }
                                                        btnText={ t( "Blog.davomiOqish" ) }
                                                        setTagName={ setTagName }
                                                    />
                                                ) )
                                            }

                                        </Grid>
                                        <Grid xs={ 12 } sm={ 12 } item md={ 4 } className="msa2">
                                            <div className="imgcla"><ImgContainer src={ ad } width="350px" margin="0 auto" /></div>
                                            <div className="imgcla"><ImgContainer src={ ad } width="350px" margin="0 auto" /></div>

                                        </Grid>
                                    </Grid>
                                    <div className="pagination">
                                        <Pagination current={ state?.success?.data?.num_pages } onChange={ onChange } total={ 50 } />
                                    </div>
                                </> : <NoDataPage />
                        }
                    </>
            }
        </Wrapper>
    )
}

