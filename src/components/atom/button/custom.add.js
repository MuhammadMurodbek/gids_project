import React from 'react'
import Button from "."
import AddIcon from '@material-ui/icons/Add';
import styled from "styled-components"
const CustomAdd = (props) => {
    const {positionEffect} = props
    return (
        <Wrapper {...positionEffect}>
            <Button {...props}><AddIcon style={{marginTop:5}}/></Button>
        </Wrapper>
    )
}

export default CustomAdd

export const Wrapper = styled.div`
    position: ${alt=>alt.position};
    top: ${alt=>alt.top};
    bottom: ${alt=>alt.bottom};
    right: ${alt=>alt.right};
    left: ${alt=>alt.left};
    .sc-bkzYnD.fCSNeF{
        padding:8px 13px;
        border:none;
    }
`