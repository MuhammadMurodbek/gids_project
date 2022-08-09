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
import { useTranslation } from 'react-i18next'
import toast from 'react-hot-toast';
const Translator = ({setTrains, trains, setTrState, trState, clear, setClear}) => {
    const { t } = useTranslation()
    const [delBool, setDelBool] = useState();
    const [state, setState] = useState({name:'', year:''})
    const [collect, setCollect] = useState([])
    // const [clear, setClear] = useState(false)
    const {name,year} = state
    // console.log(trains)
    const handleClick = useCallback(()=> { 
        if(state.name !== '' && state.year !==''){
            setCollect([...collect, state])
            setTrains(prev=>{ return{
                ...prev,
                trainings:[...collect, state]
            }})
            setDelBool('')
            setClear(true)
            setState({name:'',year:''})
        }else{
            toast.error(t("kengaytirlgan_Q.toliqKiritilmagan"))
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
    useEffect(()=>{
      if(clear){
        setState({name:'',year:''})
        setTrState({})
        setClear(false)
      }
    },[clear])
    useEffect(()=>{
      if(state.name!=='' && state.year!==''){
        setTrState(state)
      }
    },[state])
    // console.log(collect)
    return (
        <div>
               <TextTitle font="16px" align="left" top="65px">
                {t("MTmenHaqimda.taqdimotlar")}
                </TextTitle>
            {
                collect?.length>0 ?
                collect.map((item, index)=>(
                    <Grid container spacing={ 1 } key={ index } className={ delBool === item ?  'animate__animated animate__fadeOutLeft': 'animate__animated animate__fadeInUp'}>
                        <Grid item md={ 9 } xs={ 7 }> 
                            <TextLabeledLoop label="" value={ item?.name } placeholder={t("MTmenHaqimda.nominiKiriting")}/>
                        </Grid>
                        <Grid item md={ 2 } xs={ 4 }>
                        <TextLabeledLoop label="" value={ item?.year } placeholder={t("MTmenHaqimda.yilniKiriting")}/>
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
               
                <Grid container spacing={ 1 } className='brifings'>
                  <Grid item md={ 9 } xs={ 7 }>
                    <InputLabeled
                      sizeLabel="15px"
                      width="100%"
                      placeholder={t("MTmenHaqimda.nominiYozing")}
                      setState={setState}
                      state={state}
                      field="name"
                      clear={clear}
                      setClear={setClear}
                    />
                  </Grid>
                  <Grid item md={ 2 } xs={ 4 }>
                    <YearPicker
                       clear={clear}
                       setClear={setClear}
                       setState={setState}
                       state={state}
                       field="year"
                       placeholder={t("MTmenHaqimda.yilniKiriting")}
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
                      <Button paddingIcon="10px" onClick={()=>setClear(!true)}>
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
