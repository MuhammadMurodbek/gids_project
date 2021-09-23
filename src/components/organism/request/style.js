
import styled from "styled-components";
import {mainGreen} from "../../../styles/global/colors"

export const Wrapper = styled.div`
 
    width:90%;
    margin:20px auto;
    box-shadow:0px 5px 5px #BBBDBB;

    .responsText{
        padding: 30px;
    }
    .title-respons11{
        display: flex;
        justify-content: space-between;
    }
    .responsText span{
        font-weight: 800;
        margin-bottom: 20px;
    }
    .id{
        margin-right: 10px;
    }
    .Rp{
        margin-top: 30px;
    }
    .responsFooter{
        background-color:${mainGreen};
        padding: 20px;
    }
    .textS{
        color: #fff;
        margin-left: 15px;
        font-size: 15px;
       
    }
    .a11{
        /* display: flex; */
        /* align-items: center; */
        font-size: 12px;
    }
        
    .sana{
        color: #84A684;
        display: flex;
        justify-content: flex-end;
    }
`


