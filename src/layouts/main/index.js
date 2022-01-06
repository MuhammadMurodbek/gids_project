import React,{useEffect} from 'react'
import {Wrapper} from "./index.style"
import Navbar from '../../components/templates/navbar';
import Footer from "../../components/templates/footer"
import {useLocation} from "react-router-dom"
import {checkGlobals} from "../../hooks/response_get"
import { useJwt } from "react-jwt";
import {postRefreshToken} from "../../hooks/response_get"
import jwt_decode from "jwt-decode";
import moment from "moment"




const Index = ({children}) => {
    const location = useLocation() 
    let token1 = JSON.parse(localStorage.getItem("user_token"))
    const {isExpired } = useJwt(token1 ? token1.access : undefined)
    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem("user_token"))
        if(!location.pathname.includes('auth') && location.pathname!=='/'  &&   location.pathname!=='/blog' && location.pathname!=='/forgits' && !location.pathname.includes('request') && location.pathname!=='/about'  &&   location.pathname!=='/connect' && location.pathname!=='/gids'  ){
            if(!isExpired){
                let decoded = jwt_decode(token?.access);
                let date = new Date(decoded?.exp * 1000);
                let pastDate = new Date(date.getTime() - 30*60000);
                if(moment(pastDate).isBefore(moment(new Date()))){
                    postRefreshToken(token) 
                }else{
                    const intervalId = setInterval(() => {
                        postRefreshToken(token) 
                    }, 1000 * 60 * 30) // in milliseconds
                    return () => clearInterval(intervalId)
                }
            }
            else{
                window.location.href = '/auth'
            }
        }
    },[location])
    const checkFooter = location.pathname === "/auth" || location.pathname === "/auth/verify"
    // const token = JSON.parse(localStorage.getItem("user_token")) 
    // const {isExpired } = useJwt(token ? token.access : undefined) 
    // useEffect(() => {
    //     if(!(location.pathname.includes("auth") || location.pathname === '/')){
    //         if(isExpired){
    //             localStorage.clear()
    //             window.location.href="/auth"
    //         }
    //     }
    //     if(isExpired){
    //         localStorage.setItem("expired",false)
    //     }else{
    //         localStorage.setItem("expired",true)
    //     }
    // },[location, isExpired, token])
    useEffect(() => {
        const countryGlobal = JSON.parse( localStorage.getItem( "countryGlobal"))
        const language = JSON.parse(localStorage.getItem("lanGlobal"))
        if(!(countryGlobal && language)){ checkGlobals()}
    },[])
    return (
        <Wrapper>
            <Navbar/>
                <div className="main-part">{children}</div>
            {checkFooter ? null:<Footer/>}
        </Wrapper>
    )
}

export default Index
