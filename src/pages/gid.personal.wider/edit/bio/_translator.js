import React, {useState, useCallback, useEffect} from 'react'
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";
// import { FlexContainer } from '../../../../styles/flex.container'
import { TextTitle } from "../../../../styles/textTitle/index.style";
import InputLabeled from "../../../../components/molecules/input.labeled";
import Button from "../../../../components/atom/button";
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import DeleteIcon from '@material-ui/icons/Delete';
import 'animate.css';
import YearPicker from "../../../../components/molecules/year.picker.labeled"
import toast from 'react-hot-toast';
const Translator = ({setTrains, trains}) => {
    const [delBool, setDelBool] = useState();
    const [state, setState] = useState({name:'', year:''})
    const [collect, setCollect] = useState([])
    const {name,year} = state
    console.log(trains)
    const handleClick = useCallback(()=> { 
        if(state.name !== '' && state.year !==''){
            setCollect([...collect, state])
            setTrains(prev=>{ return{
                ...prev,
                trainings:[...collect, state]
            }})
            setDelBool('')
        }else{
            toast.error("Ma'lumotlarni to'liq kiriting")
        }
    },[name, year, delBool])
    const handleDelete = (item) => {
        // console.log(item)
        setDelBool(item)
        let data = collect.filter(prev=>prev!==item)
        setCollect(data)
        setTrains(prev=>{ return{
            ...prev,
            trainings:data
        }})
    }
    useEffect( () => {
      if(trains) setCollect(trains)
    },[trains])
    // console.log(collect)
    return (
        <div>
               <TextTitle font="16px" align="left" top="65px">
                 Taqdimotlar, brifinglar, matbuot anjumanlari, seminarlar va treninglarda qatnashganmisiz?
                </TextTitle>
            {
                collect?.length>0 ?
                collect.map((item, index)=>(
                    <Grid container spacing={ 1 } key={ index } className={ delBool === item ?  'animate__animated animate__fadeOutLeft': 'animate__animated animate__fadeInUp'}>
                        <Grid item md={ 9 } xs={ 7 }> 
                            <TextLabeledLoop label="" value={ item?.name } placeholder="Nomini kiriting"/>
                        </Grid>
                        <Grid item md={ 2 } xs={ 4 }>
                        <TextLabeledLoop label="" value={ item?.year } placeholder="Yilni kiriting"/>
                        </Grid>
                        <Grid item md={ 1 } xs={ 1 }>
                            <div style={ { position: 'relative', top: 11 } }>
                            <Button onClick={() =>handleDelete(item)}paddingIcon="10px">
                                <DeleteIcon className="icon" />
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                )) :null
            }
               
                <Grid container spacing={ 1 }>
                  <Grid item md={ 9 } xs={ 7 }>
                    <InputLabeled
                      sizeLabel="15px"
                      width="100%"
                      placeholder="Nomini yozing"
                      setState={setState}
                      state={state}
                      field="name"
                    />
                  </Grid>
                  <Grid item md={ 2 } xs={ 4 }>
                    <YearPicker
                       setState={setState}
                       state={state}
                       field="year"
                       placeholder="Yilni kiriting"
                    />
                    {/* <InputLabeled
                      sizeLabel="15px"
                      width="100%"
                      placeholder="Yilni yozing"
                     
                      typeNumber
                    /> */}
                  </Grid>
                  <Grid item md={ 1 } xs={ 1 }>
                    <div style={ { position: 'relative', top: 14 } }>
                      <Button paddingIcon="10px" type="outlined">
                        <DeleteIcon className="icon" />
                      </Button>
                      <Button onClick={handleClick}paddingIcon="10px">
                        <AddIcon className="icon" />
                      </Button>
                    </div>
                  </Grid>

                </Grid>
        </div>
    )
}

export default Translator
