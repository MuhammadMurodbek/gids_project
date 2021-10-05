import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"
export const Wrapper = styled.div`
    width: 100%;
    min-height: 80vh;
    margin:20x 0;
    display:flex;
    align-items: flex-start;
    justify-content:center;

    .sc-cxFLGX.dhdUK{
        margin:35px 0;
    }
    .MuiTab-wrapper{
        color: #326A32 !important;
    }
`
export const Container = styled.div`
    /* width:400px; */
    height: auto;
    padding:10px;
    margin-top:30px;
    /* background-color:red; */
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);

    .MuiPaper-elevation4{
        box-shadow:none !important;
    }
    .MuiAppBar-colorDefault{
        background-color:#fff;
    }
`
export const Authorization = styled.div`
    /* background-color:green; */
    .link{
        color: ${mainGreen};
        font-size:12px;
        /* text-decoration:line; */
        /* margin-left: auto; */
        /* background-color:red; */
        /* width:100%; */
        text-align:right;
        padding-right: 10px;

        &:hover {
            text-decoration: underline;
        }
        
    }
`