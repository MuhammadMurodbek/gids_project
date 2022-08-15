import React from 'react'
import { FooterWrapper } from "./index.style"
import { FlexContainer } from "../../../styles/flex.container"
import { useLocation, Link } from "react-router-dom"
import tg from '../../../assets/img/footer/tg.svg'
import f from '../../../assets/img/footer/f.svg'
import i from '../../../assets/img/footer/i.svg'
import { useTranslation } from 'react-i18next'
import logoss from '../../../assets/img/about/log.png'
import { width } from '@mui/system'
import './foter.css'
const Index = () => {
    const location = useLocation()
    const { pathname } = location
    const [check, setCheck] = React.useState(false)

    const { t } = useTranslation()

    React.useEffect(() => {
        if (pathname.includes('auth')) {
            setCheck(true)
        } else {
            setCheck(false)
        }

    }, [])
    const mediaFlexContainer = {
        m_width: "800px",
        m_padding: "10px 0",
        m_textAlign: "center",
    }
    function refreshBtn() {
        window.scrollTo(0, 0)
    }
    return (
        <>

            <FooterWrapper padding={check ? '0px' : "10px 0 0"}>
                <div className='width1'>
                    <FlexContainer
                        width="100%"
                        alignItems="flex-start"
                        justifyContent="space-around"
                        className="first-container"
                        flexWrap="wrap"
                        {...mediaFlexContainer}
                        style={check ? { display: "none" } : null}
                    >
                        <div className="flex-items">
                            <span>{t("footer.biznigServislar")}</span>
                            <ul>
                                <li><Link onClick={refreshBtn} to="/about"> {t("footer.platformaH")} </Link></li>
                                <li><Link onClick={refreshBtn} to="/gids">{t("footer.tanlash")}</Link></li>
                                <li><Link onClick={refreshBtn} to="/forgits">{t("footer.GTuchun")}</Link></li>
                                <li><Link onClick={refreshBtn} to="/blog"> {t("footer.Blog")} </Link></li>
                            </ul>
                        </div>
                        <div className="flex-items">
                            <span>{t("footer.contacts")}</span>
                            <ul>
                                <li><Link onClick={refreshBtn} to="/">info@gits.uz</Link></li>
                                <li><Link onClick={refreshBtn} to="/">+998 93 596-92-20</Link> </li>
                                <li><Link onClick={refreshBtn} to="/connect">{t("footer.sorov")}</Link> </li>
                            </ul>
                        </div>
                        <div className="flex-items">
                            <span>{t("footer.huquqiy")}</span>
                            <ul>
                                <li><Link onClick={refreshBtn} to="/"> {t("footer.foydalanish")} </Link> </li>
                                <li><Link onClick={refreshBtn} to="/">  {t("footer.maxfiylik")} </Link> </li>
                            </ul>
                        </div>
                    </FlexContainer>
                    <FlexContainer
                        width="300px"
                        alignItems="center"
                        justifyContent="space-around"
                        className="second-container"
                        style={check ? { display: "none" } : null}
                    >
                        <span><a href='https://t.me/gits_uz' target="_blank"><img src={tg} alt="tg" /></a></span>
                        <span><a href='https://www.facebook.com/gits.uz' target="_blank"><img src={f} alt="f" /></a></span>
                        <span><a href='https://www.instagram.com/gits_uz/' target="_blank"><img src={i} alt="i" /></a></span>
                    </FlexContainer>
                </div>
                <div className="footer-bottom-comp" style={check ? { display: 'none' } : null}>
                    
                        <pre className='preeee'>
                            All rights reserved. Created by the <a href='https://www.instagram.com/afshon_official/' target="_blank"> <img src={logoss} width="25px"></img>
                            QWERTY AL-FAJR  Compniy </a> | Tashkent,Uzbekistan.
                        </pre>
                  
                </div>

            </FooterWrapper>
        </>
    )
}

export default Index
