import React from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"
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
                <Button type="outlined"> Davomi {'>'}</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Index
