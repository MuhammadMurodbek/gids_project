import styled from "styled-components"
import { mainGreen } from "../../../../styles/global/colors"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:30px 70px;
    margin-top:30px;
    margin-bottom:80px;
    font-family: Montserrat !important;
    .container4{
        position:relative;
        z-index:10;
    }  
   
`
export const TitleContainer = styled.div`
    width: 100%;
    padding:15px 20px;
    background-color:${mainGreen};
    color:#fff;
`

export const TitleComponent = styled.div`
    position:relative;
    width:100%;
    height: auto;


  

    .fa-chevron-right{
        color:${mainGreen};
    }
    .link{
        color:${mainGreen};
    }
    .title-left{
        position:absolute;
        top:10px; right:0;
        display:flex;
        flex-direction: row;
        align-items:center;
        gap:10px;
        /* width:200px; */
        /* background-color: red; */
    }
    @media (max-width:450px){
        .title-left{
            /* font-size:12px; */
            top:5px;
            right:5px;
        }
        span{
            display:none;
        }
    }
`