import React from 'react'
import {Wrapper, TextWrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { useTranslation } from 'react-i18next'

const Index = ({data, role}) => {
    const {t} = useTranslation()

    return (
        <Wrapper>
            <Title text={t("GidPk.malumotVaTajriba")}/>
            {
                role === 'gid' ? 
                <TextWrapper>
                    <Text title= {t("GidPk.institut")} text=" Jahon Tillar Universiteti"/><br/>
                    <Text title={t("GidPk.yil")} text=" 2021"/><br/>
                    <Text title={t("GidPk.mutahasis")} text=" Tarjimon"/><br/>
                </TextWrapper>:
                data?.universities?.map((prev, index) =>(
                    <TextWrapper key={index} style={{margin:'10px 0'}}>
                        <Text title= {t("GidPk.institut")} text={prev?.name} /><br/>
                        <Text title={t("GidPk.yil")} text={prev?.year}/><br/>
                        <Text title={t("GidPk.mutahasis")} text={prev?.speciality}/><br/>
                    </TextWrapper>
                ))

            }
            <TextWrapper>
                <Text title={t("GidPk.ishtaj")} text={data?.experience_year+" yil"}/><br/>
                <Text title={t("GidPk.ishJoy")} text={data?.work_place}/><br/>
                <Text title={t("GidPk.lavozim")} text={data?.position}/><br/>
                <Text title={t("GidPk.ishvaqt")} text={data?.work_time}/><br/>
            </TextWrapper>
        </Wrapper>
    )
}

export default Index
