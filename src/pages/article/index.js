import React, { useState, useEffect } from "react";
import { AboutTravel, Wrapper } from "./index.style";
import { TextTitle } from "../../styles/textTitle/index.style";
import Button from "../../components/atom/button";
import { Grid } from "@material-ui/core";
import CitiLeftPart from "../../components/organism/citiesLeftPart";
import ImgContainer from "../../components/molecules/img.container";
import ad from "../../assets/img/citiyes/ad.png";
import xitoy from "../../assets/img/citiyes/xitoy.png";
import {
  mediaTextField,
  mediaTextFieldSec,
  mediaBtn,
} from "../../custom/global.media.variables";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getResponse } from "../../hooks/response_get";

export default function Index() {
  const { t } = useTranslation();
  // const [getState, setState] = useState({success:'', error:'', loading:false})
  // useEffect(()=>{
  //     getResponse('/')
  // },[])
  const getRole = JSON.parse(localStorage.getItem("user_token"));

  // getRole?.role === "writer"
  // getRole?.role === "translator"

  return (
    <Wrapper>
      <AboutTravel>
        <TextTitle {...mediaTextField} {...mediaTextFieldSec}>
            {getRole?.role === "translator" ?  t("safarHaqda.title2Ogzaki") : t("safarHaqda.title") }
        </TextTitle>
        <p className="aboutT__text">
        {getRole?.role === "translator" ? t("safarHaqda.text2Ogzaki") : t("safarHaqda.text") }
        
        </p>
        <TextTitle width="50%" left="auto" right="auto" bottom="40px">
          <Link to="/write-article">
            <Button>{t("safarHaqida.Maqolayozish")}</Button>
          </Link>
        </TextTitle>
      </AboutTravel>
      <TextTitle {...mediaTextField} {...mediaTextFieldSec}>
        {t("safarHaqida.Maqolalarim")}
      </TextTitle>
      {/* <Grid justifyContent="center" className="grid_container" container spacing={1}>
                <Grid item xs={12} md={8}>

                        <CitiLeftPart
                            title="Xitoyga sayoxat"
                            kalendar="23.01.2021"
                            hteg="Biznes, Xitoy"
                            url={xitoy}
                            lines="10"
                            text="  ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                            btnText={t("safarHaqda.tahrirlash")}
                        />
                        <CitiLeftPart
                            title="Xitoyga sayoxat"
                            kalendar="23.01.2021"
                            hteg="Biznes, Xitoy"
                            url={xitoy}
                            lines="10"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                            btnText={t("safarHaqda.tahrirlash")}
                        />
                        <CitiLeftPart
                            title="Xitoyga sayoxat"
                            kalendar="23.01.2021"
                            hteg="Biznes, Xitoy"
                            url={xitoy}
                            lines="10"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                            btnText={t("safarHaqda.tahrirlash")}
                        />




                    </Grid>

                    <Grid className="msa2" item xs={12} md={4}>
                        <ImgContainer src={ad} width="350px" margin="0 0 15px" />
                        <ImgContainer src={ad} width="350px" margin="0 0 15px" />
                        <ImgContainer src={ad} width="350px" margin="0 0 15px" />
                        <ImgContainer src={ad} width="350px" margin="0 0 15px" />
                    </Grid>
                </Grid>
            </Grid> */}
    </Wrapper>
  );
}
