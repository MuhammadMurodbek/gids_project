import styled from 'styled-components'
import {NavLink} from "react-router-dom"

export const NavLinkWrapper = styled.div`
    .active{
        color:#fafcfa !important;
        background-color: #326A32;
        padding:10px 32px;
    }
`
export const ButtonNavbar = styled(NavLink)`
    display: inline-block;
    padding:12px 32px;
    cursor: pointer;
    border-radius: 4px;
    border:none;
    background-color:transparent;
    color:#333;
    font-weight: 500;
    &:hover{
        color: #326A32;
    }
`