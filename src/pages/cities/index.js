import React from "react"
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
import bukhara from '../../assets/img/citiyes/bukhara2.png'
import { useTranslation } from 'react-i18next'
import Blog from "../../pages/blog"
import Buhoro from '../../assets/img/main/Buhoro.jpg'

export default function Index() {
    const { t } = useTranslation()
    return (
        <>
        <Wrapper>
            <div className="imgBukhara">
                <ImgContainer className="imgTop"   height="50vh" width="100%" src={Buhoro} />
                <p className="bukhara">{t("main.Buxoro")}</p>
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">{t("main.Buxoro")}</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>{t("main.Buxara")}</b> — 
                        {t("main.BuxaraText1")}
                        <br/><br />
                        {t("main.BuxaraText2")}
                        <br/><br />
                        {t("main.BuxaraText3")}
                        <br/><br />
                        {t("main.BuxaraText4")}
                    </div>
                    
                </AboutB>
                
                
                    
            </PerentAB>
           
 
        </Wrapper>
        <Blog cities={true}/>
        </>
    )
}
