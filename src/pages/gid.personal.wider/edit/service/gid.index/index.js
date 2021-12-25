import React, { useState, useEffect, useCallback} from 'react'
import { Wrapper } from './style'
import { Container } from "../../../../../styles/container/index.style"
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import DoubleCheck from "../../../../../components/molecules/double.check"
import { FlexContainer } from '../../../../../styles/flex.container'
import { Grid } from '@mui/material'
import SelectLabeledCountry from "../../../../../components/molecules/select.labeled.country"
import SelectLabeledCity from "../../../../../components/molecules/select.labeled.country/city"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import Button from "../../../../../components/atom/button"
import TextLabeledLoop from "../../../../../components/atom/text.labeled"
import { useTranslation } from 'react-i18next'
import { putResponse, getResponse } from "../../../../../hooks/response_get"
import toast from 'react-hot-toast'
import FadeIn from 'react-fade-in';
import {getLabelCountry, getLabelCity, toastChecker } from '../../../../../custom/function'
import Spinner from "../../../../../components/atom/loading.spinner.line";
import { useDispatch } from "react-redux";
import {saveTabAction} from "../../../../../redux/actions"
const GidIndex = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [ state, setState ] = useState( [] );
    const [ clearValue, setClearValue ] = useState( false )
    const [ value, setValue ] = useState( { country: '', city: '' } )
    const [ getData, setGetData ] = useState( { success: '', error: '' } )
    const [ postData, setPostData ] = useState( { success: '', error: '', loading: false } )
    const [ checkItems, setCheckItems ] = useState( { excursion: false, consecutive_translate: false, synchronous_translate: false, written_translate: false } )
    const [countryId, setCountryId] = useState(null)
    const { excursion } = checkItems
    const { success, error } = postData
    const handleAdd = useCallback( () => {
        if ( value?.country !== '' && value?.city !== '' )
        {
            console.log(state)
            console.log(value)
            setState( [ ...state, value ] )
            // setValue( { country: '', city: '' } )
            setClearValue( true )
        } else
        {
            toast.error( 'Davlat yoki shahar tanlanmagan' )
        }
    },[value, clearValue])
    const handleDelete = ( index ) => {
        let clone = state.filter( item => item !== index )
        setState( clone )
    }
    const handleSubmit = () => {
        let cloneState = state.map( item => { return{
            city:item.city,
            country:item.country,
        }})
        setPostData( { ...postData, loading: true } )
        const { consecutive_translate, synchronous_translate, written_translate } = checkItems
        if ( excursion )
        {
            putResponse( '/api/gids/edit/service/', { ...checkItems, excursions: cloneState }, setPostData )
        } else
        {
            putResponse( '/api/gids/edit/service/', {
                consecutive_translate: consecutive_translate,
                synchronous_translate: synchronous_translate,
                written_translate: written_translate
            }
                , setPostData )
        }
    }
    useEffect( () => { getResponse( '/api/gids/edit/service/', setGetData ) }, [] )
    useEffect( () => {
        setCheckItems( { ...checkItems, ...getData?.success?.data } )
        // setState( getData?.success?.data?.excursions )
        console.log( getData?.success?.data)
        let array = getData?.success?.data?.excursions?.map(item=>{return{
            city: parseInt(item.city),
            country: parseInt(item.country),
        }}) || []
        setState(array)
    }, [ getData ] )
    useEffect( () => {
        if ( !excursion )
        {
            // setValue( { country: '', city: '' } )
            setClearValue( true )
        }
    }, [ excursion ] )
    useEffect( () => {
        toastChecker(postData)
        if(postData.success!=='') dispatch(saveTabAction(5))
    }, [ success, error ] )
    return (
        <Wrapper>
            <Container margin="30px 0 0" padding="10px 0">
                {
                    getData?.success === '' ? <Spinner marginTop="30px" width={ 50 } height={ 50 } /> :
                        <>
                            <TextTitle 
                            font="15px" 
                            align="left">{ t( "xizmatlar.xizmatlar" ) }
                            </TextTitle>
                            <FlexContainer width="100%" gap="50px">
                                <DoubleCheck 
                                    flexDirection="column"
                                    field1="excursion"
                                    field2="consecutive_translate"
                                    name1={t("xizmatlar.ekskursiyalar")}
                                    name2={t("xizmatlar.ogzaki")}
                                    setState={ setCheckItems }
                                    state={ checkItems }
                                />
                                <DoubleCheck 
                                    flexDirection="column"
                                    field1="synchronous_translate"
                                    field2="written_translate"
                                    name1= {t("xizmatlar.sinxron")}
                                    name2={t("xizmatlar.izchil")}
                                    setState={ setCheckItems }
                                    state={ checkItems }
                                />
                            </FlexContainer>
                            <Container 
                            padding="10px 0" margin="10px 0" textAlign="right">
                                <>
                                    {
                                        state ?
                                            state?.map( ( item, index ) => (
                                                <>
                                                <FadeIn>
                                                    <Grid container spacing={ 1 } key={ index }>
                                                        <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                                                            <TextLabeledLoop 
                                                            label={ t( "xizmatlar.mamalakatlargaEkskurs" ) } value={ getLabelCountry(item?.country) || item?.country_name?.label } />
                                                        </Grid>
                                                        <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                                            <TextLabeledLoop 
                                                            label={ t( "xizmatlar.shaharlar" ) } value={ 
                                                                getLabelCity(item?.country, item?.city) || item?.city_name?.label
                                                            } />
                                                        </Grid>
                                                        <Grid item xs={ 12 } sm={ 12 } md={ 1 }>
                                                            <FlexContainer width="100%" alignItems="flex-end" margin="44px 0 0 0">
                                                                <Button
                                                                    paddingIcon="10px"
                                                                    type="outlined"
                                                                    margin="1px 10px 0 0px"
                                                                    onClick={ () => handleDelete( item ) }
                                                                >
                                                                    <DeleteIcon className="icon" />
                                                                </Button>
                                                            </FlexContainer>
                                                        </Grid>
                                                    </Grid>
                                                    </FadeIn>
                                                </>
                                            ) ) : null
                                    }

                                    <Grid container spacing={ 1 } >
                                        <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                                            <SelectLabeledCountry
                                                isDisabled={!checkItems?.excursion}
                                                className="selects"
                                                setCountryId={setCountryId}
                                                setState={setValue} 
                                                state={value}
                                                clearValue={clearValue}
                                                setClearValue={setClearValue}
                                                placeholder={t("kengaytirlgan_Q.DavlatniTanlang")}
                                            />
                                            {/* <SelectLabeled
                                                setClearValue={ setClearValue }
                                                clearValue={ clearValue }
                                                options={ countries }
                                                collect={ value }
                                                isDisabled={ !checkItems?.excursion }
                                                setCollect={ setValue }
                                                field="country"
                                                sizeLabel="15px"
                                                width="100%"
                                                marginLabel="12px 0"
                                                label={ t( "xizmatlar.mamalakatlargaEkskurs" ) }
                                                placeholder={ t( "xizmatlar.mamlakatPlace" ) }
                                            /> */}
                                        </Grid>
                                        <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                            <SelectLabeledCity
                                                className="selects"
                                                countryId={countryId}
                                                setState={setValue}
                                                state={value} 
                                                clearValue={clearValue}
                                                setClearValue={setClearValue}
                                                isDisabled={countryId === null ? true:false}
                                                placeholder={t("kengaytirlgan_Q.ShaharniTanlang")}
                                            />
                                            {/* <SelectLabeled
                                                setClearValue={ setClearValue }
                                                clearValue={ clearValue }
                                                collect={ value }
                                                setCollect={ setValue }
                                                isDisabled={ !value?.country.hasOwnProperty( 'cities' ) }
                                                options={ value?.country?.cities ? get_cities( value?.country?.cities ) : null }
                                                field="city"
                                                sizeLabel="15px"
                                                width="100%"
                                                marginLabel="12px 0"
                                                label={ t( "xizmatlar.shaharlar" ) }
                                                placeholder={ t( "xizmatlar.shaharlarSelect" ) }
                                            /> */}
                                        </Grid>
                                        <Grid item xs={ 12 } sm={ 12 } md={ 1 }>
                                            <FlexContainer width="100%" alignItems="flex-end" margin="11px 0 0 0">
                                                <Button paddingIcon="10px" onClick={ handleAdd }>
                                                    <AddIcon className="icon" />
                                                </Button>
                                            </FlexContainer>
                                        </Grid>
                                    </Grid>
                                </>
                                {/* <Grid container spacing={1}>
                        <Grid item xs={10} sm={10} md={11}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px"
                                     label={t("xizmatlar.mamalakatlargaEkskurs")}
                                     placeholder={t("xizmatlar.mamlakatPlace")} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px" label={t("xizmatlar.shaharlar")}
                                    placeholder={t("xizmatlar.shaharlarSelect")} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1}>
                            <Button paddingIcon="10px" margin="30px">
                                <AddIcon className="icon" />
                            </Button>
                           
                        </Grid>
                    </Grid>
                    <Button paddingIcon="10px" margin="-2px">
                        <AddIcon className="icon" />
                    </Button> */}

                            </Container>
                            <Container padding="10px 0" margin="20px 0" textAlign="right">
                                <Button loader={ postData?.loading } onClick={ handleSubmit }>{ t( "xizmatlar.save" ) }</Button>
                            </Container>
                        </>
                }

            </Container>
        </Wrapper>
    )
}

export default GidIndex
