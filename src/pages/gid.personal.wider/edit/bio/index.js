import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Wrapper } from "./style";
// import ImageUpload from "../../../../components/organism/image.uploader.f15";
import InputLabeled from "../../../../components/molecules/input.labeled";
import CalendarLabel from "../../../../components/molecules/calendar.labeled";
import DoubleRadio from "../../../../components/molecules/double.radio.labeled";
import SelectLabeled from "../../../../components/molecules/select.labeled";
import { Container } from "../../../../styles/container/index.style";
import TextArea from "../../../../components/molecules/area.labeled";
import { TextTitle } from "../../../../styles/textTitle/index.style";
import GroupImageUpload from "../../../../components/templates/group.image.upload";
import { Button } from "../../../../components/atom/button/index.style";
import { about_edit_bio_action } from "../../../../redux/actions";
import useApiData from "../../../../hooks/response";
import AddIcon from '@material-ui/icons/Add'
import ImageCrop from "../../../../components/organism/image.crop/new"
const Index = () => {
  const { responseHook, setResponseHook } = useApiData("get_about_bio_reducer");
  const [state, setState] = useState({gender:"male", image:'',imageFile:null});
  const [fileList, setFileList] = useState([]);
  const getRole = JSON.parse(localStorage.getItem('user_token'))
  useEffect(() => {setResponseHook(about_edit_bio_action())},[])
  useEffect(() => {
    if (responseHook?.gids) {
      setState(responseHook?.gids?.data);
    }
  }, [responseHook]);

  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   const payload = {
    //     ...state,
    //     country: "Uzbekistan",
    //     city: "Andijan",
    //     birthday: new Date().toISOString()
    //   };
    //   console.log(payload);
    // } catch (e) {
    //   console.log(e);
    // }
  };
  console.log(state);
  return (
    <Wrapper onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <ImageCrop setState={setState} state={state}/>
          {/* <ImageUpload width="200px" height="200px" radius="50%" /> */}
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
              <SelectLabeled sizeLabel="15px" width="100%" label="Mamlakat" />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectLabeled sizeLabel="15px" width="100%" label="Shahar" />
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
          name="bio"
          state={state}
          setState={setState}
          onChange={handleChange}
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
          <Button type="submit"> Saqlash</Button>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Index;
