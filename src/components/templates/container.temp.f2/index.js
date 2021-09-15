import React from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"
// import btnImage from "../../../assets/img/choosegid/btnDavomi.svg"
// import ImageContainer from "../../molecules/img.container"
const Index = () => {
    return (
        <Wrapper>
            <ContainerMap/>
            <ButtonWrapper>
                <Button type="outlined"> Davomi {'>'}</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Index
