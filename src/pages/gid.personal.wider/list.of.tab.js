import First from "./first"
import Edit from "./edit"
import Calendar from "./calendar"
import Fourth from "./blog"
import Settings from "./settings"
import Reklama from "./reklama"

export const tabs = [
    {
        label:<div className="border-div first">Profilni ko'rish</div>,
        component:<First/>,
    },
    {
        label:<div className="border-div">Tahrirlash</div>,
        component:<Edit/>,
    },
    {
        label:<div className="border-div">Kalendar</div>,
        component:<Calendar/>,
    },
    {
        label:<div className="border-div">Blog</div>,
        component:<Fourth/>,
    },
    {
        label:<div className="border-div">Reklama</div>,
        component:<Reklama/>,
    },
    {
        label:<div className="border-div">Sozlamalar</div>,
        component:<Settings/>,
    },
];