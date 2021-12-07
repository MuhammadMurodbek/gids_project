import {toast} from "react-hot-toast"
const lanOptions = JSON.parse( localStorage.getItem( "lanOptions"))
const countryOptions = JSON.parse( localStorage.getItem( "countryOptions"))
const cityOptions = JSON.parse( localStorage.getItem( "cityOptions"))
const gid_lang_obj=[
    {value:"en", label:'english'},
    {value:"ru", label:'русский'},
    {value:"uz", label:"o'zbek tili"},
];

export const get_cities = (data) => {
    if(data){
        let country = data.map((item, index)=>{return {value:index, label:item}})
        return country
    }
    return null
}

export const toastChecker = (data, success, error) => {
    if(data?.success!== '') toast.success(success || 'Successfully uploaded')
    if(data?.error!== '') toast.error(error || 'Something went wrong')
}
export const getLabelLang = (id) => {
    if(lanOptions){
        let label = lanOptions?.find(a=>a.value===id)?.label
        return label 
    }
}
export const getLabelCountry = (id) => {
    if(countryOptions){
        let label = countryOptions?.find(a=>a.value===id)?.label
        return label 
    }
}
export const getLabelCity = (id) => {
    if(cityOptions){
        let label = cityOptions?.find(a=>a.value===id)?.label
        return label 
    }
}