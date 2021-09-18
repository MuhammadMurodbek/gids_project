import styled from "styled-components";
import {mainGreen} from "../../styles/global/colors"
export const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;
    padding: 10px;

    .divbtns{
        display: flex;
        justify-content: center;
        padding: 2px;
        margin-top: 60px;
    }   
    .davomi{
        display: flex;
        align-items: center;
    }
    .arrovicon{
        margin-left: 10px;
    }
`
export const Request = styled.div`
    margin: 20px; 
    box-shadow:0px 5px 5px #BBBDBB;
    .id{
        margin-right: 10px;
    }
    .Rp{
        margin-top: 30px;
    }
    .responsText{
        padding: 30px;
    }
    .responsText span{
        font-weight: 800;
        margin-bottom: 20px;
    }
    .responsFooter{
        background-color:${mainGreen};
        padding: 20px;
    }
    .textS{
        color: #fff;
        margin-left: 15px;
       
    }
    .a11{
        /* display: flex; */
        /* align-items: center; */
        font-size: 12px;
    }
    .item33{
        margin-left: 40px;
    }
    .sana{
        color: #84A684;
        display: flex;
        justify-content: flex-end;
    }
   
     
`