import styled from "styled-components"
import {mainGreen} from "../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    .wrap-grid{
        margin:20px 0;
    }
`
export const Title = styled.div`
    width: 100%;
    height: auto;
    padding:15px;
    text-align: left;
    color:#fff;
    font-size:20px;
    font-weight:700;
    background-color: ${mainGreen};
`
export const shadow = '0px 0px 40px 0px rgba(0, 0, 0, 0.08)'