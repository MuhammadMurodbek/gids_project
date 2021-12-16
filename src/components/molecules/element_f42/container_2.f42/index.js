import React from 'react'
import {Wrapper, TextWrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { useTranslation } from 'react-i18next'

const Index = ({data, role}) => {
    const {t} = useTranslation()
    const DEGREES = {
        higher: "Higher",
        secondary_special: "Secondary special",
    }
    const DEGREES_GIT = {
        highest_category: "Highest category",
        first_category: "First category",
        second_category: "Second category",
        no_category: "No category",
    }
    return (
        <Wrapper>
            <Title text={t("GidPk.malumotVaTajriba")}/>
            {
                role === 'gid' ? 
                <TextWrapper>
                    <Text title= {t("GidPk.institut")} text={" " + data?.completed_university || "Ma'lumot kiritilmagan"}/><br/>
                    <Text title={t("GidPk.mutahasis")} text={" "+ DEGREES[data?.education_degree] || "Ma'lumot kiritilmagan"}/><br/>
                    <Text title="Toifasi: " text={" "+ DEGREES_GIT[data?.category] || "Ma'lumot kiritilmagan"}/><br/>
                    <Text title="Qo'shimcha kurslar: " text={" "+ data?.additional_courses?.map(a=>" "+a) || "Ma'lumot kiritilmagan"}/><br/>
                    <Text title="Ish tajribasi: " text={" "+ data?.experience_year + " yil" || "Ma'lumot kiritilmagan"}/><br/>
                </TextWrapper>:
                <>
                    {data?.universities?.map((prev, index) =>(
                        <TextWrapper key={index} style={{margin:'10px 0'}}>
                            <Text title= {t("GidPk.institut")+" "} text={prev?.name || "Ma'lumot kiritilmagan"} /><br/>
                            <Text title={t("GidPk.yil")+" "} text={prev?.year || "Ma'lumot kiritilmagan"}/><br/>
                            <Text title={t("GidPk.mutahasis")+" "} text={prev?.speciality || "Ma'lumot kiritilmagan"}/><br/>
                        </TextWrapper>
                    ))}
                    <TextWrapper>
                        <Text title={t("GidPk.ishtaj")+" "} text={data?.experience_year+" yil" || "Ma'lumot kiritilmagan"}/><br/>
                        <Text title={t("GidPk.ishJoy")+" "} text={data?.work_place || "Ma'lumot kiritilmagan"}/><br/>
                        <Text title={t("GidPk.lavozim")+" "} text={data?.position || "Ma'lumot kiritilmagan"}/><br/>
                        <Text title={t("GidPk.ishvaqt")+" "} text={data?.work_time || "Ma'lumot kiritilmagan"}/><br/>
                    </TextWrapper>
                </>
            }
        </Wrapper>
    )
}

export default Index
