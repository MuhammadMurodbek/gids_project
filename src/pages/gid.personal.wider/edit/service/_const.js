import { useTranslation } from "react-i18next"

export const SelectValue =()=> {
    const {t} = useTranslation()
    return[
    { value:'no', label: t("Pismenniy_Xizmatlar.meningMavzuimEmas")},
    { value:'low', label: t("Pismenniy_Xizmatlar.orta")},
    { value:'good', label: t("Pismenniy_Xizmatlar.yaxshi")},
    { value:'great', label: t("Pismenniy_Xizmatlar.alo")},
]
}
export const SELECTVALUE = {
    
}
export const defaultListValue = () => [
    {name:'Umumiy mavzular', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Jamiyat va siyosat', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Iqtisodiyot va moliya', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Huquqshunoslik', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Axborot texnologiyalari', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Reklama va marketing', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Sanoat va texnologiya', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Neft va gaz', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Ilmiy va texnik adabiyotlar', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Badiiy adabiyot', level:{ value:'no', label:"Mavzuim emas"}},
    {name:'Tibbiyot va farmatsevtika', level:{ value:'no', label:"Mavzuim emas"}},
]

export const Option_yes = () =>{
    const {t} = useTranslation()

    return[
    { value: 1, label: t("Ustniy_MalumotvaIshtajriba.yes") },
    { value: 2, label: t("Ustniy_MalumotvaIshtajriba.No") }
];
}
export const Option_yes_sec = () =>{
    const {t} = useTranslation()

    return[
    { value: 'synchronous', label: t("xizmatlar.Sinxron") },
    { value: 'consecutive', label: t("xizmatlar.Izchil") }
]
}
export const objDefault = {
    daily_workload: null,
    can_oral_translate: true,
    oral_translate_type: 'synchronous',
    express_order: null,
    weekend_order: null,
    edit_text: null,
    always_online: true,
}
