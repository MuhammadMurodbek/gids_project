import React, { useEffect, useState } from 'react'
import { Container } from '../../../styles/container/index.style'
import { Wrapper, TitleContainer } from "./style"
import { shadow } from "../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabeled from "../../../components/molecules/input.labeled"
import Button from "../../../components/atom/button"
import Box from "@material-ui/core/Box";
import { useTranslation } from 'react-i18next'
import { getResponse, putResponse } from "../../../hooks/response_get"
import {toastChecker} from "../../../custom/function"
import Spinner from "../../../components/atom/loading.spinner.line"
import {toast} from "react-hot-toast"
// import {validatorState} from "../../../custom/validator"
// import {validationSchema} from "./_validator"
const mediaContainer = {
    m_width: "500px",
    m_padding: "10px 5px",
}
const Index = () => {
    const [ api, setApi ] = useState( { success: '', error: '' } )
    // const [errors, setError] = useState([])
    const [ state, setState ] = useState( { email: '', password: '', phone_number: '', password: '', password2: '', password1: '' } )
    const [putApi, setPutApi] = useState({ success: '', error: '', loading: false})
    const { t } = useTranslation()
    useEffect( () => { getResponse( '/api/auth/settings/', setApi ) }, [] )
    useEffect( () => {
        if ( api?.success !== '' )
        {
            setState( { ...state, ...api?.success?.data } )
        }
    }, [ api ] )
    const handleSubmit= async() => {
        if(state?.password1!==state?.password2){
            toast.error("Parolni tasdiqlashda xatolik mavjud")
        }else{
            setPutApi({...putApi, loading: true})
            putResponse('/api/auth/settings/',state,setPutApi)
        }
        // const isValid = await validationSchema.isValid(state)
        // console.log(isValid)
    }
    useEffect(() =>{
        toastChecker(putApi)
    },[putApi])
    // console.log( state )
    return (
        <Wrapper>
            {
                api?.success === '' ? <Spinner width={ 50 } height={ 50 } /> :
                    <Container padding="0" boxShadow={ shadow } className="container4">
                        <TitleContainer>
                            <Grid container spacing={ 5 }>
                                <Grid item xs={ 12 } sm={ 6 }>{ t( "profil_sozlamalari.kontaktlar" ) }</Grid>
                                <Grid component={ Box } display={ { xs: "none", sm: "inline-block" } } item xs={ 12 } sm={ 6 }> { t( "profil_sozlamalari.parolniYangilash" ) } </Grid>
                            </Grid>
                        </TitleContainer>
                        <Container { ...mediaContainer } padding="20px 40px">
                            <Grid container spacing={ 5 }>
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <InputLabeled
                                        setState={ setState }
                                        state={ state }
                                        field="phone_number"
                                        width="100%"
                                        label={ t( "profil_sozlamalari.telefone" ) }
                                        placeholder={ t( "profil_sozlamalari.telRaqam" ) }
                                        defaultApiValue={ state?.phone_number} 

                                    />
                                    <span className="tets">faqat raqam kiriting</span>
                                    <InputLabeled
                                        setState={ setState }
                                        state={ state }
                                        field="email"
                                        width="100%"
                                        label={ t( "profil_sozlamalari.Email" ) }
                                        placeholder={ t( "profil_sozlamalari.EmailPlac" ) }
                                        defaultApiValue={ state?.email }
                                    />
                                </Grid>
                                <Grid item xs={ 12 } sm={ 6 }>
                                    <InputLabeled
                                        setState={ setState }
                                        state={ state }
                                        field="password"
                                        width="100%"
                                        label={ t( "profil_sozlamalari.hozirgiParol" ) }
                                        placeholder={ t( "profil_sozlamalari.EmailPlac" ) }
                                    />

                                    <InputLabeled
                                        setState={ setState }
                                        state={ state }
                                        field="password1"
                                        width="100%"
                                        label={ t( "profil_sozlamalari.yangiParol" ) }
                                        placeholder={ t( "profil_sozlamalari.yangiParolPlac" ) }
                                        password
                                    />
                                    <InputLabeled
                                        setState={ setState }
                                        state={ state }
                                        field="password2"
                                        width="100%"
                                        label={ t( "profil_sozlamalari.parolniTasdiqlash" ) }
                                        placeholder={ t( "profil_sozlamalari.tasdilashPlac" ) }
                                        password
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                        <Container textAlign="right" padding="30px">
                            <Button onClick={handleSubmit} loader={putApi?.loading}>
                                { t( "profil_sozlamalari.saqlash" ) }
                            </Button>
                        </Container>
                    </Container>
            }

        </Wrapper>
    )
}

export default Index
