export const gid_lang_obj=[
    {value:"en", label:'english'},
    {value:"ru", label:'русский'},
    {value:"tr", label:"turkche"},
    {value:"uz", label:"o'zbek tili"},
    {value:"fr", label:"french"},
    {value:"de", label:"deustch"},
];

export const currency = [
    {value:"dollar", label:'USD'},
    {value:"sum", label:'UZS'},
    {value:"ruble", label:'RUBL'},
]


export const countries = JSON.parse(localStorage.getItem('countries'))?.map((item,index)=>{return {value:index, label:item.country, ...item}}) || []