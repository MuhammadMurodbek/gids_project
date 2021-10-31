import React, {useState} from 'react'
import {Wrapper} from './index.style'
import RadioGroup from "./radio" 
import Selection from "./select.with.title"
// import SelectionReg from "./select.with.title.reg"
import CalendarComponent from "./data.with.title"
import CheckBoxContainer from "./checkbox.width.title"
import Button from "./button.component"
import DoubleRadio from "../molecules/double.radio.labeled"
const Index = () => {
    const value_region = sessionStorage.getItem('reg_search') || false
    console.log(value_region)
    // const {type} = props
    // const [state, setState] = useState()
    // const [region, setRegion] = useState()
    // const [optionsRegion, setOptionsRegion] = useState()
    // const options = useMemo(() => countryList().getData(), [])
    // useEffect(()=>{
    //     if(state){
    //         getResponseRegion('http://geodb-free-service.wirefreethought.com/v1/geo/countries/'+state.value+'/regions', setRegion)
    //     }
    // },[state])
    // useEffect(()=>{
    //     if(region){
    //         let listRegion = region?.success?.data?.data.map(item=>{return {value:item.isoCode, label:item.name}})
    //         if(listRegion){
    //             setOptionsRegion(listRegion)
    //         }
    //         console.log( region?.success?.data?.data)
    //         // console.log(options)
    //     }
    // },[region])
    
    return (
        <Wrapper width="350px">
            <div className="title-header">Kengaytirilgan qidiruv</div>
            <RadioGroup/>   
            <Selection title="Davlat" placeholder="Davlat kiriting"/>
            {/* {value_region ? <SelectionReg  title="Shahar" placeholder="Shahar kiriting"/>:null} */}
            {/* <SelectionReg  title="Shahar" placeholder="Shahar kiriting"/> */}
            <CalendarComponent title="Sana" />
            <CalendarComponent/>
            <DoubleRadio name1="Onlayn" name2="Barchasi"/>
            <Selection title="Til"/>
            <CheckBoxContainer name1="Erkak" name2="Ayol"/>
            <div className="button-wrapper">
                <Button width="280px" name="Qidiruv"/>
            </div>
        </Wrapper>
    )
}

export default Index
