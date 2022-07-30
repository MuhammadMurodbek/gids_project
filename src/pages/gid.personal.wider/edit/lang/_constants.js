import { useTranslation } from "react-i18next"

export const Selection = () =>{
    const {t} = useTranslation()
    return [
    {value:'onatili', label: t('TillarniBilish.onaTili')},
    {value:'native', label: t('TillarniBilish.alo')},
    {value:'intermediate', label: t('TillarniBilish.yaxshi')},
];
}
export const SELECTION  = () =>{
    const {t} = useTranslation()
    return {
    native: t('TillarniBilish.alo'),
    intermediate: t('TillarniBilish.yaxshi')
    }
}