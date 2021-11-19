import React from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useTranslation} from 'react-i18next'

const Index = () => {
    const {t} = useTranslation()
    return (
        <Wrapper>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ButtonWrapper>
                <Button type="outlined" className="arrow"> {t("Gid_Tanlash.davomi")} <ArrowForwardIcon/>  </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Index
