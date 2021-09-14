import React from 'react'
import {Wrapper} from "./index.style"
import Navbar from '../../components/templates/navbar';
import Footer from "../../components/templates/footer"
import {useLocation} from "react-router-dom"

const Index = ({children}) => {
    const location = useLocation()
    const checkFooter = location.pathname === "/auth" || location.pathname === "/auth/verify"
    return (
        <Wrapper>
            <Navbar/>
                <div className="main-part">{children}</div>
                {checkFooter ? null:<Footer/>}
        </Wrapper>
    )
}

export default Index
