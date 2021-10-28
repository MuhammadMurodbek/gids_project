import React from 'react'
import {Wrapper} from "./index.style"
import Navbar from '../../components/templates/navbar';
import Footer from "../../components/templates/footer"
import {useLocation} from "react-router-dom"
import { useJwt } from "react-jwt";

const Index = ({children}) => {
    
    const location = useLocation()
    const checkFooter = location.pathname === "/auth" || location.pathname === "/auth/verify"
    const token = JSON.parse(localStorage.getItem("user_token")) 
    const { isExpired } = useJwt(token?.access)
    React.useEffect(() => {
        if(location.pathname !== "/auth"){
            if(!token || isExpired){
                window.location.href="/auth"
                localStorage.clear();
            }
        }
    },[location, isExpired, token])
    return (
        <Wrapper>
            <Navbar/>
                <div className="main-part">{children}</div>
                {checkFooter ? null:<Footer/>}
        </Wrapper>
    )
}

export default Index
