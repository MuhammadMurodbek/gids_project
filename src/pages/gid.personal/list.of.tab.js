import First from "./first"
import Second from "./second"
import Third from "./third"
import Fourth from "./fourth"
import { useTranslation } from "react-i18next"

export const Tabs = () => {
    const {t} = useTranslation()
    return[
        {
            label:<p className="border-div first">{t('User_Arizalarim.profilni_korish')}</p>,
            component:<First/>,
        },
        {
            label:<p className="border-div">{t('User_Arizalarim.arizalarim')}</p>,
            component:<Second/>,
        },
        {
            label:<p className="border-div">{t('User_Arizalarim.MalumotlarniTaxrirlash')}</p>,
            component:<Third/>,
        },
        {
            label:<p className="border-div">{t('User_Arizalarim.profilSozlamalari')}</p>,
            component:<Fourth/>,
        },
    ];
}