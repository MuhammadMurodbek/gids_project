import React from 'react'
import styled from "styled-components"
import {TextTitle} from "../../../../../styles/textTitle/index.style"
import InputLabeled from "../../../../../components/molecules/input.labeled/cost"
import Selection from "../../../../../components/atom/select/cost"
import {currency} from "../../../../../custom/constants"
const PriceCurrency = (props) => {
    const {prev, stateCurr, setStateCurr, title, setState, state, idK, fieldS, fieldIn, defaultCost, defaultCurr} = props 
   console.log(prev)
    return (
        <Wrapper>
            <div>
                <TextTitle font="14px" align="left" position="relative" p_top="20px">{title}</TextTitle>
                <div className="wrap_class">
                    <InputLabeled defaultApiValue={defaultCost} setState={setState} state={state} field={fieldIn} idK={idK} width="100%" placeholder="50" typeNumber />
                    <div className="wrap_class_inner">
                        <Selection prev={prev[fieldS]} defaultApiValue={prev[fieldS]} width="100%" options={currency} placeholder="$" setCollect={setStateCurr} collect={stateCurr} idK={idK} field={fieldS}/></div>
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