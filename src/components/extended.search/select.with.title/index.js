import React,{useState, useEffect } from 'react'
import Select from "../../atom/select"
import {Wrapper} from "./index.style"
import { useTranslation } from 'react-i18next'

const Index = (props) => {
    const {state, setState, field1, field2} = props
    const {t} = useTranslation()
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [check, setCheck] = useState(true)
    const [regionItem, setRegionItem] = useState()
    const countries = JSON.parse(localStorage.getItem('countries'))?.map((item,index)=>{return {value:index, label:item.country, ...item}}) || []
    useEffect(() => {

        if(country){
            let array = country?.cities.map((item, index)=>{return {value:index, label:item}})
            setRegion(array)
            setCheck(false)
            if(setState){
                setState({...state, [field1]:country})
            }
        }
        
    },[country])
    useEffect( () => {
        if(setState){
            setState({...state, [field2]:regionItem})
        }
    },[regionItem])
    return (
        <>
        <Wrapper>
            <div className="title">{props.title}</div>
            <Select options={countries} placeholder={props.placeholder} setState={setCountry}/>
        </Wrapper>
        <Wrapper >
            <div className="title">{t("kengaytirlgan_Q.Shaharlar")}</div>
            <Select isDisabled={check} options={region} placeholder={t("kengaytirlgan_Q.ShaharniTanlang")} setState={setRegionItem}/>
        </Wrapper>
        </>
    )
}

export default Index
