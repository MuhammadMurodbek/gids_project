import React from 'react';
import { Wrapper } from './style';
import InputLabeled from "../../../../../components/molecules/input.labeled"
import { Container } from '../../../../../styles/container/index.style'
import Selection from '../../../../../components/atom/select'
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import Button from "../../../../../components/atom/button"
import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t } = useTranslation()
    return (
        <Wrapper>
            <Container>
                <div>
                    <TextTitle font="14px" align="left" position="relative" p_top="20px">
                        {t("narxlar.birkunlikHizmat")}
                    </TextTitle>
                    <div className="wrap_class">
                        <InputLabeled width="170px" placeholder="50" typeNumber />
                        <div className="wrap_class_inner">
                            <Selection width="170px" placeholder="$" />
                        </div>
                        <p>* средняя продолжительность дня 8 - 9 часов</p>
                    </div>
                </div>
                <div>
                    <TextTitle font="14px" align="left" position="relative" p_top="20px">
                    {t("narxlar.birSoatlik")}
                    </TextTitle>
                    <div className="wrap_class">
                        <InputLabeled width="170px" placeholder="50" typeNumber />
                        <div className="wrap_class_inner"><Selection width="170px" placeholder="$" /></div>
                        <p>* средняя продолжительность дня 8 - 9 часов</p>
                    </div>
                </div>
            </Container>
            <Container padding="10px 0" margin="10px 0 0 -30px" textAlign="right">
                <Button>{t("narxlar.saq")}</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
