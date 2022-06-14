import styled from "styled-components"
import {mainGreen} from "../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .gridTitle2{
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
    }
    .arrole{
        font-size: 18px;
        margin-right: 15px;
    }
    .comback{
        display: flex;
        align-items: center;
        color:${mainGreen};
        cursor:pointer;
    }
`