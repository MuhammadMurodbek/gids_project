import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import { useTranslation } from 'react-i18next'
import { degrees, options_year, degrees_gid, DEGREES, DEGREES_GIT } from "./_const"
import MultiInput from "../../../../components/molecules/multivalue.input"
import { putResponse, getResponse } from "../../../../hooks/response_get"
import toast from 'react-hot-toast'
import ExtraRole from "./_translator"
import {common} from "../../../../custom/url"
import Spinner from "../../../../components/atom/loading.spinner.line";
import { useDispatch } from 'react-redux'
import {saveTabAction} from "../../../../redux/actions"

const Index = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) ); ///SHUNDAY YOZILSIN
    const [ getData, setGetData ] = useState( { success: '', error: '' } )
    const [ postGid, setPostGid ] = useState( { success: '', error: '', loading: false } )
    const [ stateGid, setStateGid ] = useState( { education_degree: '', completed_university: '', category: '', additional_courses: [], experience_year: '' } )
    // console.log( stateGid )
    const handleSubmit = (e) => {
        setPostGid( { ...postGid, loading: true } )
        let clone = stateGid
        clone.category = stateGid?.category?.value
        clone.education_degree = stateGid?.education_degree?.value
        clone.experience_year = stateGid?.experience_year?.value
        clone.completed_university = stateGid?.completed_university || getData?.success?.data?.completed_university
        putResponse( '/api/gids/edit/education/', stateGid, setPostGid )
    }
    useEffect( () => { getResponse( common.personal.edit.education, setGetData ) }, [] )
    useEffect( () => {
        if ( postGid?.success !== '' ) {
            toast.success( 'Saved successfully' )
            dispatch(saveTabAction(3))
        }
        if ( postGid?.error !== '' ) toast.error( 'Failed to save data' )
    }, [ postGid ] )
    // console.log('first')
    return (
        <Wrapper onSubmit={(e) =>e.preventDefault() }>
            {getRole?.role === "gid" ?
            <>
                <Container padding="20px 0">
                    {
                        getData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />
                            :
                            <>
                                <Grid container spacing={ 1 }>
                                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                                        <SelectLabeled
                                            options={ degrees }
                                            sizeLabel="15px"
                                            width="100%"
                                            label={ t( "IshTajriba.malumotlar" ) }
                                            setCollect={ setStateGid }
                                            collect={ stateGid }
                                            field="education_degree"
                                            pcolor={ getData?.success?.data }
                                            placeholder={ getData.success?.data !== '' ? DEGREES[ getData?.success?.data?.education_degree ] : "Select" }
                                            placeholder={ t( "IshTajriba.oliy" ) }
                                            />
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                                        <TextLabeled
                                            sizeLabel="15px"
                                            width="100%"
                                            label={ t( "IshTajriba.bitirgan" ) }
                                            placeholder={ t( "IshTajriba.BitirganOliytalimlar" ) }
                                            setState={ setStateGid }
                                            state={ stateGid }
                                            field="completed_university"
                                            defaultApiValue={ getData?.success?.data?.completed_university || '' }

                                            />
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                                        <SelectLabeled
                                            options={ degrees_gid }
                                            sizeLabel="15px"
                                            width="100%"
                                            setCollect={ setStateGid }
                                            collect={stateGid}
                                            field="category"
                                            label={ t( "IshTajriba.toifasi" ) }
                                            placeholder={ t( "IshTajriba.toifasi" ) }
                                            pcolor={ getData?.success?.data || false }
                                            placeholder={ getData.success?.data !== '' ? DEGREES_GIT[ getData?.success?.data?.category ] : t( "IshTajriba.toifaPlace" ) }
                                            placeholder={t("IshTajriba.toifaPlace")} 
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={ 1 }  >
                                    <Grid xs={ 12 } sm={ 6 } md={ 10 }>
                                        <MultiInput
                                            setState={ setStateGid }
                                            state={ stateGid }
                                            field="additional_courses"
                                            label={ t( "IshTajriba.qoshimchaKurslar" ) }
                                            defaultApiValue={ getData.success?.data?.additional_courses || [] }
                                        />
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 } md={ 2 }>
                                        <SelectLabeled
                                            sizeLabel="15px" width="100%"
                                            label={ t( "IshTajriba.tajriba" ) }
                                            options={ options_year }
                                            setCollect={ setStateGid }
                                            collect={ stateGid }
                                            field="experience_year"
                                            pcolor={ getData.success?.data || false }
                                            placeholder={ getData.success?.data?.experience_year + t( "IshTajriba.year") || t( "IshTajriba.year" ) }
                                        />
                                    </Grid>
                                </Grid>
                            </>
                    }
                </Container>
                <Container padding="-10px"  textAlign="right">
                    <Button className="btnss" onClick={ handleSubmit}loader={ postGid?.loading }> { t( "IshTajriba.saqlash" ) }</Button>
                </Container>
                </>
                :
                <>
                    <ExtraRole getData={getData}/>
                 
                </>
            }

        </Wrapper>
    )
}

export default Index
