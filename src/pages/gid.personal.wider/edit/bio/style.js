import styled from "styled-components"
import {shadow, mainGreen} from "../../../../styles/global/colors"
export const Wrapper = styled.form`
    width: 100%;
    height: auto;
    /* box-shadow:${shadow}; */
    /* background-color:red; */
    .btnGrop{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 40px 10px 10px;
    }
    .edit_div{
        /* background-color:red; */
        display: inline-block;
        padding:5px 7px;
        position: relative;
        top:-10px; left: 15px;
        border-radius: 4px;
        border:1px solid ${mainGreen};
        cursor:pointer;
    }
    .icon_edit{
        font-size:20px;
        color:${mainGreen};
    }
`