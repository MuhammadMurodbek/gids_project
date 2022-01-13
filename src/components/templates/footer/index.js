import React from 'react'
import { FooterWrapper } from "./index.style"
import { FlexContainer } from "../../../styles/flex.container"
import { useLocation, Link } from "react-router-dom"
import tg from '../../../assets/img/footer/tg.svg'
import f from '../../../assets/img/footer/f.svg'
import i from '../../../assets/img/footer/i.svg'
import { useTranslation } from 'react-i18next'
 

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
        // console.log("loca "+check)
    }, [])
    const mediaFlexContainer = {
        m_width: "800px",
        m_padding: "10px 0",
        m_textAlign: "center",
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
                                <li><Link to="/gids">{t("footer.tanlash")}</Link></li>
                                <li><Link to="/forgits">{t("footer.GTuchun")}</Link></li>
                                <li><Link to="/about"> {t("footer.platformaH")} </Link></li>
                                <li><Link to="/blog"> {t("footer.Blog")} </Link></li>
                            </ul>
                        </div>
                        <div className="flex-items">
                            <span>{t("footer.contacts")}</span>
                            <ul>
                                <li><Link to="/l">salom@git.uz</Link></li>
                                <li><Link to="/l">+998 91 555 44 33</Link> </li>
                                <li><Link to="/connect">{t("footer.sorov")}</Link> </li>
                            </ul>
                        </div>
                        <div className="flex-items">
                            <span>{t("footer.huquqiy")}</span>
                            <ul>
                                <li><Link to="/p"> {t("footer.foydalanish")} </Link> </li>
                                <li><Link to="/p">  {t("footer.maxfiylik")} </Link> </li>
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
                        <span><Link to="/sd"><img src={tg} alt="tg" /></Link></span>
                        <span><Link to="/sd"><img src={f} alt="f" /></Link></span>
                        <span><Link to="/sd"><img src={i} alt="i" /></Link></span>
                    </FlexContainer>
                </div>
                <div className="footer-bottom-comp" style={check ? { display: 'none' } : null}>
                    <span>Copyright 2021 Gits.uz - All rights reserved.</span>
                </div>

            </FooterWrapper>
        </>
    )
}

export default Index
