import React, {useState} from 'react'
import {WrapperForm} from "./style"
import InputLabeled from "../../molecules/input.labeled"
import SelectLabeledCountry from "../../molecules/select.labeled.country"
import SelectLabeledCity from "../../molecules/select.labeled.country/city"
import { Grid } from '@material-ui/core'
import {validatorState} from "../../../custom/validator"
import {useTranslation} from 'react-i18next';


const Index = ({state, setState, error, statePostProps}) => {
    // console.log(statePostProps)
    const {t} = useTranslation()
    const [countryId, setCountryId] = useState(1)
    const handleChange = (e)=>{setState({...state,[e.target.name]:e.target.value})}
    const countryGlobal = JSON.parse( localStorage.getItem( "countryGlobal"))
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
                    <SelectLabeledCountry 
                        field="country"
                        width="100%" 
                        state={state}
                        setState={setState}
                        setCountryId={setCountryId}
                        label={t("User_MalumotlarniTax.davlat")} 
                        defaultApiValue={{value:statePostProps?.data?.country || 1, label:statePostProps?.data?.country_name || countryGlobal?.find(a=>a.id===1)?.name}}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeledCity
                        field="city" 
                        state={state}
                        setState={setState}
                        countryId={countryId}
                        width="100%" 
                        label={t("User_MalumotlarniTax.shaxarlar")} 
                        isDisabled={countryId === null ? true:false}
                        defaultApiValue={{value:statePostProps?.data?.city || 1, label:statePostProps?.data?.city_name || countryGlobal?.find(a=>a.id===1)?.cities[0]}}
                    />
                </Grid>
            </Grid>
        </WrapperForm>
    )
}

export default Index
