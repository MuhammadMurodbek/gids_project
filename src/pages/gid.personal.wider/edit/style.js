import styled from "styled-components"
import {shadow} from "../../../styles/global/colors"
export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:30px 50px;
    /* margin:10px 30px; */
    /* background-color:green; */
    box-shadow:${shadow};
    .border-div.first{
        /* color:red !important; */
        /* width:180px; */
        padding:10px 0;
    }
    .br{
        display: none;
    }
    @media (max-width:900px){
        &{
            padding:10px 8px;
        }
    }
    @media (max-width:550px){
        /* &{
            padding:30px 8px;
        } */
        .br{
            display:inline-block;
        }
        .border-div.first{
            font-size: 13px;
        }
    }
`