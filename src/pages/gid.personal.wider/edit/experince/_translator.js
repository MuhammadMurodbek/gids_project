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
import { useTranslation } from 'react-i18next'
import { putResponse, getResponse } from '../../../../hooks/response_get'
import { common } from "../../../../custom/url"
import toast from 'react-hot-toast';
import {toastChecker} from "../../../../custom/function"
const Translator = ( { getData } ) => {

  const { t } = useTranslation()
  const [ delBool, setDelBool ] = useState();
  const [ dataList, setDataList ] = useState( [] )
  const [ clear, setClear ] = useState( false )
  const [ submitData, setSubmitData ] = useState( { success: '', error: '', loading: false } )
  const [ state, setState ] = useState( { name: '', year: '', speciality: '' } )
  const [ postData, setPostData ] = useState( { experience_year: '', is_freelancer: false, work_place: '', position: '', work_time: { from: '', to: '' }, universities: [] } )
  const { name, year, speciality } = state
  const handleClick = useCallback( () => {
    if ( name !== '' && year !== '' && speciality !== '' && !dataList.find( p => p === state ) )
    {
      setDataList( [ ...dataList, state ] )
      setClear( true )
      setDelBool( '' )
    } else
    {
      toast.error( "Ma'lumotlarni to'liq kiriting" )
    }
  }, [ name, year, delBool, speciality ] )
  const handleDelete = ( item ) => {
    // console.log( item )
    setDelBool( item )
    let data = dataList.filter( prev => prev !== item )
    setDataList( data )
  }
  // console.log( dataList )
  useEffect( () => {
    if ( getData?.success !== '' && getData?.success?.data?.universities !== null )
    {
      setDataList( getData?.success?.data?.universities )
      setPostData( () => {
        return {
          ...getData?.success?.data,
          work_place: getData?.success?.data?.work_place,
          work_time: { from: getData?.success?.data?.work_time?.substr( 0, 5 ), to: getData?.success?.data?.work_time?.substr( 8, 12 ) }
        }
      } )
    }
  }, [ getData ] )
  const handleSubmit = () => {
    setSubmitData( { ...submitData, loading: true } )
    let dataSubmit = {
      ...postData,
      experience_year: postData.experience_year?.value,
      is_freelancer: postData.is_freelancer?.value,
      work_time: `${ postData?.from || postData?.work_time?.from } | ${ postData?.to || postData?.work_time?.to }`,
      universities: dataList,
    }
    putResponse( common.personal.edit.education, dataSubmit, setSubmitData )
  }
  useEffect( () => {toastChecker(submitData)}, [ submitData ] )
  return (
    <div>
      {
        dataList?.length > 0 ?
          dataList.map( ( item, index ) => (
            <Grid container spacing={ 1 } key={ index }>
              <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                <TextLabeledLoop value={ item?.name } label="Bitirgan instituti" />
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
          <TextLabeled clear={ clear } setClear={ setClear } setState={ setState } state={ state } field="name" sizeLabel="15px" width="100%" label="Bitirgan instituti" placeholder="Bitirgan Oliy ta’lim mussasasini kiriting" />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
          <YearPickerSelected clear={ clear } setClear={ setClear } setState={ setState } state={ state } field="year" sizeLabel="15px" width="100%" label="Bitirgan yili" />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
          <TextLabeled clear={ clear } setClear={ setClear } setState={ setState } state={ state } field="speciality" sizeLabel="15px" width="100%" label="Mutaxassisligi" placeholder="Mutaxassisligizni yozing..." />
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
              setState={ setPostData }
              state={ postData }
              field="work_place"
              defaultApiValue={ getData?.success?.data?.work_place }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
            <TextLabeled
              sizeLabel="15px"
              width="100%"
              label="Lavozimingiz"
              placeholder="Text"
              setState={ setPostData }
              state={ postData }
              field="position"
              defaultApiValue={ getData?.success?.data?.position }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 2 } style={ { position: 'relative', top: 3 } }>
            <SelectLabeled
              sizeLabel="15px"
              width="100%"
              label="Tajriba"
              placeholder="yil"
              options={ options_year }
              setCollect={ setPostData }
              collect={ setPostData }
              field="experience_year"
              defaultApiValue={ getData?.success?.data ? getData?.success?.data?.experience_year + " yil" : false }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 2 } style={ { position: 'relative', top: 3 } }>
            <SelectLabeled
              sizeLabel="15px"
              width="100%"
              label="Siz hozir frilansirsiz?"
              placeholder="none"
              options={ options_yes }
              setCollect={ setPostData }
              collect={ setPostData }
              field="is_freelancer"
              defaultApiValue={ getData?.success?.data ? getData?.success?.data?.is_freelancer ? "Ha" : "Yoq" : false }
            />
          </Grid>
        </Grid>
      </Container>
      <Container padding="10px 0">
        <Grid container style={ { alignItems: 'center' } }>
          <Grid item xs={ 12 } sm={ 6 } md={ 2 } style={ { marginRight: 8 } }>
            <TimePicker
              label="Ish vaqtingiz (...dan)"
              setState={ setPostData }
              state={ postData }
              field="from"
              defaultValue={ getData?.success?.data?.work_time?.substr( 0, 5 ) }
            />
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } md={ 2 }>
            <TimePicker
              label="(...gacha)"
              setState={ setPostData }
              state={ postData }
              field="to"
              defaultValue={ getData?.success?.data?.work_time?.substr( 8, 12 ) }
            />
          </Grid>
        </Grid>
      </Container>
      <Container padding="10px" textAlign="right">
        <Button
          loader={ submitData?.loading }
          onClick={ handleSubmit }
        >
          { t( "IshTajriba.saqlash" ) }
        </Button>
      </Container>
    </div>
  )
}

export default Translator
