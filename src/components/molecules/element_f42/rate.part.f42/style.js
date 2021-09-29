import styled from "styled-components"
import {mainGreen} from "../../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
`
export const PercentCount = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    color:${mainGreen};
    text-align: center;

    .main{
        font-size: 60px;
        font-weight: bold;
    }
    .extra{
        position: relative;
        top:10px;
        font-size: 25px;
        font-weight: bold;
    }
`
export const RateWrapper = styled.div`
    text-align: center;
`