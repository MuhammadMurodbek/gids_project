import React from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Index = () => {
    return (
        <Wrapper>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ContainerMap/>
            <ButtonWrapper>
                <Button type="outlined" className="arrow"> Davomi <ArrowForwardIcon/>  </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Index
