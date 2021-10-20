import styled from "styled-components";
import {mainGreen} from "../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    margin: 70px 0;
    p{
        margin: 0;
    }
    .freque{
        margin:20px -10px ;
    }
    .idb{
        font-weight: 800;
        font-size: 23px;
    }
    .Fgrid1{
        box-shadow:0px 5px 5px #BBBDBB;
        margin-right: 20px;
    }
    .Fgrid2{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow:0px 5px 5px #BBBDBB;
        margin-left: 0px;
    }
    
    .gridTitle{
    }
    .gridTitle2{
        display: flex;
        justify-content: flex-end;
    }
    .arrole{
        font-size: 18px;
        margin-right: 15px;
    }
    .comback{
        display: flex;
        align-items: center;
        color:${mainGreen};
    }
    .div1title{
        background-color:${mainGreen};
        padding: 20px 25px;
        color: #fff;
        margin: -4px;
    }
    .tafsilot-text{
        display: flex;
        margin: 5px 20px;
        align-items: center ;
    }
   
    .tafsilot-text b{
        margin: 15px 5px;
    }
    b img{
        width: 25px;
    }
    .grid6text p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 130%;
        color: #000;
        padding: 10px;
    }
    .btnRequest{
        margin: 20px;
    }
    
    .f-sana{
        display: flex;
        justify-content: flex-end;
        font-size: 13px !important;
        color:#717171 !important;
    }

            /* modal */
 
    .closebtn{
        display: flex;
        justify-content: flex-end;
        padding:10px ;
    }
    .pointx{
        cursor: pointer;
    }
    .modaltitle{
        text-align: center;
        color: black;
        font-weight: 600;
    }
    .sc-dIUeWJ.buScyB{
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }
    /* @media (max-width: 960px) {
        .Fgrid1{
            margin-right: 0;
        } 
    } */
    @media (max-width:960px) {
        .gridTitle2{
            justify-content: flex-start;
        }
        .grid_container{
            flex-direction: column-reverse;
        }
        .Fgrid1{
            margin-right: 0;
        } 
        .grid6text.Fgrid2{
            margin-bottom:15px;
        }
    }
 `