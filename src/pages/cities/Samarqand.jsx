import React from 'react'
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
// import bukhara from '../../assets/img/main/samarqand.webp'
import SamarqandImg from '../../assets/img/main/Samarqand.jpeg'
import { useTranslation } from 'react-i18next'
import Blog from "../../pages/blog"
export default function Samarqand() {
    const { t } = useTranslation()

  return (
      <>
    <Wrapper>
            <div className="imgBukhara">
                <ImgContainer height="50vh" width="100%" src={SamarqandImg} />
                <p className="bukhara">{t("main.Samarqand")}</p>
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">{t("main.Samarqand")}</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>{t("main.SamarqandBlock")}</b> — {t("main.SamarqandText1")}

                        <br /><br />
                        {t("main.SamarqandText2")}
                        <br/><br/>
                        {t("main.SamarqandText3")}
                        <br/><br/>
                        {t("main.SamarqandText4")}

                    </div>
                    
                </AboutB>
                
                
                    
            </PerentAB>
           
 
        </Wrapper>
            <Blog cities={true}/>
        </>
  )
}
