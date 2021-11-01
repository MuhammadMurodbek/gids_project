import React from 'react'
import styled from "styled-components"
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import InputLabeled from "../../../../../components/molecules/input.labeled"
import Selection from "../../../../../components/atom/select"
const PriceCurrency = (props) => {
    const { title } = props
    return (
        <Wrapper>
            <div>
                <TextTitle font="12px" align="left" position="relative" p_top="20px">{title}</TextTitle>
                <div className="wrap_class">
                    <InputLabeled width="150px" placeholder="50" typeNumber sizeLabel="12px" />
                    <div className="wrap_class_inner">
                        <Selection width="100px" placeholder="$" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default PriceCurrency

export const Wrapper = styled.div`
    &>div{
        position: relative;
        top:-3px;
    }
    .wrap_class{
    display:flex;
    align-items: center;
    p{
        margin:0;
        position:relative;
        top:10px; left:10px;
    }
    }
    .wrap_class_inner{
        position: relative;
        top:13px; left:2px;
    }
`