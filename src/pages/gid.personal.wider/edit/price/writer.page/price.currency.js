import React from 'react'
import styled from "styled-components"
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import InputLabeled from "../../../../../components/atom/input.second"
import Selection from "../../../../../components/atom/select"
import {currency, CURRENCY_CHECK} from "../../../../../custom/constants"
const PriceCurrency = (props) => {
    const { title, defValueCost, defValueCurrency, setState, state, fieldIn, fieldS, idK, handleChangeInput } = props
   
    return (
        <Wrapper>
            <div>
                <TextTitle font="12px" align="left" position="relative" p_top="10px">{title}</TextTitle>
                <div className="wrap_class">
                    <InputLabeled 
                        type="number"
                        width="100%" 
                        defaultValue={state[fieldIn] || defValueCost}
                        onChange={(e)=>handleChangeInput(e.target.value, fieldIn, idK)}
                        name={fieldIn}
                        placeholder="Son kiriting.." 
                        step="0.001"
                        style={{position: "relative", top:13}} 
                    />
                    <div className="wrap_class_inner">
                        <Selection options={currency} setCollect={setState} collect={ state } field={fieldS} defaultApiValue={CURRENCY_CHECK[defValueCurrency]} idK={idK} width="150px" placeholder="$" />
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