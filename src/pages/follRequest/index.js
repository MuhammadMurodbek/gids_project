import React from 'react'
import { Wrapper } from './index.style'
import FullRequest from '../../components/organism/fullRequest';
import { useTranslation } from 'react-i18next';

export default function Index() {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <FullRequest btnText={t("ToliqAriza.javobBerish")} />            
        </Wrapper>
    )
}
