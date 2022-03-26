import React, { useState } from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import { Container } from "../../../styles/container/index.style"
import { WrapperContainer } from "./style"
import Info from "../../molecules/info.f2"
import RoundImageContainer from "../../molecules/round.img.f2"
import InfoBtn from "../../molecules/info.btn.f2"
import RoundImage from "../../../assets/img/choosegid/round.svg"
import { Grid } from '@material-ui/core'
import { TextTitle } from '../../../styles/textTitle/index.style'
import TruncateText from "../../molecules/text.truncate"
import { useTranslation } from 'react-i18next'
import {getLabelCity} from "../../../custom/function"
const media_container = {
    m_width: "600px",
    m_padding: "10px 0",
}

const Index = ({data}) => {
    const lang = localStorage.getItem('i18nextLng')
    const { t } = useTranslation()
    const languageCheck = (item, lang) => {
        if(lang==='en') return item?.from_language__name_en || item?.language__name_en 
        if(lang==='ru') return item?.from_language__name_ru  || item?.language__name_ru 
        if(lang==='uz') return item?.from_language__name_uz  || item?.language__name_uz
    }
    // console.log(data)
    return (
        // <Badge.Ribbon text="TOP" color="red">
            <WrapperContainer>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <Container {...media_container} margin="20px 0 0 0">
                            <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                                <RoundImageContainer src={data?.image || RoundImage} width="100px" height="auto" data={data}/>
                                <Info data={data} commentCount={data?.rating}/>
                            </FlexContainer>
                        </Container> 
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Container margin="30px 0 0 0">
                            <TextTitle align="left" font="20px"> {(data?.first_name +" " + data?.last_name) || "Ma'lumot kiritilmagan"} </TextTitle>
                            <div className="gid-info-personal">{data?.age ? (data?.age + " " + "yosh") : "0 yosh" }  | <span style={{textTransform: "capitalize"}}>{data?.role === "translator" ? "Og'zaki tarjimon" : data?.role === "gid" ? "Gid" : data?.role === "writer" ? "Yozma tarjima" : " " }
                            </span> </div>

                            <div className="gid-info-personal-text top"> 
                                <div className="text">
                                    {t("Gid_Tanlash.xizmatlar")} : { data?.excursions?.length>0? data?.excursions?.map((prev)=>" "+prev?.city+",") : "Ma'lumot kiritilmagan"}
                                </div>
                            </div>
                            
                            <div className="gid-info-personal-text"><div className="text">
                                {t("Gid_Tanlash.tillar")} : 
                                </div>
                                    {
                                        data?.languages.length > 0 ?
                                        data?.languages?.map(prev=>" "+languageCheck(prev, lang)+",") : "Ma'lumot kiritilmagan"
                                    }                            
                                </div>
                            <div className="gid-info-personal-text">
                                <div className="text">  {t("Gid_Tanlash.OzimHaqimda")} :</div>
                                <TruncateText
                                    width="auto"
                                    margin="-20px 0 0 0px"
                                    line={6}
                                    text={<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data?.bio || "Ma'lumot kiritilmagan"}</p>}
                                />
                            </div>
                        </Container>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <InfoBtn data={data}/>
                    </Grid>
                </Grid>
            </WrapperContainer>
        // </Badge.Ribbon>
    )
}

export default Index
