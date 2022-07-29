import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import {mainGreen} from "../../../styles/global/colors"

export const NavLinkWrapper = styled.div`
    .active{
        color:#fafcfa !important;
        background-color: ${mainGreen};
        padding:10px 32px;
        text-align: center;
    }
`
export const ButtonNavbar = styled(NavLink)`
    display: inline-block;
    padding:12px 32px;
    cursor: pointer;
    border-radius: 4px;
    border:none;
    background-color:transparent;
    color:#000;
    font-weight:500;
    &:hover{
        color: ${mainGreen};
    }
`