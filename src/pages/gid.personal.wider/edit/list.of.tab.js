import Bio from "./bio"
import Contact from "./contact"
import Experience from "./experince"
import Gallery from "./gallery"
import Lang from "./lang"
import Price from "./price"
import Service from "./service"
import './main2.css'
import { useTranslation } from "react-i18next"

export const Tabs = () => {
    const {t} = useTranslation()
    return [
        {
            label:<div className="border-div first" id="tahrirlash">{t('MTmenHaqimda.menHaqimda')}</div>,
            component:<Bio/>,
        },
        {
            label:<div className="border-div" id="tahrirlash">{t('MTmenHaqimda.kantaktlar')}</div>,
            component:<Contact/>,
        },
        {
            label:<div className="border-div" id="tahrirlash">{t('MTmenHaqimda.IshTajriba')}</div>,
            component:<Experience/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.tillarniBilish')}</div>,
            component:<Lang/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.hizmatlar')}</div>,
            component:<Service/>,
        },
        
        {
            label:<div className="border-div" id="tahrirlash">{t('MTmenHaqimda.narxlar')}</div>,
            component:<Price/>,
        },
        {
            label:<div className="border-div" id="tahrirlash">{t('MTmenHaqimda.galereya')}</div>,
            component:<Gallery/>,
        },
    ];
}

export const TabsWriter = () => {
    const {t} = useTranslation()
    return [
        {
            label:<div className="border-div first" id="tahrirlash">{t('MTmenHaqimda.menHaqimda')}</div>,
            component:<Bio/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.kantaktlar')}</div>,
            component:<Contact/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.IshTajriba')}</div>,
            component:<Experience/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.tillarniBilish')}</div>,
            component:<Lang/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.hizmatlar')}</div>,
            component:<Service/>,
        },
        {
            label:<div className="border-div" id="tahrirlash"> {t('MTmenHaqimda.narxlar')}</div>,
            component:<Price/>,
        },
    ];
}
    
