import React from 'react'
import { Wrapper } from "./style"
import Progress from "../../../atom/progressbar"
import { FlexContainer } from '../../../../styles/flex.container'
import { useTranslation } from "react-i18next"

const Index = ({ data }) => {
    const {t} = useTranslation()

    return (
        <Wrapper>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar">
                    <Progress percent={(data?.five / data?.all) * 100} />
                </div>
                <div className="progress-text">{t("baho.alo")}</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent={(data?.four / data?.all) * 100} /></div>
                <div className="progress-text">{t("baho.yaxshi")}</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent={(data?.three / data?.all) * 100} /></div>
                <div className="progress-text">{t("baho.ortancha")}</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent={(data?.two / data?.all) * 100} /></div>
                <div className="progress-text">{t("baho.yomon")}</div>
            </FlexContainer>
            <FlexContainer width="100%" alignItems="center">
                <div className="progress-bar"><Progress percent={(data?.one / data?.all) * 100} /></div>
                <div className="progress-text">{t("baho.judaYomon")}</div>
            </FlexContainer>
        </Wrapper>
    )
}

export default Index
