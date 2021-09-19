import React from 'react'
import { NavLink } from 'react-router-dom'
import {Wrapper} from "./style"

const Index = (props) => {
    const {url, name} = props
    return (
        <Wrapper>
            <NavLink activeClassName="active-tab" to={url}>{name}</NavLink>
        </Wrapper>
    )
}

export default Index
