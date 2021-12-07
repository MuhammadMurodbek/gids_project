import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import { FlexContainer } from '../../../../styles/flex.container'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import SelectLang from "../../../../components/molecules/select.labeled/lang"
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import { useTranslation } from 'react-i18next'
import { postResponse, getResponse, deleteResponse } from "../../../../hooks/response_get"
import uuid from 'react-uuid'
import { selection, SELECTION } from "./_constants"
import Spinner from "../../../../components/atom/loading.spinner.line";
import toast from 'react-hot-toast'
import FadeIn from 'react-fade-in';
import Translator from "./_translator"
import { common } from "../../../../custom/url"
import {toastChecker} from "../../../../custom/function"
import {getLabelLang} from "../../../../custom/function"
// import { TransitionGroup } from 'react-transition-group';
const Index = () => {

    const { t } = useTranslation();
    // console.log( uuid() )
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
    // const lanOptions = JSON.parse( localStorage.getItem( "lanOptions"))
    // console.log(langGlobal)
    // const { role } = getRole;
    const [ clearValue, setClearValue ] = useState( false )
    const [ callback, setCallback ] = useState( false )
    const [ getData, setGetData ] = useState( { success: '', error: '' } )
    const [ value, setValue ] = useState( { id: '', name: '', level: '' } )
    const [ postData, setPostData ] = useState( { success: '', error: '', loading: false } )
    const [ state, setState ] = useState( [] );
    const handleAdd = () => {
        setState( [ ...state, { id: uuid(), language: value?.languages?.value, level: value?.level } ] )
        setValue( { id: "", languages: '', level: '' } )
        setClearValue( true )
    }
    const handleDelete = ( item ) => {
        if ( Object.keys( item ).includes( 'del_id' ) )
        {
            deleteResponse( `/api/gids/edit/language/${ item?.del_id }`, item?.language, setCallback )
        } else
        {
            let data = state.filter( prev => prev.id !== item.id )
            setState( data )
        }
    }
    const handleSubmitGid = () => {
        setPostData( { ...postData, loading: true } )
        let clone = state
            .filter( prev => !Object.keys( prev ).includes( 'del_id' ) )
            .map( item => { return { language: item?.language, level: item?.level?.value } } )
        postResponse( '/api/gids/edit/language/', clone, setPostData )
    }
    React.useEffect( () => {toastChecker(postData)}, [ postData ] )
    React.useEffect( () => { getResponse( common.personal.edit.language, setGetData ) }, [ callback ] )
    React.useEffect( () => {
        if ( getData?.success !== '' )
        {
            let data = getData?.success?.data.map( ( item ) => {
                return {
                    id: uuid(),
                    del_id: item?.id,
                    language: item?.language,
                    level: { value: item?.level, label: SELECTION[ item?.level ] }
                }
            } )
            setState( data )
        }
    }, [ getData ] )
    console.log(state)
    return (
        <Wrapper>
            <Container padding="10px 0">
                { getRole?.role === "gid" ?
                    <>
                        {
                            getData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } /> :
                                state.map( ( item, index ) => (
                                    <FadeIn>
                                        <Grid container spacing={ 1 } key={ index }>
                                            <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                                                <TextLabeledLoop label={ t( "TillarniBilish.til" ) } value={ getLabelLang(item?.language) || null} />
                                            </Grid>
                                            <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                                <TextLabeledLoop label={ t( "TillarniBilish.bilishDarajasi" ) } value={ item?.level?.label } />
                                            </Grid>
                                            <Grid item xs={ 12 } sm={ 12 } md={ 1 }>
                                                <FlexContainer width="100%" alignItems="flex-end" margin="44px 0 0 0">
                                                    <Button
                                                        paddingIcon="10px"
                                                        type="outlined"
                                                        margin="11px 10px 0 10px"
                                                        onClick={ () => handleDelete( item ) }
                                                    >
                                                        <DeleteIcon className="icon" />
                                                    </Button>
                                                </FlexContainer>
                                            </Grid>
                                        </Grid>

                                    </FadeIn>
                                ) )
                        }

                        <Grid container spacing={ 1 } >
                            <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                                <SelectLang
                                    setState={ setValue }
                                    state={ value }
                                    disableMulti
                                    label="Tilni tanlang"
                                    // field="languages" 
                                    placeholder={ t( "arizaqoldirish.BilishikeralPlac" ) }
                                    // options={ gid_lang_obj } 
                                    // errorText={ error ? validatorState( value?.languages, 'array', 0, 'Tillar kiritilmagan' ) : null }
                                />
                                {/* <TextLabeled
                                    value={ value?.languages }
                                    state={ value }
                                    setState={ setValue }
                                    field="name"
                                    sizeLabel="15px" width="100%"
                                    label={ t( "TillarniBilish.til" ) }
                                    placeholder={ t( "TillarniBilish.tilPlace" ) }
                                /> */}
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                {/* <SelectLang
                                    setState={ setValue }
                                    state={ value }
                                    // field="languages" 
                                    placeholder={ t( "arizaqoldirish.BilishikeralPlac" ) }
                                    // options={ gid_lang_obj } 
                                    // errorText={ error ? validatorState( value?.languages, 'array', 0, 'Tillar kiritilmagan' ) : null }
                                /> */}
                                <SelectLabeled
                                    setClearValue={ setClearValue }
                                    clearValue={ clearValue }
                                    options={ selection }
                                    collect={ value }
                                    setCollect={ setValue }
                                    field="level"
                                    sizeLabel="15px"
                                    width="100%"
                                    marginLabel="12px 0"
                                    label={ t( "TillarniBilish.bilishDarajasi" ) }
                                    placeholder={ t( "TillarniBilish.BilishDPlace" ) }
                                />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 12 } md={ 1 }>
                                <FlexContainer width="100%" alignItems="flex-end" margin="46px 0 0 0">
                                    <Button paddingIcon="10px" onClick={ handleAdd }>
                                        <AddIcon className="icon" />
                                    </Button>
                                </FlexContainer>
                            </Grid>
                        </Grid>
                        <Container padding="10px 0" margin="10px 0 0 -30px" textAlign="right">
                            <Button loader={ postData?.loading } onClick={ handleSubmitGid }>{ t( "TillarniBilish.save" ) }</Button>
                        </Container>
                    </>
                    :
                    <Translator 
                        getData={ getData } 
                        setCallback={ setCallback }
                        spinner={<Spinner marginTop="60px" width={ 50 } height={ 50 } />}
                    />
                }
            </Container>



        </Wrapper>
    )
}

export default Index
