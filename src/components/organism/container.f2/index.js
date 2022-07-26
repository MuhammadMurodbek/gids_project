import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import { Container } from "../../../styles/container/index.style"
import { WrapperContainer } from "./style"
import Info from "../../molecules/info.f2"
import RoundImageContainer from "../../molecules/round.img.f2"
import InfoBtn from "../../molecules/info.btn.f2"
import RoundImage from "../../../assets/img/gid-personal/no_user.png"
import { Grid } from '@material-ui/core'
import { TextTitle } from '../../../styles/textTitle/index.style'
// import TruncateText from "../../molecules/text.truncate"
import { useTranslation } from 'react-i18next'
// import { getLabelCity } from "../../../custom/function"
const media_container = {
    m_width: "600px",
    m_padding: "10px 0",
}

const Index = ({ data }) => {
    const lang = localStorage.getItem('i18nextLng')
    // const getRole = JSON.parse(localStorage.getItem("user_token"))
    const { t } = useTranslation()
    const languageCheck = (item, lang) => {
        if (data?.role === 'writer') {
            if (lang === 'en') return item?.from_language__name_en + " - " + item?.to_language__name_en
            if (lang === 'ru') return item?.from_language__name_ru + " - " + item?.to_language__name_ru
            if (lang === 'uz') return item?.from_language__name_uz + " - " + item?.to_language__name_uz
        } else {
            if (lang === 'en') return item?.language__name_en
            if (lang === 'ru') return item?.language__name_ru
            if (lang === 'uz') return item?.language__name_uz
        }

    } 
  
    // console.log(data)
    return (
        // <Badge.Ribbon text="TOP" color="red">
        <WrapperContainer>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Container {...media_container} margin="20px 0 0 0">
                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                            <RoundImageContainer 
                                src={data?.image || RoundImage} 
                                width="100px" height="auto" 
                                role={data?.role} 
                                data={data} 
                            />
                            <Info data={data} commentCount={data?.rating} />
                        </FlexContainer>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Container margin="30px 0 0 0">
                        <TextTitle align="left" font="20px"> {(data?.first_name + " " + data?.last_name) || t("GidPk.malumotKiritilmagan")} </TextTitle>
                        <div className="gid-info-personal">{data?.age ? (data?.age + " " + "yosh") : "0 yosh"}  | <span style={{ textTransform: "none" }}>{data?.role === "translator" ? "Og'zaki tarjimon" : data?.role === "gid" ? "Gid" : data?.role === "writer" ? "Yozma tarjimon" : " "}
                        </span> </div>
                        <div className="gid-info-personal-text"><div className="text">
                            {t("Gid_Tanlash.tillar")} :
                                </div>
                            {
                                data?.languages.length > 0 ?
                                    data?.languages?.map((prev, index) => " " + languageCheck(prev, lang) + `${index !== data?.languages?.length - 1 ? ',' : ''}`) : t("GidPk.malumotKiritilmagan")
                            }
                        </div>
                        <div className="gid-info-personal-text">
                            <div className="bio_text"><div className="bold_text">{t("Gid_Tanlash.OzimHaqimda")}:</div> {data?.bio ? data?.bio?.slice(0,300)+"..." : t("GidPk.malumotKiritilmagan")}</div>
                            {/* <div className="text" style={{display:'inline-block'}}>  {t("Gid_Tanlash.OzimHaqimda")} :</div> */}
                            {/* <TruncateText
                                width="auto"
                                // margin="-20px 0 0 0px"
                                line={6}
                                text={<div style={{textAlign:'justify'}}> <span className="text" style={{ display: 'inline-block', fontWeight:'bold !important' }}>  {t("Gid_Tanlash.OzimHaqimda")} :</span>   {data?.bio || "Ma'lumot kiritilmagan"}</div>}
                            /> */}
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <InfoBtn data={data} />
                </Grid>
            </Grid>
        </WrapperContainer>
        // </Badge.Ribbon>
    )
}

export default Index
