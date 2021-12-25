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

// import {getLabelCountry} from "../../../../custom/function"
const Index = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  // const selector = useSelector(a=>a.saveTabReducer)
  const [countryId, setCountryId] = useState(1)
  const [ state, setState ] = useState( defaultObj );
  const [ error, setError ] = useState( false )
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
      setState( apiValue?.success?.data );
    }
    if ( apiValue?.error !== "" ) { toast.error( "Ma'lumotlarni yuklashda xatolik mavjud" ); }
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
      setResponseHook( post_bio_data_action( clone ) );
      dispatch(saveTabAction(1))
    }
  };
  // console.log(state)
  // console.log(responseHook)
  return (
    <Wrapper onSubmit={ ( e ) => e.preventDefault() }>
      {apiValue?.success === "" ? (
        <Spinner marginTop="60px" width={ 50 } height={ 50 } />
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
                    label="Familiya"
                    placeholder="Familiyangizni yozing..."
                    errorText={ error ? validatorState( state?.last_name, 'min', 3, 'Familiya kiritilmagan (kamida 3 ta)' ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputLabeled
                    value={ state?.first_name }
                    name="first_name"
                    onChange={ handleChange }
                    sizeLabel="15px"
                    width="100%"
                    label="Ism"
                    placeholder="Ismingizni yozing..."
                    errorText={ error ? validatorState( state?.first_name, 'min', 3, 'Ism kiritilmagan (kamida 3 ta)' ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputLabeled
                    value={ state?.middle_name }
                    name="middle_name"
                    onChange={ handleChange }
                    sizeLabel="15px"
                    width="100%"
                    label="Otangizni ismi"
                    placeholder="Otangizni ismini yozing..."
                    errorText={ error ? validatorState( state.middle_name, 'min', 3, 'Kamida 3 ta belgidan foydalaning' ) : null }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } md={ 4 }>
                  <CalendarLabel
                    sizeLabel="15px"
                    width="100%"
                    label="Sana"
                    placeholder={ state?.birthday || "dd-mm-yyyy0" }
                    placeholderValue={ state?.birthday || false }
                    setState={ setState }
                    state={ state }
                    field="birthday"
                    errorText={ error ? validatorState( state.birthday, 'min', 3, 'Sana kiritilmagan' ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <DoubleRadio
                    sizeLabel="15px"
                    field="gender"
                    label="Jinsi"
                    name1="Erkak"
                    name2="Ayol"
                    value1="male"
                    value2="female"
                    state={ state }
                    setState={ setState }
                    defaultApiValue={apiValue?.success?.data?.gender}
                    errorText={ error ? validatorState( state.gender, 'min', 3, 'Jinsi tanlanmagan' ) : null }
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
                      label="Davlatni kiriting"
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
                        label="Shaharni kiriting"
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
              label="O‘zingiz haqingizda"
              placeholder="O‘zingiz haqingizda yozing..."
              value={ state?.bio }
              field="bio"
              state={ state }
              style={ { minHeight: 400 } }
              setState={ setState }
            />
          </Container>
          <Container padding="10px 0">
            <TextTitle font="16px" align="left" top="15px">
              Sertifikat va diplomlaringiz bo‘lsa shu yerga yuklang
            </TextTitle>
            <GroupImageUpload role={ getRole?.role } />
            { getRole?.role !== "gid" ? (
              <>
                <Translator setTrains={setState} trains={state?.trainings}/>
              </>
            ) : null }
            <div className="btnGrop">
              <Button onClick={ handleSubmit } loader={ responseHook?.loading } type="submit">
                { " " }
                Saqlash
              </Button>
            </div>
          </Container>
        </>
      ) }
    </Wrapper>
  );
};

export default Index;
