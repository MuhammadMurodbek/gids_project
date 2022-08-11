import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const WrapperInfoBtn = styled.div`
    width: auto;
    height: 100%;
    padding-right: 20px;
    /* background-color: blue; */
    /* text-align: right; */
    .fl-container{
        .icon{
            margin-right:20px;
            color:${mainGreen};
        }
        .count{
            font-size:14px;
            margin-right:10px;
            color:#888;
            icon{
                margin-right: 15px;
            }
        }
        /* background-color: green; */
    }
    @media(max-width: 600px){
        padding-right: 0px;
    }
`
