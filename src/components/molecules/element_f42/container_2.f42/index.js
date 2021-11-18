import React from 'react'
import {Wrapper, TextWrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { useTranslation } from 'react-i18next'

const Index = () => {

    const {t} = useTranslation()

    return (
        <Wrapper>
            <Title text={t("GidPk.malumotVaTajriba")}/>
            <TextWrapper>
                <Text title= {t("GidPk.institut")} text=" Jahon Tillar Universiteti"/><br/>
                <Text title={t("GidPk.yil")} text=" 2021"/><br/>
                <Text title={t("GidPk.mutahasis")} text=" Tarjimon"/><br/>
                <Text title={t("GidPk.ishtaj")} text=" 4 yil"/><br/>
                <Text title={t("GidPk.ishJoy")} text=" Hiltom hotel"/><br/>
                <Text title={t("GidPk.lavozim")} text=" Manager"/><br/>
                <Text title={t("GidPk.ishvaqt")} text=" 10:00-18:00"/><br/>
            </TextWrapper>
        </Wrapper>
    )
}

export default Index
