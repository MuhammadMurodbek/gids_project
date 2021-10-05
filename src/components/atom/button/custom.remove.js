import React from 'react'
import Button from "./"
import RemoveIcon from "../../../assets/img/gid-per-wide-calendar/ban.png"
import styled from "styled-components"
const CustomAdd = (props) => {
    return (
        <Wrapper>
            <Button {...props} type="outlined"><img src={RemoveIcon} alt="s"/></Button>
        </Wrapper>
    )
}

export default CustomAdd

export const Wrapper = styled.div`
    .sc-bkzYnD.bqWjhY{
        padding:0;
        border:none;
    }
`