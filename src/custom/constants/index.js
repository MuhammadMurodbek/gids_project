export const gid_lang_obj=[
    {value:"en", label:'english'},
    {value:"ru", label:'русский'},
    {value:"tr", label:"turkche"},
    {value:"uz", label:"o'zbek tili"},
    {value:"fr", label:"french"},
    {value:"de", label:"deustch"},
];

export const currency = [
    {value:"UZS", label:'UZS'},
    {value:"USD", label:'USD'},
    {value:"EUR", label:'EUR'},
    {value:"RUB", label:'RUB'},
]
export const CURRENCY_CHECK = {
    dollar:'USD',
    sum:'UZS',
    ruble:'RUBL',
}

export const countries = JSON.parse(localStorage.getItem('countries'))?.map((item,index)=>{return {value:index, label:item.country, ...item}}) || []