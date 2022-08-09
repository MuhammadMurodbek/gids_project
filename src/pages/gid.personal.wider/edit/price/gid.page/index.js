import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import InputLabeled from "../../../../../components/molecules/input.labeled"
import { Container } from '../../../../../styles/container/index.style'
import Selection from '../../../../../components/atom/select'
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import Button from "../../../../../components/atom/button"
import { useTranslation } from 'react-i18next'
import { currency, CURRENCY } from './_const'
import { putResponse, getResponse } from "../../../../../hooks/response_get"
import Spinner from "../../../../../components/atom/loading.spinner.line";
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux";
import {saveTabAction} from "../../../../../redux/actions"
const Index = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [ postData, setPostData ] = useState( { success: '', error: '', loading: false } )
    const [ getData, setGetData ] = useState( { success: '', error: '' } )
    const [ state, setState ] = useState( { cost_per_day: 0, currency_per_day: {}, cost_per_hour: 0, currency_per_hour: {} } )
    const handleSubmit = () => {
        setPostData( { ...postData, loading: true } )
        // cost_per_day:parseInt(state?.cost_per_day),  cost_per_hour:parseInt(state?.cost_per_hour)
        let data = { ...state, currency_per_day: state?.currency_per_day?.value, currency_per_hour: state?.currency_per_hour?.value }
        putResponse( '/api/gids/edit/cost/', data, setPostData )
    }
    useEffect( () => {
        if ( postData?.success !== '' ) {
            toast.success( t("profil_sozlamalari.yuklandi") )
            dispatch(saveTabAction(6))
        }
        if ( postData?.error !== '' ) toast.error( t("profil_sozlamalari.failed") )
    }, [ postData ] )
    useEffect( () => { getResponse( '/api/gids/edit/cost/', setGetData ) }, [] )
    useEffect( () => {
        if ( getData )
        {
            let dataApi = getData?.success?.data
            setState( {
                cost_per_day: dataApi?.cost_per_day,
                cost_per_hour: dataApi?.cost_per_hour,
                currency_per_day: { value: dataApi?.currency_per_day, label: CURRENCY[ dataApi?.currency_per_day ] },
                currency_per_hour: { value: dataApi?.currency_per_hour, label: CURRENCY[ dataApi?.currency_per_hour ] }
            } )
        }
    }, [ getData ] )

    console.log(getData?.success?.data?.cost_per_hour);
    return (
        <Wrapper>
            <Container>
                {
                    getData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> :
                        <>
                            <div>
                                <TextTitle font="14px" align="left" position="relative" p_top="20px">
                                    { t( "narxlar.birkunlikHizmat" ) }
                                </TextTitle>
                                <div className="wrap_class" style={{flexWrap: "wrap"}}>
                                    <InputLabeled
                                        width="170px"
                                        placeholder="0"
                                        typeNumber
                                        state={ state }
                                        setState={ setState }
                                        field="cost_per_day"
                                        defaultApiValue={ getData?.success?.data?.cost_per_day || '' }
                                    />
                                    <div className="wrap_class_inner">
                                        <Selection
                                            options={ currency }
                                            width="170px"
                                            collect={ state }
                                            setCollect={ setState }
                                            field="currency_per_day"
                                            pcolor={ getData?.success !== '' ? true : false }
                                            placeholder={ CURRENCY[ getData?.success?.data?.currency_per_day ] || "$" }
                                        />
                                    </div>
                                    <p>* {t("narxlar.davomiligi")}</p>
                                </div>
                            </div>
                            <div>
                                <TextTitle font="14px" align="left" position="relative" p_top="20px">
                                    { t( "narxlar.birSoatlik" ) }
                                </TextTitle>
                                <div className="wrap_class" style={{flexWrap: "wrap"}}>
                                    <InputLabeled
                                        width="170px"
                                        placeholder="0"
                                        typeNumber
                                        state={ state }
                                        setState={ setState }
                                        field="cost_per_hour"
                                        defaultApiValue={ getData?.success?.data?.cost_per_hour || '' }  //dddddddddd
                                    />
                                    <div className="wrap_class_inner">
                                        <Selection
                                            options={ currency }
                                            width="170px"
                                            placeholder="$"
                                            collect={ state }
                                            setCollect={ setState }
                                            field="currency_per_hour"
                                            pcolor={ getData?.success !== '' ? true : false }
                                            placeholder={ CURRENCY[ getData?.success?.data?.currency_per_hour ] || "$" }
                                        />
                                    </div>
                                    <p>* {t("narxlar.davomiligi")}</p>
                                </div>
                            </div>
                        </>
                }

            </Container>
            <Container padding="10px 0" margin="10px 0 0 -30px" textAlign="right">
                <Button onClick={ handleSubmit } loader={ postData?.loading }>{ t( "narxlar.saq" ) }</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
