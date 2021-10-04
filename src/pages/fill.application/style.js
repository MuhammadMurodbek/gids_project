import styled from "styled-components"
import {mainGreen} from "../../styles/global/colors"

export const Wrapper = styled.form`
    width: 100%;
    height: auto;

    .wrap-grid{
        margin:20px 0;
    }

    .modaldiv{
        padding: 40px;
        padding-top: 10px;
    }   
    .closebtn{
        display: flex;
        justify-content: flex-end;
        padding:10px ;
    }
    .pointx{
        cursor: pointer;
    }
    .modaltitle{
         color:#36BF76;
         font-style: normal;
         font-weight: bold;
         font-size: 32px;
         line-height: 120%;
    }
`
export const Title = styled.div`
    width: 100%;
    height: auto;
    padding:20px;
    text-align: left;
    color:#fff;
    font-size:20px;
    font-weight:700;
    background-color: ${mainGreen};
`
export const shadow = '0px 0px 40px 0px rgba(0, 0, 0, 0.08)'