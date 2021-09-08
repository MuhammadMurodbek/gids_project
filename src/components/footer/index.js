import React from 'react'
import {FooterWrapper} from "./index.style"
import {FlexContainer} from "../../styles/flex.container"
const Index = () => {
    return (
        <>
            <FooterWrapper>
                <FlexContainer width="100%" alignItems="flex-start" justifyContent="space-around" className="first-container">
                    <div className="flex-items">
                        <span>BIZNING SERVIS</span>
                        <ul>
                            <li><a href="/f"> Gid yoki tarjimonlik tanlash</a></li>
                            <li><a href="/f"> Gid yoki tarjimonlar uchun</a></li>
                            <li><a href="/f"> Platforma haqida</a></li>
                            <li><a href="/f"> Blog</a></li>
                        </ul>
                    </div>
                    <div className="flex-items">
                        <span>KONTAKTLARIMIZ</span>
                        <ul>
                            <li><a href="/l">salom@git.uz</a></li>
                            <li><a href="/l">+998 91 555 44 33</a> </li>
                            <li><a href="/l">Savol jo'natish</a> </li>
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
                <FlexContainer width="300px" alignItems="center" justifyContent="space-around" className="second-container" >
                    <span><a href="/sd"><i className="fab fa-telegram"></i></a></span>
                    <span><a href="/sd"><i className="fab fa-facebook"></i></a></span>
                    <span><a href="/sd"><i className="fab fa-instagram"></i></a></span>
                </FlexContainer>
                <div className="footer-bottom-comp">
                    <span>Copyright 2021 Gits.uz - All rights reserved.</span>
                </div>
            </FooterWrapper>   
        </>
    )
}

export default Index