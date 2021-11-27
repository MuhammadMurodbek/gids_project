import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Wrapper } from "./style";
import InputLabeled from "../../../../components/molecules/input.labeled";
import CalendarLabel from "../../../../components/molecules/calendar.labeled";
import DoubleRadio from "../../../../components/molecules/double.radio.labeled";
import SelectLabeled from "../../../../components/molecules/select.labeled";
import { Container } from "../../../../styles/container/index.style";
import TextArea from "../../../../components/molecules/area.labeled";
import { TextTitle } from "../../../../styles/textTitle/index.style";
import GroupImageUpload from "./_gallery";
import Button from "../../../../components/atom/button";
import { post_bio_data_action } from "../../../../redux/actions";
import useApiData from "../../../../hooks/response";
import AddIcon from "@material-ui/icons/Add";
import ImageCrop from "../../../../components/organism/image.crop/new";
import { countries } from "../../../../custom/constants";
import { get_cities } from "../../../../custom/function";
import { getResponse, postResponse } from "../../../../hooks/response_get";
import Spinner from "../../../../components/atom/loading.spinner.line";
import toast from "react-hot-toast";
import { validatorState } from "../../../../custom/validator"
import { userSchema } from "./_validator"
import { defaultObj } from "./_const"
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import { EditOutlined } from '@ant-design/icons'
import FadeIn from 'react-fade-in';
const Index = () => {
  const [ fileList, setFileList ] = useState( [] );
  const [postImage, setPostImage ] = useState({success: '', error: ''});
  const [ state, setState ] = useState( defaultObj );
  const [ error, setError ] = useState( false )
  const [editIcon, setEditIcon] = useState(false)
  const getRole = JSON.parse( localStorage.getItem( "user_token" ) );
  const [ apiValue, setApiValue ] = useState( { success: "", error: "" } );
  const { responseHook, setResponseHook } = useApiData( "post_bio_data_reducer" );
  const { country } = state;
  useEffect( () => { getResponse( "/api/gids/edit/about/", setApiValue ) }, [] );
  React.useMemo( () => {
    if ( apiValue?.success !== "" )
    {
      let data = apiValue?.success?.data;
      data.city_api = apiValue?.success?.data?.city;
      data.country_api = apiValue?.success?.data?.country;
      setState( data );
    }
    if ( apiValue?.error !== "" ) { toast.error( "Ma'lumotlarni yuklashda xatolik mavjud" ); }
  }, [ apiValue ] );
  const handleChange = ( e ) => { setState( { ...state, [ e.target.name ]: e.target.value } ) };
  React.useEffect( () => {
    if ( country )
    {
      let array = get_cities( country?.cities );
      setState( ( prev ) => {
        return { ...prev, city: array };
      } );
    }
  }, [ country ] );
  React.useEffect(() => {
    if(fileList.length > 0){
      let data = fileList[fileList.length - 1];
      const formData = new FormData();
      formData.append('image' , data?.originFileObj );
      postResponse('/api/gids/edit/gallery/', formData, setPostImage);
    }
  },[fileList])
  const handleSubmit = async ( e ) => {
    e.preventDefault();
    console.log(`Uploading`)
    let clone = state;
    let validate_obj = {
      ...clone,
      country: clone?.country?.label || clone?.country_api,
      city: clone?.city?.label || clone?.city_api,
    };
    const isValid = await userSchema.isValid( validate_obj )
    if ( !isValid ) { 
      setError( true )  
      toast.error('Something went wrong')
    }
    else
    {
      let check_img = clone.hasOwnProperty( "imageFile" );
      const formData = new FormData();
      if ( check_img ) formData.append( "image", clone?.imageFile );
      formData.append( "first_name", clone?.first_name );
      formData.append( "last_name", clone?.last_name );
      formData.append( "middle_name", clone?.middle_name );
      formData.append( "birthday", clone?.birthday );
      formData.append( "gender", clone?.gender );
      formData.append( "country", clone?.country?.label || clone?.country_api );
      formData.append( "city", clone?.city?.label || clone?.city_api );
      formData.append( "bio", clone?.bio );
      setResponseHook( post_bio_data_action( formData ) );
    }
  };
  
  // console.log(fileList[fileList.length - 1])
  return (
    <Wrapper onSubmit={ handleSubmit }>
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
                    errorText={ error ? validatorState( state?.middle_name, 'min', 3, 'Kamida 3 ta belgidan foydalaning' ) : null }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={ 1 }>
                <Grid item xs={ 12 } md={ 4 }>
                  <CalendarLabel
                    sizeLabel="15px"
                    width="100%"
                    label="Sana"
                    placeholder={ state?.birthday || "Select date" }
                    placeholderValue={ state?.birthday || false }
                    setState={ setState }
                    state={ state }
                    field="birthday"
                    errorText={ error ? validatorState( state?.birthday, 'min', 3, 'Sana kiritilmagan' ) : null }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <DoubleRadio
                    sizeLabel="15px"
                    label="Jinsi"
                    name1="male"
                    name2="female"
                    value1="male"
                    value2="female"
                    state={ state }
                    setState={ setState }
                  />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }></Grid>
              </Grid>
              {
                state?.country_api && state?.city_api ? (
                  <Grid container spacing={ 1 }>
                  <Grid item xs={ 12 } md={ 4 }>
                    <TextLabeledLoop label="Mamlakat" value={state?.country_api} placeholder="Mamlakat kiriting"/>
                  </Grid>
                  <Grid item xs={ 12 } md={ 4 }>
                    <TextLabeledLoop label="Shahar" value={state?.city_api}/>
                  </Grid>
                  <Grid item xs={ 12 } md={ 4 } style={{alignSelf:'flex-end'}}>
                    <div className="edit_div" onClick={() => setEditIcon(!editIcon)}>
                      <EditOutlined className="icon_edit"/>
                      {/* <span>edit</span> */}
                    </div>
                  </Grid>
                </Grid>
                ):null
              }
              <FadeIn visible={(state?.country_api && state?.city_api) ?  editIcon: true}>
                <Grid container spacing={ 1 }>
                  <Grid item xs={ 12 } md={ 4 }>
                    <SelectLabeled
                      setCollect={ setState }
                      field="country"
                      collect={ state }
                      options={ countries }
                      sizeLabel="15px"
                      width="100%"
                      label="Mamlakat"
                      errorText={ error ? validatorState( state?.country, 'object', 0, 'Davlat kiritilmagan' ) : null }
                    />
                  </Grid>
                  <Grid item xs={ 12 } md={ 4 }>
                    <SelectLabeled
                      setCollect={ setState }
                      collect={ state }
                      isDisabled={!country?.hasOwnProperty('cities')}
                      options={
                        state?.city ? state?.city : { value: 0, label: "no data" }
                      }
                      sizeLabel="15px"
                      field="city"
                      width="100%"
                      label="Shahar"
                      
                    />
                  </Grid>
                  <Grid item xs={ 12 } md={ 4 }></Grid>
                </Grid>
              </FadeIn>
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
              setState={ setState }
            />
          </Container>
          <Container padding="10px 0">
            <TextTitle font="16px" align="left" top="15px">
              Sertifikat va diplomlaringiz bo‘lsa shu yerga yuklang
            </TextTitle>
            <GroupImageUpload/>
            { getRole?.role !== "gid" ? (
              <Grid container spacing={ 1 }>
                <Grid item md={ 10 } xs={ 8 }>
                  <InputLabeled
                    sizeLabel="15px"
                    width="100%"
                    placeholder="Nomini yozing"
                  />
                </Grid>

                <Grid item md={ 2 } xs={ 4 }>
                  <InputLabeled
                    sizeLabel="15px"
                    width="100%"
                    placeholder="Yilni yozing"
                  />
                </Grid>
                <Button paddingIcon="10px">
                  <AddIcon className="icon" />
                </Button>
              </Grid>
            ) : null }
            <div className="btnGrop">
              <Button loader={ responseHook?.loading } type="submit">
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
