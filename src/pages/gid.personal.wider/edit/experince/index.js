import { Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
import CalendarLabeled from "../../../../components/molecules/calendar.labeled"
import Button from "../../../../components/atom/button"
import { FlexContainer } from '../../../../styles/flex.container'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import DoubleTime from "../../../../components/molecules/double.time.labeled"
import { useTranslation } from 'react-i18next'
import { degrees, options_year, options_yes, degrees_gid, DEGREES, DEGREES_GIT } from "./_const"
import MultiInput from "../../../../components/molecules/multivalue.input"
import { putResponse, getResponse } from "../../../../hooks/response_get"
import toast from 'react-hot-toast'
import ExtraRole from "./_translator"
import Spinner from "../../../../components/atom/loading.spinner.line";
const Index = () => {
    const { t } = useTranslation()
    const getRole = JSON.parse( localStorage.getItem( "user_token" ) ); ///SHUNDAY YOZILSIN
    const [ getData, setGetData ] = useState( { success: '', error: '' } )
    const [ postGid, setPostGid ] = useState( { success: '', error: '', loading: false } )
    const [ stateGid, setStateGid ] = useState( { education_degree: '', completed_university: '', category: '', additional_courses: [], experience_year: '' } )
    // console.log( stateGid )
    const handleSubmit = (e) => {
        e.preventDefault()
        setPostGid( { ...postGid, loading: true } )
        let clone = stateGid
        clone.category = stateGid?.category?.value
        clone.education_degree = stateGid?.education_degree?.value
        clone.experience_year = stateGid?.experience_year?.value
        clone.completed_university = stateGid?.completed_university || getData?.success?.data?.completed_university
        putResponse( '/api/gids/edit/education/', stateGid, setPostGid )
    }
    useEffect( () => { getResponse( '/api/gids/edit/education/', setGetData ) }, [] )
    useEffect( () => {
        if ( postGid?.success !== '' ) toast.success( 'Saved successfully' )
        if ( postGid?.error !== '' ) toast.error( 'Failed to save data' )
    }, [ postGid ] )
    console.log('first')
    return (
        <Wrapper onSubmit={ handleSubmit }>
            {/* <Spinner marginTop="60px" width={ 50 } height={ 50 } /> */ }
            {getRole?.role === "gid" ?
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
                                            placeholder={ t( "IshTajriba.oliy" ) }
                                            setCollect={ setStateGid }
                                            collect={ stateGid }
                                            field="education_degree"
                                            pcolor={ getData?.success?.data }
                                            placeholder={ getData.success?.data !== '' ? DEGREES[ getData?.success?.data?.education_degree ] : "Select" }
                                        />
                                    </Grid>
                                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                                        <TextLabeled
                                            sizeLabel="15px"
                                            width="100%"
                                            label={ t( "IshTajriba.bitirgan" ) }
                                            placeholder={ t( "IshTajriba.toifasi" ) }
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
                                            collect={ stateGid }
                                            field="category"
                                            label={ t( "IshTajriba.toifasi" ) }
                                            pcolor={ getData?.success?.data || false }
                                            placeholder={ getData.success?.data !== '' ? DEGREES_GIT[ getData?.success?.data?.category ] : t( "IshTajriba.toifaPlace" ) }
                                        // placeholder={t("IshTajriba.toifaPlace")} 
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
                                            placeholder={ getData.success?.data?.experience_year + ' yil' || t( "IshTajriba.year" ) }
                                        />
                                    </Grid>
                                </Grid>
                            </>
                    }
                </Container>
                :
                <>
                    <ExtraRole/>
                    <Container padding="10px 0">
                        <Grid container spacing={ 1 }>
                            <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                                <TextLabeled sizeLabel="15px" width="100%" label="Bitigan instituti" placeholder="Bitirgan Oliy ta’lim mussasasini kiriting" />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                                <CalendarLabeled sizeLabel="15px" width="100%" label="Bitirgan yili" />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                                <TextLabeled sizeLabel="15px" width="100%" label="Mutaxassisligi" placeholder="Mutaxassisligizni yozing..." />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 1 }>
                                <FlexContainer width="auto" flexDirection="column" gap="8px" margin="45px 0 0 auto" >
                                    <div style={ { marginLeft: "auto" } }>
                                        <Button paddingIcon="10px" type="outlined">
                                            <DeleteIcon className="icon" />
                                        </Button>
                                    </div>
                                </FlexContainer>
                            </Grid>
                        </Grid>
                        <Container width="100%" padding="10px 0px" textAlign="right"
                        >
                            <Button paddingIcon="10px"  ><AddIcon className="icon" /></Button>
                        </Container>
                    </Container>
                    <Container padding="10px 0">
                        <Grid container spacing={ 1 }>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><TextLabeled sizeLabel="15px" width="100%" label="Ish joyingizni ko'rsating" placeholder="Text" /></Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><TextLabeled sizeLabel="15px" width="100%" label="Lavozimingiz" placeholder="Text" /></Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 4 }><DoubleTime sizeLabel="15px" width="100%" label="Siz hozir frilansirsiz?" /></Grid>
                        </Grid>
                    </Container>
                    <Container padding="10px 0">
                        <Grid container spacing={ 1 }>
                            <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                                <SelectLabeled sizeLabel="15px" width="100%" label="Tajriba" placeholder="yil"
                                    options={ options_year } />
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                                <SelectLabeled sizeLabel="15px" width="100%" label="Siz hozir frilansirsiz?" placeholder="none" options={ options_yes } />
                            </Grid>
                        </Grid>
                    </Container>

                </>
            }

            <Container padding="10px" textAlign="right">
                <Button onClick={ handleSubmit}loader={ postGid?.loading }>{ t( "IshTajriba.saqlash" ) }</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
