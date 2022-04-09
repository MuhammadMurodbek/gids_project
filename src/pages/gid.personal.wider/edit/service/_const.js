export const selectValue =()=> [
    { value:'no', label:'Mening mavzuyim emas'},
    { value:'low', label:"O'rta"},
    { value:'good', label:"Yaxshi"},
    { value:'great', label:"A'lo"},
]
export const SELECTVALUE = {
    
}
export const defaultListValue = () => [
    {name:'Umumiy mavzular', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Jamiyat va siyosat', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Iqtisodiyot va moliya', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Huquqshunoslik', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Axborot texnologiyalari', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Reklama va marketing', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Sanoat va texnologiya', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Neft va gaz', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Ilmiy va texnik adabiyotlar', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Badiiy adabiyot', level:{ value:'no', label:"Mavzuyim emas"}},
    {name:'Tibbiyot va farmatsevtika', level:{ value:'no', label:"Mavzuyim emas"}},
]

export const option_yes = [
    { value: 1, label: "Ha" },
    { value: 2, label: "Yoq" }
]
export const option_yes_sec = [
    { value: 'synchronous', label: "Sinxron" },
    { value: 'consecutive', label: "Izchil" }
]
export const objDefault = {
    daily_workload: null,
    can_oral_translate: true,
    oral_translate_type: 'synchronous',
    express_order: null,
    weekend_order: null,
    edit_text: null,
    always_online: true,
}
