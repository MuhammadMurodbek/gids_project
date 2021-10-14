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
    .sc-gKseQn.iFmfMI{
        padding: 9px 5px;
    }
    .css-1wa3eu0-placeholder{
        color:#444;
    }
    @media (max-width: 532px){
        .MuiBox-root.css-19kzrtu{
            padding:2px;
            font-size:12px;
            /* background-color: red; */
        }
        .MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
            padding:1px;
            font-size:12px;
            /* background-color:red; */
        }
    }
`
export const Container = styled.div`
    width:600px;
    height: auto;
    padding:10px;
    margin-top:30px;
    /* background-color:red; */
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
    @media (max-width:800px){
        width:500px;
    }
    @media (max-width:532px){
        width:94%;
        padding:2px;
    }
    /* @media (max-width:418px){
        width:300px;
    } */

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
    @media (max-width: 457px) {
        .sc-iJuVqt.xexEG.text-right{
            text-align: center;
        }
    }
`