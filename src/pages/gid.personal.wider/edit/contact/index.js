import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import InputLabel from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import { Container } from '../../../../styles/container/index.style'
import { getResponse, putResponse } from "../../../../hooks/response_get"
import toast from 'react-hot-toast'
import Spinner from "../../../../components/atom/loading.spinner.line";
const Index = () => {
    const [ apiRes, setApiRes ] = useState( { success: '', error: '' } )
    const [ loader, setLoader ] = useState( false )
    const [ state, setState ] = useState( { website: 'http://', telegram: 'http://', instagram: 'http://', facebook: 'http://', wechat: 'http://', viber: 'http://' } )
    const [ apiResponse, setApiResponse ] = useState( { success: '', error: '' } )
    const handleChange = ( e ) => { setState( { ...state, [ e.target.name ]: e.target.value } ) }
    useEffect( () => { getResponse( '/api/gids/edit/contact/', setApiResponse ) }, [] )
    useEffect( () => {
        if ( apiResponse?.success )
        {
            setState( apiResponse?.success?.data )
        }
    }, [ apiResponse ] )
    const handleSubmit = ( e ) => {
        e.preventDefault()
        putResponse( '/api/gids/edit/contact/', state, setApiRes )
        setLoader( true )
    }
    useEffect( () => {
        if ( apiRes?.success !== "" )
        {
            setLoader( false )
            toast.success( "Ma'lumotlaringiz muvaffaqiyatli yuklandi" )
            getResponse( '/api/gids/edit/contact/', setApiResponse )
        } else if ( apiRes?.error !== "" )
        {
            toast.error( "Xatolik mavjud, qaytadan urinib ko'ring" )
        }
    }, [ apiRes ] )
    return (
        <Wrapper onSubmit={ handleSubmit }>
            {
                apiResponse?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> : (
                    <>
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><InputLabel onChange={ handleChange } name="website" value={ state?.website } sizeLabel="15px" width="100%" label="Sayt" placeholder="Linkni kiriting..." /> </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><InputLabel onChange={ handleChange } name="telegram" value={ state?.telegram } sizeLabel="15px" width="100%" label="Telegram" placeholder="Telegram linkni kiriting..." /> </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><InputLabel onChange={ handleChange } name="instagram" value={ state?.instagram } sizeLabel="15px" width="100%" label="Instagram" placeholder="Instagram linkni kiriting..." /> </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><InputLabel onChange={ handleChange } name="facebook" value={ state?.facebook } sizeLabel="15px" width="100%" label="Facebook" placeholder="Facebook linkni kiriting..." /> </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><InputLabel onChange={ handleChange } name="wechat" value={ state?.wechat } sizeLabel="15px" width="100%" label="Wechat" placeholder="Wechat linkni kiriting..." /> </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><InputLabel onChange={ handleChange } name="viber" value={ state?.viber } sizeLabel="15px" width="100%" label="Viber" placeholder="Viber linkni kiriting..." /> </Grid>
                        </Grid>
                        <Container padding="20px 0 5px" textAlign="right">
                            <Button loader={ loader }>Saqlash</Button>
                        </Container>
                    </>
                )
            }
        </Wrapper>
    )
}

export default Index
