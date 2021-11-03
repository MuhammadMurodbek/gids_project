import React, {useState, useEffect} from 'react'
import {WrapperForm} from "./style"
import InputLabeled from "../../molecules/input.labeled"
import SelectLabeled from "../../molecules/select.labeled"
import { Grid } from '@material-ui/core'


const Index = ({state, setState}) => {

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
                        label="Ism" 
                        name="first_name" 
                        placeholder="Ism kiriting"
                        value={state.first_name}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabeled 
                        width="100%"
                        label="Familiya" 
                        name="last_name" 
                        placeholder="Familiya kiriting"
                        value={state.last_name}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <InputLabeled 
                        width="100%"
                        label="Kompaniya" 
                        name="company"
                        placeholder="Kompaniya nomini kiriting"
                        value={state.company}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeled options={countries} setState={setCountry} width="100%" label="Davlat" placeholder={state?.country?.label} pcolor={state?.country}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectLabeled options={region} setState={setRegionItem} width="100%" label="Shahar" placeholder={state?.city?.label} pcolor={state?.city}/>
                </Grid>
            </Grid>
        </WrapperForm>
    )
}

export default Index
