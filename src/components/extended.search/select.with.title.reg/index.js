import React,{useMemo, useState, useEffect } from 'react'
import Select from "../../atom/select"
import {Wrapper} from "./index.style"
// import countryList from 'react-select-country-list'
import {getResponseRegion} from "../../../hooks/response_get"
const Index = (props) => {
    // const {value} = valueRegSearch
    const [region, setRegion] = useState()
    useEffect(() =>{
        const valueRegSearch = sessionStorage.getItem('reg_search')
        console.log(valueRegSearch)
        // if(value){
        //     console.log(value)
        //     getResponseRegion('http://geodb-free-service.wirefreethought.com/v1/geo/countries/'+value+'/regions', setRegion)
        // }
    },[])
    // const {setRegion, optionCheck, optionsProps} = props
    // const [state, setState] = useState()
    // const [region, setRegion] = useState()
    // const [optionsRegion, setOptionsRegion] =  useState()
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
    // console.log(options)
    // console.log(optionsRegion)
    // console.log(type)
    return (
        <Wrapper>
            <div className="title">{props.title}</div>
            <Select placeholder={props.placeholder}/>
        </Wrapper>
    )
}

export default Index
