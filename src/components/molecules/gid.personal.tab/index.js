import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import NavLink from "../../atom/navlink.for.tab"
import {Wrapper} from "./style"

const Index = () => {
    return (
        <Wrapper>
            <FlexContainer width="100%" alignItems="center">
                <NavLink url="/popo" name="navLink"/>
                <NavLink url="/popo" name="navLink"/>
                <NavLink url="/popo" name="navLink"/>
                <NavLink url="/popo" name="navLink"/>
            </FlexContainer>
        </Wrapper>
    )
}

export default Index
