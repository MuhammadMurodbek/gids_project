import React from 'react'
import {Wrapper, TextWrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { useTranslation } from 'react-i18next'

const Index = ({data, role}) => {
    const {t} = useTranslation()
    const DEGREES = {
        higher: t("mutahasis.oliy"),
        secondary_special: t("mutahasis.ortaMahsus"),
    }
    const DEGREES_GIT = {
        highest_category: t("toifalar.oliyToifali"),
        first_category: t("toifalar.birinchiToifali"),
        second_category: t("toifalar.ikkinchiToifali"),
        no_category: t("toifalar.toifasizToifali"),
    }
    const checkValues = (data)=>{
        if(data) return data
        else return t("GidPk.malumotKiritilmagan")
    }
    return (
        <Wrapper>
            <Title text={t("GidPk.malumotVaTajriba")}/>
            {
                role === 'gid' ? 
                <TextWrapper>
                    <Text margin="0 0 5px" title= {t("GidPk.institut")} text={" " +checkValues( data?.completed_university)}/><br/>
                    <Text margin="0 0 5px" title={t("GidPk.mutahasis")} text={" "+ checkValues(DEGREES[data?.education_degree])}/><br/>
                    <Text margin="0 0 5px" title={t("GidPk.toifasi")} text={" "+ checkValues(DEGREES_GIT[data?.category])}/><br/>
                    <Text margin="0 0 5px" title={t("GidPk.qoshimcha")+" "} text={" "+ data?.additional_courses?.length>0 ? data?.additional_courses?.map(a=>" "+a) : t("GidPk.malumotKiritilmagan")}/><br/>
                    <Text margin="0 0 5px" title={t("GidPk.ishtaj")+" "} text={" "+ data?.experience_year ? data?.experience_year + " yil" : t("GidPk.malumotKiritilmagan")}/><br/>
                </TextWrapper>:
                <>
                    {data?.universities?.map((prev, index) =>(
                        <TextWrapper key={index} style={{margin:'10px 0 0'}}>
                            <Text title= {t("GidPk.institut")+" "} text={prev?.name || t("GidPk.malumotKiritilmagan")} /><br/>
                            <Text title={t("GidPk.yil")+" "} text={prev?.year || t("GidPk.malumotKiritilmagan")}/><br/>
                            <Text title={t("GidPk.mutahasis")+" "} text={prev?.speciality || t("GidPk.malumotKiritilmagan")}/>
                        </TextWrapper>
                    ))}
                    <TextWrapper>
                        <Text title={t("GidPk.ishtaj")+" "} text={data?.experience_year+" yil" || t("GidPk.malumotKiritilmagan")}/><br/>
                        <Text title={t("GidPk.ishJoy")+" "} text={data?.work_place || t("GidPk.malumotKiritilmagan")}/><br/>
                        <Text title={t("GidPk.lavozim")+" "} text={data?.position || t("GidPk.malumotKiritilmagan")}/><br/>
                        <Text title={t("GidPk.ishvaqt")+" "} text={data?.work_time?.replace('|',"-") || t("GidPk.malumotKiritilmagan")}/><br/>
                    </TextWrapper>
                </>
            }
        </Wrapper>
    )
}

export default Index
