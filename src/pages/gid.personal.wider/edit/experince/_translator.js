import React, { useState, useCallback, useEffect } from 'react'
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";
import SelectLabeled from "../../../../components/molecules/select.labeled"
import TimePicker from "../../../../components/molecules/time.picker.labeled"
import { FlexContainer } from '../../../../styles/flex.container'
import TextLabeled from "../../../../components/molecules/input.labeled"
import YearPickerSelected from "../../../../components/molecules/year.picker.labeled"
import Button from "../../../../components/atom/button";
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '../../../../styles/container/index.style'
import { options_year, options_yes } from "./_const"
import 'animate.css';
import { useTranslation } from 'react-i18next'
import {putResponse } from '../../../../hooks/response_get'
import {translator} from "../../../../custom/url"
import toast from 'react-hot-toast';
const Translator = () => {
  const { t } = useTranslation()
  const [ delBool, setDelBool ] = useState();
  const [ collect, setCollect ] = useState( [] )
  const [submitData, setSubmitData ] = useState({ success: '', error: '', loading: false})
  const [ state, setState ] = useState( { name: '', year: '', speciality: '' } )
  const [postData, setPostData ] = useState({experience_year:'',is_freelancer:false,work_place:'',position:'',work_time:{from:'',to:''}, universities:[]})
  const { name, year, speciality } = state
  const handleClick = useCallback( () => {
    if ( state.name !== '' && state.year !== '' && state.speciality !== '' )
    {
      setCollect( [ ...collect, state ] )
      setDelBool( '' )
    } else
    {
      toast.error( "Ma'lumotlarni to'liq kiriting" )
    }
  }, [ name, year, delBool, speciality ] )
  const handleDelete = ( item ) => {
    console.log( item )
    setDelBool( item )
    let data = collect.filter( prev => prev !== item )
    setCollect( data )
  }
  useEffect(()=>{setPostData({...postData, universities:collect})},[collect])
  const handleSubmit = () => {
    setSubmitData({...submitData, loading:true})
    let dataSubmit = {
      ...postData,
      experience_year:postData.experience_year?.value,
      is_freelancer:postData.is_freelancer?.value,
      work_time:`${postData?.from} | ${postData?.to}`,
    }
    putResponse(translator.edit.education,dataSubmit, setSubmitData)
    // console.log(translator.edit.education, )
  }
  useEffect(() => {
    if(submitData.success!=='') toast.success('Successfully loaded')
    if(submitData.error!=='') toast.success('Something went wrong')
  },[submitData])
  console.log( postData )
  return (
    <div>
      {
        collect?.length > 0 ?
          collect.map( ( item, index ) => (
            <Grid container spacing={ 1 } key={ index } className="animate__animated animate__fadeInUp">
              <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                <TextLabeledLoop value={ item?.name } label="Bitigan instituti" />
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                <TextLabeledLoop value={ item?.year } label="Bitirgan yili" />
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                <TextLabeledLoop value={ item?.speciality } label="Mutaxassisligi" />
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } md={ 1 }>
                <FlexContainer width="auto" flexDirection="column" gap="8px" margin="45px 0 0 auto" >
                  <div style={ { marginLeft: "auto" } }>
                    <Button onClick={ () => handleDelete( item ) } paddingIcon="10px" >
                      <DeleteIcon className="icon" />
                    </Button>
                  </div>
                </FlexContainer>
              </Grid>

            </Grid>
          ) ) : null
      }

      <Grid container spacing={ 1 }>
        <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
          <TextLabeled setState={ setState } state={ state } field="name" sizeLabel="15px" width="100%" label="Bitigan instituti" placeholder="Bitirgan Oliy ta’lim mussasasini kiriting" />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
          <YearPickerSelected defaultValue="" setState={ setState } state={ state } field="year" sizeLabel="15px" width="100%" label="Bitirgan yili" />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
          <TextLabeled setState={ setState } state={ state } field="speciality" sizeLabel="15px" width="100%" label="Mutaxassisligi" placeholder="Mutaxassisligizni yozing..." />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 1 }>
          <FlexContainer width="auto" flexDirection="column" gap="8px" margin="45px 0 0 auto" >
            <div style={ { marginLeft: "auto" } }>
              <Button onClick={ handleClick } paddingIcon="10px" >
                <AddIcon className="icon" />
              </Button>
            </div>
          </FlexContainer>
        </Grid>

      </Grid>

      <Container padding="10px 0">
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
            <TextLabeled 
              sizeLabel="15px" 
              width="100%" 
              label="Ish joyingizni ko'rsating" 
              placeholder="Text" 
              setState={setPostData}
              state={postData}
              field="work_place"
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
            <TextLabeled 
              sizeLabel="15px" 
              width="100%" 
              label="Lavozimingiz" 
              placeholder="Text" 
              setState={setPostData}
              state={postData}
              field="position"
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 2 } style={{position: 'relative', top:3}}>
            <SelectLabeled 
              sizeLabel="15px" 
              width="100%" 
              label="Tajriba" 
              placeholder="yil"
              options={ options_year } 
              setCollect={setPostData}
              collect={setPostData}
              field="experience_year"
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 2 } style={{position: 'relative', top:3}}>
            <SelectLabeled 
              sizeLabel="15px" 
              width="100%" 
              label="Siz hozir frilansirsiz?" 
              placeholder="none" options={ options_yes } 
              setCollect={setPostData}
              collect={setPostData}
              field="is_freelancer"
            />
          </Grid>
        </Grid>
      </Container>
      <Container padding="10px 0">
        <Grid container style={{alignItems: 'center'}}>
          <Grid item xs={ 12 } sm={ 6 } md={2} style={{marginRight:8}}>
            <TimePicker 
              label="Ish vaqtingiz (...dan)"
              setState={setPostData}
              state={postData}
              field="from"
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={2}>
            <TimePicker 
              label="(...gacha)"
              setState={setPostData}
              state={postData}
              field="to"
            />
          </Grid>
        </Grid>
      </Container>
      <Container padding="10px" textAlign="right">
          <Button 
            loader={submitData?.loading} 
            onClick={ handleSubmit}
          >
            { t( "IshTajriba.saqlash" ) }
          </Button>
      </Container>
    </div>
  )
}

export default Translator
