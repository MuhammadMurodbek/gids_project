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
import { useTranslation } from 'react-i18next'
const media_container = {
    m_width: "600px",
    m_padding: "10px 0",
}
const Index = ({ data }) => {
    const lang = localStorage.getItem('i18nextLng')
    const { t } = useTranslation()
    const languageCheck = (item, lang) => {
        if (data?.role === 'writer') {
            if (lang === 'en') return item?.from_language__name_en + " - " + item?.to_language__name_en
            if (lang === 'ru') return item?.from_language__name_ru + " - " + item?.to_language__name_ru
            if (lang === 'uz') return item?.from_language__name_uz + " - " + item?.to_language__name_uz
        } else {
            if (lang === 'en') return data?.role === "gid" ?  item?.language__name_en :  item?.from_language__name_en + " - " + item?.to_language__name_en
            if (lang === 'ru') return data?.role === "gid" ?  item?.language__name_ru :  item?.from_language__name_ru + " - " + item?.to_language__name_ru
            if (lang === 'uz') return data?.role === "gid" ?  item?.language__name_uz :  item?.from_language__name_uz + " - " + item?.to_language__name_uz
        }

    } 
    let new_yosh = data?.age;
    let nyosh = new_yosh % 10
    let yosh11 = "";
    if(nyosh === 1){
        yosh11 = t("yoshlar.god")
    }
    else if( nyosh >=2 && nyosh <= 4 ){
        yosh11 = t("yoshlar.goda")
    }
    else if(nyosh === 0 || nyosh >= 5){
        yosh11 = t("yoshlar.let")
    }
    return (
        <WrapperContainer>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Container {...media_container} margin="20px 0 0 0">
                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column" className='AccContainer'>
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
                        <div className="gid-info-personal">{data?.age ? (data?.age + " " + yosh11 ) : t("GidPk.yoshKiritilmagan")}  | <span style={{ textTransform: "none" }}>{data?.role === "translator" ? t("GidPk.ogzakiT") : data?.role === "gid" ? t("GidPk.gid") : data?.role === "writer" ? t("GidPk.yozmaT") : " "}
                        </span> </div>
                        <div className="gid-info-personal-text">
                            <div className="text">
                            {t("Gid_Tanlash.tillar")} :
                                </div>
                            {
                                data?.languages?.length > 0 ?
                                    data?.languages?.map((prev, index) => " " + languageCheck(prev, lang) + `${index !== data?.languages?.length - 1 ? ',' : ''}`) : t("GidPk.malumotKiritilmagan")
                            }
                        </div>
                        <div className="gid-info-personal-text">
                            <div className="bio_text"><div className="bold_text">{t("Gid_Tanlash.OzimHaqimda")}:</div> {data?.bio ? data?.bio?.slice(0,300)+"..." : t("GidPk.malumotKiritilmagan")}</div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <InfoBtn data={data} />
                </Grid>
            </Grid>
        </WrapperContainer>
    )
}

export default Index
