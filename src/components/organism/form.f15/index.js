import React, {useState, useEffect} from 'react'
import {WrapperForm} from "./style"
import InputLabeled from "../../molecules/input.labeled"
import SelectLabeled from "../../molecules/select.labeled"
import { Grid } from '@material-ui/core'
import {validatorState} from "../../../custom/validator"
import {useTranslation} from 'react-i18next';


const Index = ({state, setState, error}) => {
    
    const {t} = useTranslation()
    const [country, setCountry] = useState()
    const [region, setRegion] = useState()
    const [regionItem, setRegionItem] = useState()
    const [countries, setCountries] = useState([])
    
    React.useMemo(() => {
        let countriess = JSON.parse(localStorage.getItem('countries')).map((item,index)=>{return {value:index, label:item.country, ...item}}) || []
        setCountries(countriess)
    },[])
    
    useEffect(() => {
        if(country){
            let array = country?.cities.map((item, index)=>{return {value:index, label:item}})
            setRegion(array)
        }
        setState({...state, country:{value:country?.value, label:country?.label}, city:regionItem})
    },[regionItem, country])
 
    const handleChange = (e)=>{setState({...state,[e.target.name]:e.target.value})}
    
    return (
        <WrapperForm>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabeled 
                        width="100%"
                        label={t("User_MalumotlarniTax.isim")} 
                        name="first_name" 
                        placeholder={t("User_MalumotlarniTax.isimPlace")}
                        value={state.first_name}
                        onChange={handleChange}
                        errorText={error ? validatorState(state?.first_name, 'min', 3, 'Ims kiritilmagan (kamida 3 ta belgi)'):null}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabeled 
                        width="100%"
                        label={t("User_MalumotlarniTax.familya")}
                        name="last_name" 
                        placeholder= {t("User_MalumotlarniTax.familyaPlace")}
                        value={state.last_name}
                        onChange={handleChange}
                        errorText={error ? validatorState(state?.last_name, 'min', 3, 'Familiya kiritilmagan (kamida 3 ta belgi)'):null}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <InputLabeled 
                        width="100%"
                        label={t("User_MalumotlarniTax.Kompaniya")} 
                        name="company"
                        placeholder= {t("User_MalumotlarniTax.kompaniePlace")}
                        value={state.company}
                        onChange={handleChange}
                        errorText={error ? validatorState(state?.company, 'min', 3, 'Tashkilot nomi kiritilmagan (kamida 3 ta belgi)'):null}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeled options={countries} setState={setCountry} width="100%" label={t("User_MalumotlarniTax.davlat")} placeholder={state?.country?.label} pcolor={state?.country} errorText={error ? validatorState(state?.country, 'object', 0, 'Davlat (Shahar) nomi kiritilmagan'):null}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeled options={region} setState={setRegionItem} width="100%" label={t("User_MalumotlarniTax.shaxarlar")} placeholder={state?.city?.label} pcolor={state?.city}/>
                </Grid>
            </Grid>
        </WrapperForm>
    )
}

export default Index
