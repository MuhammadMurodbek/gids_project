import React from 'react'
import Button from '../../atom/button'
import ContainerMap from "../../organism/container.f2"
import {Wrapper, ButtonWrapper} from "./style"

function Containers(n){
    for(var i = 0; i < n; i++)
        return <ContainerMap/>
}

const Index = () => {
    return (
        <Wrapper>
            {/* {Containers(10)} */}
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
