import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Wrapper } from "./style";
import InputLabeled from "../../../../components/molecules/input.labeled";
import CalendarLabel from "../../../../components/molecules/calendar.labeled";
import DoubleRadio from "../../../../components/molecules/double.radio.labeled";
import SelectLabeledCountry from "../../../../components/molecules/select.labeled.country";
import SelectLabeledCity from "../../../../components/molecules/select.labeled.country/city";
import { Container } from "../../../../styles/container/index.style";
import TextArea from "../../../../components/molecules/area.labeled";
import { TextTitle } from "../../../../styles/textTitle/index.style";
import GroupImageUpload from "./_gallery";
import Button from "../../../../components/atom/button";
import { post_bio_data_action } from "../../../../redux/actions";
import useApiData from "../../../../hooks/response";
import ImageCrop from "../../../../components/organism/image.crop/new";
import { getResponse, postResponse } from "../../../../hooks/response_get";
import Spinner from "../../../../components/atom/loading.spinner.line";
import toast from "react-hot-toast";
import { validatorState } from "../../../../custom/validator"
import { userSchema } from "./_validator"
import { defaultObj } from "./_const"
import Translator from './_translator';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from "react-redux";
import {saveTabAction} from "../../../../redux/actions"
import moment from "moment"
// import {getLabelCountry} from "../../../../custom/function"




const Index = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  // const selector = useSelector(a=>a.saveTabReducer)
  const [countryId, setCountryId] = useState(1)
  const [ state, setState ] = useState( defaultObj );
  const [ error, setError ] = useState( false )
  const [trState, setTrState] = useState({})
  const [clearYear, setClearYear] = useState(false)
  const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
  const [ apiValue, setApiValue ] = useState( { success: "", error: "" } );
  const { responseHook, setResponseHook } = useApiData( "post_bio_data_reducer" );
  const countryGlobal = JSON.parse( localStorage.getItem( "countryGlobal"))
  // const cityOptions = JSON.parse( localStorage.getItem( "cityOptions"))
  // console.log(selector)
  useEffect( () => { getResponse( `/api/${ getRole?.role }s/edit/about/`, setApiValue ) }, [] );
  React.useMemo( () => {
    if ( apiValue?.success !== "" )
    {
      let api = apiValue?.success?.data
      if(!api.trainings) api.trainings = []
      setState( api );
    }
    if ( apiValue?.error !== "" ) { toast.error( t("User_MalumotlarniTax.xatolikMavjud") ); }
  }, [ apiValue ] );
  const handleChange = ( e ) => { setState( { ...state, [ e.target.name ]: e.target.value } ) };
  const handleSubmit = async () => {
    const isValid = await userSchema.isValid( state )
    // console.log(isValid)
    if ( !isValid )
    {
      setError( true )
      toast.error( 'Something went wrong' )
    }else{
      let clone = state
      delete clone.image
      if(trState.hasOwnProperty('name') && trState.hasOwnProperty('year'))  {
        clone?.trainings.push(trState)
      }
      // console.log(trState)
      setResponseHook( post_bio_data_action( clone ) );
      setClearYear(true)
      dispatch(saveTabAction(1))
      setTrState({})
    }
  };
  
  return (
    <Wrapper onSubmit={ ( e ) => e.preventDefault() }>
      {apiValue?.success === "" ? (
        <Spinner marginTop="60px" width={ 50 } height={ 50 }/>
      ) : (
        <>
          <Grid container spacing={ 1 } style={ { marginTop: 10 } }>
            <Grid item xs={ 12 } md={ 3 }>
              <ImageCrop setState={ setState } state={ state } />
            </Grid>
            <Grid item xs={ 12 } md={ 9 }>
              <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputLabeled
                    value={ state?.last_name }
                    name="last_name"
                    onChange={ handleChange }
                    sizeLabel="15px"
                    width="100%"
                    label={t("MTmenHaqimda.familya")}
                    placeholder={t("MTmenHaqimda.familyaPlace")}
                    errorText={ error ? validatorState( state?.last_name, 'min', 3, t("User_MalumotlarniTax.familyaKiritilmagan") ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputLabeled
                    value={ state?.first_name }
                    name="first_name"
                    onChange={ handleChange }
                    sizeLabel="15px"
                    width="100%"
                    label={t("MTmenHaqimda.isim")}
                    placeholder={t("MTmenHaqimda.isimPlace")}
                    errorText={ error ? validatorState( state?.first_name, 'min', 3, t("User_MalumotlarniTax.ismKiritilmagan") ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputLabeled
                    value={ state?.middle_name }
                    name="middle_name"
                    onChange={ handleChange }
                    sizeLabel="15px"
                    width="100%"
                    label={t("MTmenHaqimda.otasiningIsmi")}
                    placeholder={t("MTmenHaqimda.otasiIplace")}
                    errorText={ error ? validatorState( state.middle_name, 'min', 3, t("User_MalumotlarniTax.kamidaUchta")) : null }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } md={ 4 } className="ext_date">
                  <CalendarLabel
                    sizeLabel="15px"
                    width="100%"
                    label={t("MTmenHaqimda.tugilganSana")}
                    placeholder={moment(state?.birthday).format('DD-MM-YYYY') || "dd-mm-yyyy" }
                    placeholderValue={ state?.birthday || 'dd-mm-yyyy' }
                    setState={ setState }
                    state={ state }
                    field="birthday"
                    errorText={ error ? validatorState( state.birthday, 'min', 3, t("User_MalumotlarniTax.sanaKiritilmagan") ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <DoubleRadio
                    sizeLabel="15px"
                    field="gender"
                    label={t("MTmenHaqimda.jins")}
                    name1={t("MTmenHaqimda.erkak")}
                    name2={t("MTmenHaqimda.ayol")}
                    value1="male"
                    value2="female"
                    state={ state }
                    setState={ setState }
                    defaultApiValue={apiValue?.success?.data?.gender}
                    errorText={ error ? validatorState( state.gender, 'min', 3, t("User_MalumotlarniTax.jinsiTanlanmagan") ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }></Grid>
              </Grid>
              {/* <FadeIn visible={ ( state?.country_api && state?.city_api ) ? editIcon : true }> */}
                <Grid container spacing={ 1 }>
                  <Grid item xs={ 12 } md={ 4 }>
                    <SelectLabeledCountry
                      className="selects"
                      setCountryId={setCountryId}
                      setState={setState} 
                      state={state}
                      placeholder="Davlatni kiriting"
                      label={t("kengaytirlgan_Q.DavlatniTanlang")}
                      defaultApiValue={
                        {value:state?.country, label:countryGlobal?.find(a=>a.id===state?.country)?.name} ||
                        {value:1, label:countryGlobal?.find(a=>a.id===1)?.name}
                      }
                      // errorText={ error ? validatorState( state.c, 'min', 3, 'Sana kiritilmagan' ) : null }
                  />
                    
                  </Grid>
                  <Grid item xs={ 12 } md={ 4 }>
                    <SelectLabeledCity
                        className="selects"
                        countryId={countryId}
                        setState={setState}
                        state={state} 
                        isDisabled={countryId === null ? true:false}
                        label={t("kengaytirlgan_Q.ShaharniTanlang")}
                        placeholder={t("kengaytirlgan_Q.ShaharniTanlang")}
                        defaultApiValue={{value:state?.city, label:state?.city_name}}
                    />
                  </Grid>
                  <Grid item xs={ 12 } md={ 4 }></Grid>
                </Grid>
              {/* </FadeIn> */}
            </Grid>
          </Grid>
          <Container padding="10px 0">
            <TextArea
              width="100%"
              label={t("MTmenHaqimda.OzingizH")}
              placeholder={t("MTmenHaqimda.OzingizHplace")}
              value={ state?.bio }
              field="bio"
              state={ state }
              style={ { minHeight: 400 } }
              setState={ setState }
            />
          </Container>
          <Container padding="10px 0">
            <TextTitle font="16px" align="left" top="15px">
              {t("MTmenHaqimda.sertifikatYuklang")}
            </TextTitle>
            <GroupImageUpload role={ getRole?.role }/>

            { getRole?.role !== "gid" ? (
              <>
                <Translator setTrains={setState} trains={state?.trainings} 
                setTrState={setTrState} clear={clearYear} setClear={setClearYear} trState={trState}/>
              </>
            ) : null }
            <div className="btnGrop">
              <Button calssName="saqlashbtn" onClick={ handleSubmit } loader={ responseHook?.loading } type="submit">
                {t("MTmenHaqimda.saqlash")}
              </Button>
            </div>
          </Container>
        </>
      ) }
    </Wrapper>
  );
};

export default Index;
