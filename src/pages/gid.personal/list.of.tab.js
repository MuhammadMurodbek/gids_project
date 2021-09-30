import First from "./first"
import Second from "./second"
import Third from "./third"
import Fourth from "./fourth"

export const tabs = [
    {
        label:<p className="border-div first">Profilni ko‘rish</p>,
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