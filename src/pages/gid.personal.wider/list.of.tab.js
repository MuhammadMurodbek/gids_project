import First from "./first"
import Edit from "./edit"
import Calendar from "./calendar"
import Fourth from "./blog"
import Settings from "./settings"
import Reklama from "./reklama"
import './main.css'
import { useTranslation } from "react-i18next"

export const Tabs = () => {
    const {t} = useTranslation()
    return [
        {
            label: <div className="border-div first">{t('MTmenHaqimda.Profilni_Korish')}</div>,
            component: <First />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.tahrirlash")}</div>,
            component: <Edit />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.kalendar")}</div>,
            component: <Calendar />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.blog")}</div>,
            component: <Fourth />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.reklama")}</div>,
            component: <Reklama />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.sozlama")}</div>,
            component: <Settings />,
        },
    ];
}

export const TabsWriter2 = () => {

    const {t} = useTranslation()

    return [
        {
            label: <div className="border-div first">{t('tab.seeProfile')}</div>,
            component: <First />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.tahrirlash")}</div>,
            component: <Edit />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.kalendar")}</div>,
            component: <Calendar />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.reklama")}</div>,
            component: <Reklama />,
        },
        {
            label: <div className="border-div">{t("MTmenHaqimda.sozlama")}</div>,
            component: <Settings />,
        },
    ];
}