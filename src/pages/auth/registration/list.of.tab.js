import First from "./auth.component"
import Second from "./reg.component"

export const tabs = [
    {
        label:<p className="border-div first">Kirish</p>,
        component:<First/>,
    },
    {
        label:<p className="border-div">Registratsiya</p>,
        component:<Second/>,
    },
   
];