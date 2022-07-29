import React from 'react'
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
import Xiva from '../../assets/img/main/Xiva.jpg'
import { useTranslation } from 'react-i18next'
import Blog from '../blog'
export default function Samarqand() {
    const { t } = useTranslation()
  return (
      <>
    <Wrapper>
            <div className="imgBukhara">
                <ImgContainer height="50vh" width="100%" src={Xiva} />
                <p className="bukhara">{t("main.Xiva")}</p>
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">{t("main.Xiva")}</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>{t("main.XivaBLock")}</b> — {t("main.XivaText1")}

                        <br /><br />
                        {t("main.XivaText2")}
                        <br /><br />
                        {t("main.XivaText3")}
                        <br /><br />
                        {t("main.XivaText4")}
                    </div>
                    
                </AboutB>
                
                
                    
            </PerentAB>
           
 
        </Wrapper>
            <Blog cities={false}/>
        </>
  )
}
