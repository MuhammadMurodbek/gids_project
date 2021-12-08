import React,{useState } from 'react'
import SelectLabeledCountry from "../../molecules/select.labeled.country"
import SelectLabeledCity from "../../molecules/select.labeled.country/city"
import {Wrapper} from "./index.style"
import { useTranslation } from 'react-i18next'

const Index = (props) => {
    const {state, setState } = props
    const {t} = useTranslation()
    const [countryId, setCountryId] = useState(null)
    // const [country, setCountry] = useState()
    // const [region, setRegion] = useState()
    // const [check, setCheck] = useState(true)
    // const [regionItem, setRegionItem] = useState()
    // const countries = JSON.parse(localStorage.getItem('countries'))?.map((item,index)=>{return {value:index, label:item.country, ...item}}) || []
    // useEffect(() => {

    //     if(country){
    //         let array = country?.cities.map((item, index)=>{return {value:index, label:item}})
    //         setRegion(array)
    //         setCheck(false)
    //         if(setState){
    //             setState({...state, [field1]:country})
    //         }
    //     }
        
    // },[country])
    // useEffect( () => {
    //     if(setState){
    //         setState({...state, [field2]:regionItem})
    //     }
    // },[regionItem])
    return (
        <>
        <Wrapper>
            <div className="title">{props.title}</div>
            <SelectLabeledCountry
                className="selects"
                setCountryId={setCountryId}
                setState={setState} 
                state={state}
                placeholder={t("kengaytirlgan_Q.DavlatniTanlang")}
            />
        </Wrapper>
        <Wrapper >
            <div className="title">{t("kengaytirlgan_Q.Shaharlar")}</div>
            <SelectLabeledCity
                className="selects"
                countryId={countryId}
                setState={setState}
                state={state} 
                isDisabled={countryId === null ? true:false}
                placeholder={t("kengaytirlgan_Q.ShaharniTanlang")}
            />
        </Wrapper>
        </>
    )
}

export default Index
