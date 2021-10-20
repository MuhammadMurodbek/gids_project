import Bio from "./bio"
import Contact from "./contact"
import Experience from "./experince"
import Gallery from "./gallery"
import Lang from "./lang"
import Price from "./price"
import Service from "./service"

export const tabs = [
    {
        label:<div className="border-div first">Men <br className="br"/> haqimda</div>,
        component:<Bio/>,
    },
    {
        label:<div className="border-div">Kontaktlar</div>,
        component:<Contact/>,
    },
    {
        label:<div className="border-div">Ish tajribasi</div>,
        component:<Experience/>,
    },
    {
        label:<div className="border-div">Tillar bilishi</div>,
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