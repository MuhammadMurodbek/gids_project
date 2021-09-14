import React from 'react'
import {NavLinkWrapper, ButtonNavbar} from "./index.style"
const Index = (props) => {
    return (
        <NavLinkWrapper>
            <ButtonNavbar
                to={props.url}
                activeClassName="active"
            >
                {props.title}
            </ButtonNavbar>
        </NavLinkWrapper>
    )
}

export default Index
