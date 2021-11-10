import styled from "styled-components";
import {mainGreen} from "../../styles/global/colors"
export const Wrapper = styled.div`
        width:100%auto;
        padding: 10px;  

        .title-S{
            font-weight: 700;
            font-size: 20px;
        }
   `
export const Title = styled.p`
    font-weight: 600;
    font-size: 48px;
    line-height: 56px;
  `
export const TextColor = styled.span`
    color: ${mainGreen};
`
export const Takliflar = styled.div`
    margin: 50px 0;
    @media (max-width: 768px) {
        .text{
            padding:0 5px !important;
            /* color:red; */
        }
        .sc-lmoMya.bRHnII{
            margin:20px 0;
        }
    }
        .text1{
            text-align: center;
            padding:30px;
        }
        .texttitle{
            color: #000;
            font-weight: 600;
            margin:25px 0;
        }
        .text{
            font-weight: normal;
            font-size: 14px;
            line-height: 130%;
            padding: 0 80px;
        }
`

export const Savollar = styled.div`
    padding: 0 100px;
    margin-bottom:100px ;
    @media (max-width: 768px){
        padding:10px 0;
    }
`
export const ContainerLast = styled.div`
    width: 100%;
    padding:40px 0;
    margin-top:20px;
    text-align:center;
    background-color: #F2F8F2;

    .button-s{
        text-align:center;
    }
`
export const FlexContainer = styled.div`
    text-align: center;
`




export const ComponentTwo = styled.div`
        width: 100%;
        padding:10px 20px;
        margin: 100px 0;
p{
    margin-bottom: 14px;
}
.container-2-1{
    padding:20px;
    position:relative;
    top:50%;
    transform:translateY(-50%);
}
.title-second-main-container{
    width:100%;
    margin:60px 0;
    font-size:28px;
    font-weight:700;
    text-align:center;
}
.title-second-main-container-text{
    width:100%;
    margin:14px 0;
    font-size:22px;
    font-weight:600;
    text-align:left;
}
@media (max-width: 600px){
    &{
        padding:0px 10px;
        margin: 10px 0;
        height:auto; 
    }
    .jrhNFr{
        line-height:36px;
    }
    .container-2-1{
        /* top:160px; */
        margin-top:30px;
        text-align:center;
        /* background: red; */
    }
}
@media (max-width: 960px) {
    .grid_container{
        flex-direction:column-reverse;
    }
    .container-2-1{
        width:100%;
        height:auto;
        /* background-color:red; */
        padding:10px 0;
        top:100px;
    }
}
`
