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
            label:<div className="border-div first">Men <br className="br"/> haqimda</div>,
            component:<Bio/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.kantaktlar')}</div>,
            component:<Contact/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.IshTajriba')}</div>,
            component:<Experience/>,
        },
        {
            label:<div className="border-div"> {t('MTmenHaqimda.tillarniBilish')}</div>,
            component:<Lang/>,
        },
        {
            label:<div className="border-div"> {t('MTmenHaqimda.hizmatlar')}</div>,
            component:<Service/>,
        },
        
        {
            label:<div className="border-div">{t('MTmenHaqimda.narxlar')}</div>,
            component:<Price/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.galereya')}</div>,
            component:<Gallery/>,
        },
    ];
}

export const TabsWriter = () => {
    const {t} = useTranslation()
    return [
        {
            label:<div className="border-div first">Men  haqimda</div>,
            component:<Bio/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.kantaktlar')}</div>,
            component:<Contact/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.tillarniBilish')}</div>,
            component:<Experience/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.hizmatlar')}</div>,
            component:<Lang/>,
        },
        {
            label:<div className="border-div">{t('MTmenHaqimda.narxlar')}</div>,
            component:<Service/>,
        },
        {
            label:<div className="border-div">Narxlar</div>,
            component:<Price/>,
        },
    ];
}
    
