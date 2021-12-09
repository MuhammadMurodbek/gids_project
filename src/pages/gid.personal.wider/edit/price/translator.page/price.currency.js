import React from 'react'
import styled from "styled-components"
import {TextTitle} from "../../../../../styles/textTitle/index.style"
import InputLabeled from "../../../../../components/molecules/input.labeled"
import Selection from "../../../../../components/atom/select"
import {currency} from "../../../../../custom/constants"
const PriceCurrency = (props) => {
    const {title, setState, state, idK, fieldS, fieldIn} = props 
    return (
        <Wrapper>
            <div>
                <TextTitle font="14px" align="left" position="relative" p_top="20px">{title}</TextTitle>
                <div className="wrap_class">
                    <InputLabeled setState={setState} state={state} field={fieldIn} idK={idK} width="100%" placeholder="50" typeNumber />
                    <div className="wrap_class_inner">
                        <Selection width="100%" options={currency} placeholder="$" setCollect={setState} collect={state} idK={idK} field={fieldS}/></div>
                    </div>
            </div>
        </Wrapper>
    )
}

export default PriceCurrency

export const Wrapper = styled.div`
width: 100%;
    &>div{
        width: 100%;
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