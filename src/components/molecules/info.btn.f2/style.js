import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"

export const WrapperInfoBtn = styled.div`
    width: 100%;
    height: 100%;

    .fl-container{
        .icon{
            margin-right:20px;
            color:${mainGreen};
        }
        .count{
            color:#888;
            icon{
                margin-right: 10px;
            }
        }
        /* background-color: green; */
    }
`
