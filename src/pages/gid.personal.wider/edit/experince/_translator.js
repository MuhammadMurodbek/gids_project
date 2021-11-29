import React, { useState, useCallback } from 'react'
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";
import { TextTitle } from "../../../../styles/textTitle/index.style";
import InputLabeled from "../../../../components/molecules/input.labeled";
import { FlexContainer } from '../../../../styles/flex.container'
import TextLabeled from "../../../../components/molecules/input.labeled"
import YearPickerSelected from "../../../../components/molecules/year.picker.labeled"
import Button from "../../../../components/atom/button";
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import DeleteIcon from '@material-ui/icons/Delete';
import 'animate.css';
import toast from 'react-hot-toast';
const Translator = ( { setTrains } ) => {
  const [ delBool, setDelBool ] = useState();
  const [ state, setState ] = useState( { name: '', year: '' } )
  const [ collect, setCollect ] = useState( [] )
  const { name, year } = state
  const handleClick = useCallback( () => {
    if ( state.name !== '' && state.year !== '' )
    {
      setCollect( [ ...collect, state ] )
      setTrains( prev => {
        return {
          ...prev,
          trainings: [ ...collect, state ]
        }
      } )
      setDelBool( '' )
    } else
    {
      toast.error( "Ma'lumotlarni to'liq kiriting" )
    }
  }, [ name, year, delBool ] )
  const handleDelete = ( item ) => {
    console.log( item )
    setDelBool( item )
    let data = collect.filter( prev => prev !== item )
    setCollect( data )
    setTrains( prev => {
      return {
        ...prev,
        trainings: data
      }
    } )
  }
  // console.log(collect)
  return (
    <div>
      <TextTitle font="16px" align="left" top="65px">
        Taqdimotlar, brifinglar, matbuot anjumanlari, seminarlar va treninglarda qatnashganmisiz?
                </TextTitle>
      {
        collect?.length > 0 ?
          collect.map( ( item, index ) => (
            <Grid container spacing={ 1 }>
              <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
                <TextLabeledLoop/>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                <TextLabeledLoop />
              </Grid>
              <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                <TextLabeledLoop />
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
          ) ) : null
      }

      <Grid container spacing={ 1 }>
        <Grid item xs={ 12 } sm={ 6 } md={ 5 }>
          <TextLabeled sizeLabel="15px" width="100%" label="Bitigan instituti" placeholder="Bitirgan Oliy ta’lim mussasasini kiriting" />
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
          <YearPickerSelected sizeLabel="15px" width="100%" label="Bitirgan yili" />
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
    </div>
  )
}

export default Translator
