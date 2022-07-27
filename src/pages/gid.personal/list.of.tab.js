import First from "./first"
import Second from "./second"
import Third from "./third"
import Fourth from "./fourth"
import { useTranslation } from "react-i18next"

export const Tabs = () => {
    const {t} = useTranslation()
    return[
        {
            label:<p className="border-div first">{t('mainTab:Profilni_korish')}</p>,
            component:<First/>,
        },
        {
            label:<p className="border-div">Arizalarim</p>,
            component:<Second/>,
        },
        {
            label:<p className="border-div">Ma’lumotlarimni Tahrirlash</p>,
            component:<Third/>,
        },
        {
            label:<p className="border-div">Profilni Sozlamalari</p>,
            component:<Fourth/>,
        },
    ];
}