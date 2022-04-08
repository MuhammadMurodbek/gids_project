import styled from "styled-components"
import {mainGreen} from "../../styles/global/colors"

export const Wrapper = styled.form`
    width: 100%;
    height: auto;
    padding: 10px 25px;
    /* background: red; */
    .wrap-grid{
        margin:20px 0px;
    }
    .currency{
        display:flex;
        background-color:red;
    }
    @media (min-width:1367px){
        width: 1400px ;
        margin: 0 auto;
    }
    .modaldiv{
        padding: 40px;
        padding-top: 10px;
        @media (max-width: 600px){
            padding:5px 10px;
            /* width: 100%; */
            h1{
                font-size:16px;
                margin-top:4px;
            }
            p{
                font-size: 14px;
            }
        }
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
    @media (max-width: 600px){
        padding: 10px 0 !important;
        .title_inner{
            /* font-size: ; */
            margin-bottom:5px;   }
    }
    .wrap-grid{
        margin-top:10px;
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
    @media (max-width:600px){
        font-size: 18px !important;
    }
`
export const WrapEdit = styled.div`
    .check_pick{
        background:red !important;
    }
`
export const shadow = '0px 0px 40px 0px rgba(0, 0, 0, 0.08)'