import { useTranslation } from 'react-i18next'

export const degrees_gid = [
    {value:"highest_category", label: "Oliy toifali"}, 
    {value:"first_category", label: "Birinchi toifali"}, 
    {value:"second_category", label: "Ikkinchi toifali"}, 
    {value:"no_category", label: "Toifasiz"}, 
]
export const degrees = [
    {value:"higher", label: "Oliy"}, 
    {value:"secondary_special", label: "O'rta maxsus"}, 
]
export const Options_year = () =>{
    const { t } = useTranslation()

    return[
    { value: "0-1", label: t("Ustniy_MalumotvaIshtajriba.birYil") },
    { value: "1-3", label: t("Ustniy_MalumotvaIshtajriba.birUch") },
    { value: "3-5", label: t("Ustniy_MalumotvaIshtajriba.uchBesh") },
    { value: "5-10", label: t("Ustniy_MalumotvaIshtajriba.beshOn") },
    { value: "10+", label: t("Ustniy_MalumotvaIshtajriba.onPlus") },
]
}


export const options_yes = [
    { value: true, label: "Ha" },
    { value: false, label: "Yo'q" }
]

export const DEGREES = {
    higher: "Oliy",
    secondary_special: "O'rta maxsus",
}
export const DEGREES_GIT = {
    highest_category: "Eng yuqori toifa",
    first_category: "Birinchi toifa",
    second_category: "Ikkinchi toifa",
    no_category: "Toifasiz",
}
// export const OPT_YEAR = {
//     [1-3]:""
// }