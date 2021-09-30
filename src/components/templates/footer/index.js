import React from 'react'
import {FooterWrapper} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import {useLocation} from "react-router-dom"
import tg from '../../../assets/img/footer/tg.svg'
import f from '../../../assets/img/footer/f.svg'
import i from '../../../assets/img/footer/i.svg'
const Index = () => {
    const location = useLocation()
    return (
        <>
            <FooterWrapper padding={(location.pathname === "/auth" || location.pathname==="/auth/verify") ? '0px':"10px 0 0"}>
                <FlexContainer
                    width="100%" 
                    alignItems="flex-start" 
                    justifyContent="space-around" 
                    className="first-container"
                    style={(location.pathname === "/auth" || location.pathname==="/auth/verify") ? {display:"none"}:null}
                >
                    <div className="flex-items">
                        <span>BIZNING SERVIS</span>
                        <ul>
                            <li><a href="/gids"> Gid yoki tarjimonlik tanlash</a></li>
                            <li><a href="/forgits"> Gid yoki tarjimonlar uchun</a></li>
                            <li><a href="/about"> Platforma haqida</a></li>
                            <li><a href="/blog"> Blog</a></li>
                        </ul>
                    </div>
                    <div className="flex-items">
                        <span>KONTAKTLARIMIZ</span>
                        <ul>
                            <li><a href="/l">salom@git.uz</a></li>
                            <li><a href="/l">+998 91 555 44 33</a> </li>
                            <li><a href="/connect">Savol jo'natish</a> </li>
                        </ul>
                    </div>
                    <div className="flex-items">
                        <span>HUQUQIY MA'LUMOTLAR</span>
                        <ul>
                            <li><a href="/p"> Foydalanish shartlari</a> </li>
                            <li><a href="/p"> Maxfiylik siyosati va cookie siyosati</a> </li>
                        </ul>
                    </div>
                </FlexContainer>
                <FlexContainer 
                    width="300px" 
                    alignItems="center" 
                    justifyContent="space-around" 
                    className="second-container"
                    style={(location.pathname === "/auth" || location.pathname==="/auth/verify") ? {display:"none"}:null} 
                >
                    <span><a href="/sd"><img src={tg} alt="tg" /></a></span>
                    <span><a href="/sd"><img src={f}  alt="f" /></a></span>
                    <span><a href="/sd"><img src={i}  alt="i" /></a></span>
                </FlexContainer>
                <div className="footer-bottom-comp">
                    <span>Copyright 2021 Gits.uz - All rights reserved.</span>
                </div>
            </FooterWrapper>   
        </>
    )
}

export default Index
