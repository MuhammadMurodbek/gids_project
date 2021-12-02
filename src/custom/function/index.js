import {toast} from "react-hot-toast"
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