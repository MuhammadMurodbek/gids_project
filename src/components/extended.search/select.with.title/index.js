import React,{useState, useEffect } from 'react'
import SelectLabeledCountry from "../../molecules/select.labeled.country"
import SelectLabeledCity from "../../molecules/select.labeled.country/city"
import {Wrapper} from "./index.style"
import { useTranslation } from 'react-i18next'
import {getLabelCitySearch} from "../../../custom/function"

const Index = (props) => {
    const {state, setState, defaultCountry, defaultCity } = props
    const {t} = useTranslation()
    const [countryId, setCountryId] = useState(null)
    const countryGlobal = JSON.parse( localStorage.getItem( "countryGlobal"))
    // console.log(state)
    useEffect(()=>{
        if(defaultCountry) {
            setCountryId(parseInt(defaultCountry))
            setState(a=>{return{
                ...a,
                country:parseInt(defaultCountry)
            }})
        }
        if(defaultCity){
            setState(a=>{return{
                ...a,
                city:parseInt(defaultCity)
            }})
        }
    },[defaultCountry, defaultCity])
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
                defaultApiValue={
                    defaultCountry ? 
                    {value:parseInt(defaultCountry), label:countryGlobal?.find(a=>a.id===parseInt(defaultCountry))?.name}:
                    null
                }
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
                defaultApiValue={
                    (defaultCity && defaultCountry) ? 
                    {value:parseInt(defaultCity), label:getLabelCitySearch(parseInt(defaultCountry), parseInt(defaultCity))}:
                    null
                }
            />
        </Wrapper>
        </>
    )
}

export default Index
