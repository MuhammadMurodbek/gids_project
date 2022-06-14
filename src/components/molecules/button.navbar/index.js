import React from 'react'
import {NavLinkWrapper, ButtonNavbar} from "./index.style"
const Index = (props) => {
    function windowTo(){
        window.scrollTo(0,0)
    }
    return (
        <NavLinkWrapper>
            <ButtonNavbar
                to={props.url}
                activeClassName="active"
                onClick={windowTo}
            >
                {props.title}
            </ButtonNavbar>
        </NavLinkWrapper>
    )
}

export default Index
