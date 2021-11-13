import React from 'react'
import Button from "."
import BanIcon from "../../../assets/img/gid-per-wide-calendar/ban.png"
import styled from "styled-components"
const CustomAdd = (props) => {
    const { positionEffect } = props
    return (
        <Wrapper {...positionEffect}>
            <Button {...props} type="outlined">
                <img src={BanIcon} alt="s" />
            </Button>
        </Wrapper>
    )
}

export default CustomAdd

export const Wrapper = styled.div`
    position: ${alt => alt.position};
    top: ${alt => alt.top};
    bottom: ${alt => alt.bottom};
    right: ${alt => alt.right};
    left: ${alt => alt.left};
    .sc-bkzYnD.bqWjhY{
        padding:0;
        border:none;
    }
`