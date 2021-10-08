import React from 'react'
import {FooterWrapper} from "./index.style"
import {FlexContainer} from "../../../styles/flex.container"
import {useLocation, Link} from "react-router-dom"
import tg from '../../../assets/img/footer/tg.svg'
import f from '../../../assets/img/footer/f.svg'
import i from '../../../assets/img/footer/i.svg'
const Index = () => {
    const location = useLocation()
    const mediaFlexContainer = {
        m_width:"800px",
        m_padding:"10px 0",
        m_textAlign:"center",
    }
    return (
        <>
            <FooterWrapper padding={(location.pathname === "/auth" || location.pathname==="/auth/verify" || location.pathname==="/reset") ? '0px':"10px 0 0"}>
                <FlexContainer
                    width="100%" 
                    alignItems="flex-start" 
                    justifyContent="space-around" 
                    className="first-container"
                    flexWrap="wrap"
                    {...mediaFlexContainer}
                    style={(location.pathname === "/auth" || location.pathname==="/auth/verify" || location.pathname==="/reset") ? {display:"none"}:null}
                >
                    <div className="flex-items">
                        <span>BIZNING SERVIS</span>
                        <ul>
                            <li><Link to="/gids"> Gid yoki tarjimonlik tanlash</Link></li>
                            <li><Link to="/forgits"> Gid yoki tarjimonlar uchun</Link></li>
                            <li><Link to="/about"> Platforma haqida</Link></li>
                            <li><Link to="/blog"> Blog</Link></li>
                        </ul>
                    </div>
                    <div className="flex-items">
                        <span>KONTAKTLARIMIZ</span>
                        <ul>
                            <li><Link to="/l">salom@git.uz</Link></li>
                            <li><Link to="/l">+998 91 555 44 33</Link> </li>
                            <li><Link to="/connect">Savol jo'natish</Link> </li>
                        </ul>
                    </div>
                    <div className="flex-items">
                        <span>HUQUQIY MA'LUMOTLAR</span>
                        <ul>
                            <li><Link to="/p"> Foydalanish shartlari</Link> </li>
                            <li><Link to="/p"> Maxfiylik siyosati va cookie siyosati</Link> </li>
                        </ul>
                    </div>
                </FlexContainer>
                <FlexContainer 
                    width="300px" 
                    alignItems="center" 
                    justifyContent="space-around" 
                    className="second-container"
                    style={(location.pathname === "/auth" || location.pathname==="/auth/verify" || location.pathname==="/reset") ? {display:"none"}:null} 
                >
                    <span><Link to="/sd"><img src={tg} alt="tg" /></Link></span>
                    <span><Link to="/sd"><img src={f}  alt="f" /></Link></span>
                    <span><Link to="/sd"><img src={i}  alt="i" /></Link></span>
                </FlexContainer>
                <div className="footer-bottom-comp">
                    <span>Copyright 2021 Gits.uz - All rights reserved.</span>
                </div>
            </FooterWrapper>   
        </>
    )
}

export default Index
