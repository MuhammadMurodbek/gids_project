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
import GroupImageUpload from "../../../../components/templates/group.image.upload";
import Button from "../../../../components/atom/button";
import { post_bio_data_action } from "../../../../redux/actions";
import useApiData from "../../../../hooks/response";
import AddIcon from '@material-ui/icons/Add'
import ImageCrop from "../../../../components/organism/image.crop/new"
import {countries} from "../../../../custom/constants"
import { get_cities } from "../../../../custom/function"
import {getResponse } from "../../../../hooks/response_get"
import Spinner from "../../../../components/atom/loading.spinner.line"
const Index = () => {
  const { responseHook, setResponseHook } = useApiData("post_bio_data_reducer");
  const [state, setState] = useState({middle_name:'',first_name:'', last_name:"",birthday:'',bio:"",country:{}, city:{}, gender:null, image:'',imageFile:null});
  const [apiValue, setApiValue] = useState({success:'', error:''})
  const [fileList, setFileList] = useState([]);
  const getRole = JSON.parse(localStorage.getItem('user_token'))
  const {country} = state
  useEffect(() => {getResponse('/api/gids/edit/about/', setApiValue)},[])
  useEffect(()=> {
    if(apiValue?.success!==''){
      setState(apiValue?.success?.data)
    }
  },[apiValue])
  const handleChange = (e) => {
    setState( { ...state, [e.target.name]: e.target.value});
    console.log(state);
  };
  React.useEffect( () => {
    if ( country )
    {
        let array = get_cities( country?.cities );
        setState(prev=>{return{...prev, city:array}});
    }
  }, [ country ] )
  const handleSubmit = (e) => {
    e.preventDefault();
    let clone = state
    const formData = new FormData();
    formData.append('image',clone?.imageFile)
    formData.append('first_name',clone?.first_name)
    formData.append('last_name',clone?.last_name)
    formData.append('middle_name',clone?.middle_name)
    formData.append('birthday',clone?.birthday)
    formData.append('gender',clone?.gender)
    formData.append('country',clone?.country?.label)
    formData.append('city',clone?.city?.label)
    formData.append('bio',clone?.bio)
    setResponseHook(post_bio_data_action(formData))
    // delete clone 
  };
  console.log(apiValue?.success?.data);
  return (
    <Wrapper onSubmit={handleSubmit}>
      {
        apiValue?.success === "" ? <Spinner marginTop="60px" width={50} height={50}/>:
        <>
      <Grid container spacing={1} style={{marginTop:10}}>
        <Grid item xs={12} md={3}>
          <ImageCrop setState={setState} state={state}/>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <InputLabeled
                value={state?.last_name}
                name="last_name"
                onChange={handleChange}
                sizeLabel="15px"
                width="100%"
                label="Familiya"
                placeholder="Familiyangizni yozing..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabeled
                value={state?.first_name}
                name="first_name"
                onChange={handleChange}
                sizeLabel="15px"
                width="100%"
                label="Ism"
                placeholder="Ismingizni yozing..."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputLabeled
                value={state?.middle_name}
                name="middle_name"
                onChange={handleChange}
                sizeLabel="15px"
                width="100%"
                label="Otangizni ismi"
                placeholder="Otangizni ismini yozing..."
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <CalendarLabel
                sizeLabel="15px"
                width="100%"
                label="Sana"
                placeholder={state?.birthday || "Select date"}
                placeholderValue={state?.birthday || false}
                setState={setState}
                state={state}
                field="birthday"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DoubleRadio
                sizeLabel="15px"
                label="Jinsi"
                name1="male"
                name2="female"
                value1="male"
                value2="female"
                state={state}
                setState={setState}
              />
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <SelectLabeled setCollect={setState} field="country" collect={state} options={countries} sizeLabel="15px" width="100%" label="Mamlakat" />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectLabeled setCollect={setState} collect={state} options={state?.city ? state?.city : {value:0, label:'no data'}} sizeLabel="15px" field="city" width="100%" label="Shahar" />
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Container padding="10px 0">
        <TextArea
          width="100%"
          label="O‘zingiz haqingizda"
          placeholder="O‘zingiz haqingizda yozing..."
          value={state?.bio}
          field="bio"
          setState={setState}
        />
      </Container>
      <Container padding="10px 0">
        <TextTitle font="16px" align="left" top="15px">
          Sertifikat va diplomlaringiz bo‘lsa shu yerga yuklang
        </TextTitle>
        <GroupImageUpload fileList={fileList} setFileList={setFileList} />
        {
          getRole?.role!=="gid" ? (
            <Grid container spacing={1}>
              <Grid item md={10} xs={8}>
                <InputLabeled
                  sizeLabel="15px"
                  width="100%"
                  placeholder="Nomini yozing"
                />
              </Grid>

              <Grid item md={2} xs={4}>
                <InputLabeled
                  sizeLabel="15px"
                  width="100%"
                  placeholder="Yilni yozing"
                />
              </Grid>
              <Button paddingIcon="10px"><AddIcon className="icon" /></Button>
            </Grid>
          ):null
        }
        <div className="btnGrop">
          <Button loader={responseHook?.loading} type="submit"> Saqlash</Button>
        </div>
      </Container>
      </>
    }
    </Wrapper>
  )
}

export default Index;
