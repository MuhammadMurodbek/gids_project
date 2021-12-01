import React,{useEffect} from 'react'
import {Wrapper} from "./index.style"
import Navbar from '../../components/templates/navbar';
import Footer from "../../components/templates/footer"
import {useLocation} from "react-router-dom"
import { useJwt } from "react-jwt";
const Index = ({children}) => {
    const location = useLocation()
    const checkFooter = location.pathname === "/auth" || location.pathname === "/auth/verify"
    const token = JSON.parse(localStorage.getItem("user_token")) 
    const {isExpired } = useJwt(token ? token.access : undefined)
    useEffect(() => {
        if(!(location.pathname.includes("auth") || location.pathname === '/')){
            if(isExpired){
                localStorage.clear()
                window.location.href="/auth"
            }
        }
        if(isExpired){
            localStorage.setItem("expired",false)
        }else{
            localStorage.setItem("expired",true)
        }
    },[location, isExpired, token])
    return (
        <Wrapper>
            {
                location.pathname.includes("auth") ? null : <Navbar/>
            }
            
                <div className="main-part">{children}</div>
            {checkFooter ? null:<Footer/>}
        </Wrapper>
    )
}

export default Index
