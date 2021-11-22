import React,{useState, useEffect } from 'react'
import Select from "../../atom/select"
import {Wrapper} from "./index.style"
import { useTranslation } from 'react-i18next'

const Index = (props) => {
    const {t} = useTranslation()
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [regionItem, setRegionItem] = useState()
    const countries = JSON.parse(localStorage.getItem('countries')).map((item,index)=>{return {value:index, label:item.country, ...item}}) || []
    useEffect(() => {

        if(country){
            let array = country?.cities.map((item, index)=>{return {value:index, label:item}})
            setRegion(array)
        }
        
    },[country])

    return (
        <>
        <Wrapper>
            <div className="title">{props.title}</div>
            <Select options={countries} placeholder={props.placeholder} setState={setCountry}/>
        </Wrapper>
        <Wrapper >
            <div className="title">{t("kengaytirlgan_Q.Shaharlar")}</div>
            <Select options={region} placeholder={t("kengaytirlgan_Q.ShaharniTanlang")} setState={setRegionItem}/>
        </Wrapper>
        </>
    )
}

export default Index
