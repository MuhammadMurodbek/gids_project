import Bio from "./bio"
import Contact from "./contact"
import Experience from "./experince"
import Gallery from "./gallery"
import Lang from "./lang"
import Price from "./price"
import Service from "./service"
import './main2.css'

export const tabs = [
    {
        label:<div className="border-div first">Men <br className="br"/> haqimda</div>,
        component:<Bio/>,
    },
    {
        label:<div className="border-div">Aloqa</div>,
        component:<Contact/>,
    },
    {
        label:<div className="border-div">Ish tajribasi</div>,
        component:<Experience/>,
    },
    {
        label:<div className="border-div"> Darajasi</div>,
        component:<Lang/>,
    },
    {
        label:<div className="border-div">Xizmatlar</div>,
        component:<Service/>,
    },
    
    {
        label:<div className="border-div">Narxlar</div>,
        component:<Price/>,
    },
    {
        label:<div className="border-div">Galereya</div>,
        component:<Gallery/>,
    },
];
export const tabsWriter = [
    {
        label:<div className="border-div first">Men <br className="br"/> haqimda</div>,
        component:<Bio/>,
    },
    {
        label:<div className="border-div">Aloqa</div>,
        component:<Contact/>,
    },
    {
        label:<div className="border-div">Ish tajribasi</div>,
        component:<Experience/>,
    },
    {
        label:<div className="border-div"> Darajasi</div>,
        component:<Lang/>,
    },
    {
        label:<div className="border-div">Xizmatlar</div>,
        component:<Service/>,
    },
    {
        label:<div className="border-div">Narxlar</div>,
        component:<Price/>,
    },
];