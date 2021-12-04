import React, {useState, useEffect} from 'react'
import {WrapperForm} from "./style"
import InputLabeled from "../../molecules/input.labeled"
import SelectLabeled from "../../molecules/select.labeled"
import SelectLabeledCountry from "../../molecules/select.labeled.country"
import SelectLabeledCity from "../../molecules/select.labeled.country/city"
import { Grid } from '@material-ui/core'
import {validatorState} from "../../../custom/validator"
import {useTranslation} from 'react-i18next';


const Index = ({state, setState, error}) => {
    
    const {t} = useTranslation()
    const [countryId, setCountryId] = useState(null)
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
                    <SelectLabeledCountry 
                        field="country"
                        width="100%" 
                        state={state}
                        setState={setState}
                        setCountryId={setCountryId}
                        label={t("User_MalumotlarniTax.davlat")} 
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeledCity 
                        countryId={countryId}
                        width="100%" 
                        label={t("User_MalumotlarniTax.shaxarlar")} 
                        isDisabled={countryId === null ? true:false}
                    />
                </Grid>
            </Grid>
        </WrapperForm>
    )
}

export default Index
