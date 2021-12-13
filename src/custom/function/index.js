import {toast} from "react-hot-toast"
const lanOptions = JSON.parse( localStorage.getItem( "lanOptions"))
const lanGlobal = JSON.parse( localStorage.getItem( "lanGlobal"))
const countryOptions = JSON.parse( localStorage.getItem( "countryOptions"))
const countryGlobal = JSON.parse( localStorage.getItem( "countryGlobal"))
const lan = localStorage.getItem("i18nextLng")
const gid_lang_obj=[
    {value:"en", label:'english'},
    {value:"ru", label:'русский'},
    {value:"uz", label:"o'zbek tili"},
];

export const get_cities = (data) => {
    if(data){
        let country = data?.map((item, index)=>{return {value:index, label:item}})
        return country
    }
    return null
}

export const toastChecker = (data, success, error) => {
    if(data?.success!== '') toast.success(success || 'Successfully uploaded')
    if(data?.error!== '') toast.error(error || 'Something went wrong')
}
export const getLabelLang = (id) => {
    if(lanGlobal && lan){
        let label = lanGlobal?.find(a=>a.id===id)?.name[lan]
        return label 
    }
}
export const getLabelLangLocal = (id) => {
    if(lanGlobal && lan){
        let label = lanGlobal?.find(a=>a.id===id)?.name[lan]
        return label 
    }
}
export const getLabelCountry = (id) => {
    if(countryGlobal){
        let obj = countryGlobal?.find(a=>a.id===id)?.name
        if(lan ==='uz') return obj?.uz
        if(lan ==='en') return obj?.en
        if(lan ==='ru') return obj?.ru
    }
}
export const getLabelCountrySecond = (id) => {
    if(countryGlobal){
        let obj = countryGlobal?.find(a=>a.id===id)?.name
        if(lan ==='uz') return obj?.uz
        if(lan ==='en') return obj?.en
        if(lan ==='ru') return obj?.ru
    }
}
export const getLabelCity = (countryID, cityID) => {
    if(countryID && cityID){
        let cityName = countryGlobal?.find(a=>a.id===countryID)
        if(cityName){
            let value = cityName?.cities[cityID-1][lan]
            // console.log(value)
            return value
        }
    }
}