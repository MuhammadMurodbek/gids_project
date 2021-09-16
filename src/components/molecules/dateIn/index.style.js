import styled from "styled-components";
import {mainGreen} from "../../../styles/global/colors";

 export const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;
    padding-top: 10px;
    /* background-color: red; */
    margin-bottom: 50px;
    .searchI{
        background-color:${mainGreen};
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(value)=>value.type === "outlined" ? `${mainGreen}`:"#fff"};
        border-radius: 0 5px 5px 0; 
    }
`

