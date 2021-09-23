import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    .grid-container{
        box-shadow:0px 5px 5px #BBBDBB;
        width: 85%;
        padding: 20px;
    }
    .btnBack{
        float: right !important;
        margin-right: 100px;

     }
     .title-answers{
         margin: 50px 0;
         margin-top: 100px;
        font-weight: normal;
        font-size: 18px;
        line-height: 140%;
        text-align: center;
        
     }
     .answers{
        margin:30px 0;
      
        display: flex;
        justify-content: center;
     }
     .item{
         padding: 20px;
      }
     .feedback{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .feedback div{
        margin-right: 10px;
    }
    .imgss{
        margin-left: 20px;
    }
     .feedback-div{
         display: flex ; 
        align-items: center;
     }
     .tarjimon span{
        margin-right: 10px;
     }
     .tarjimon span:nth-child(2){
        margin-left: 10px;
    }
    .feedbeeck-text{
        margin: 20px 0;
    }
    .btn-groups{
        display: flex;
        justify-content: flex-end;
    }
    .btn-Pview{
        margin-left:20px;
    }
`