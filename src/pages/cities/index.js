import React from 'react'
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
import bukhara from '../../assets/img/citiyes/bukhara2.png'
import { TextTitle } from "../../styles/textTitle/index.style"
import { Grid } from '@material-ui/core'
import CitiLeftPart from '../../components/organism/citiesLeftPart'
import ad from '../../assets/img/citiyes/ad.png'
import xitoy from '../../assets/img/citiyes/xitoy.png';
import { mediaTextField, mediaTextFieldSec } from "../../custom/global.media.variables"
import { useTranslation } from 'react-i18next'
import Blog from '../blog'

export default function Index() {

    const { t } = useTranslation()

    return (
        <Wrapper>
            <div className="imgBukhara">
                <ImgContainer width="100%" src={bukhara} />
                {/* <p className="bukhara">Bukhara</p> */}
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">Buxoro</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>Buxoro</b> — O‘zbekiston Respublikasining qadimiy shaharlaridan biri, Buxoro viloyatining maʼmuriy, iqtisodiy va madaniy markazi. Buyuk ipаk yo‘lida yirik tijorat markazlaridan bo‘lgan. Oʻzbekistonning janubiy-gʻarbida, Zarafshon daryosi quyi oqimida joylashgan. Toshkentdan 616 km. Buxoro 2 ta shahar rayoni (Fayzulla Xoʻjayev va Toʻqimachilik)ga boʻlingan. Aholisi 280000 (2019).

                        <br /><br />

                        Buxoro shahri qadim zamonlarda qanday nomlangani — nomaʼlum. Milodiy V asrga oid xitoy manbalarida Buxoro shahri Nyumi tarzida tilga olinib oʻtilgan. Binobarin, shaharda shu nomdagi mulk hukmdorining qarorgohi ham boʻlgan. Tan imperiyasining VII asrga oid solnomalarida Buxoro shahri An (Ango), Ansi, Buxo (Buxe, Fuxo) shakllarida qayd etib oʻtilgan. Keyinchalik shahar har xil nomlana boshladi. Arab qadimiy manbalarda u Bumiskat, Madinat us-sufriya (Mis shahar), Numijkat (soʻgʻdcha numij yoki namich degani mashhur degan maʼnoni anglatgan) tarzida keltirilgan.
                    </div>
                </AboutB>
            </PerentAB>

            
                 <Blog/>
             

        </Wrapper>
    )
}
