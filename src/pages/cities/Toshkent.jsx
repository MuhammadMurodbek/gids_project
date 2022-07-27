import React from 'react'
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
import Toshkent from '../../assets/img/main/Toshkent.jpeg'
import { useTranslation } from 'react-i18next'
import Blog from '../blog'
export default function Samarqand() {
    const { t } = useTranslation()
  return (
      <>
    <Wrapper>
            <div className="imgBukhara">
                <ImgContainer height="50vh" width="100%" src={Toshkent} />
                <p className="bukhara">{t("main.Toshkent")}</p>
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">{t("main.Toshkent")}</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>{t("main.ToshkentBlock")}</b> — {t("main.ToshkentText1")}

                        <br /><br />
                        {t("main.ToshkentText2")}
                        <br /><br />
                        {t("main.ToshkentText3")}
                        <br /><br />
                        {t("main.ToshkentText4")}
                    </div>
                    
                </AboutB>
                
                
                    
            </PerentAB>

 
        </Wrapper>
            <Blog cities={true}/>
        </>
  )
}
