import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    .grid-container{
        box-shadow:0px 5px 5px #BBBDBB;
        width: 100%;
        margin: 85px;
        padding: 20px ;
    }
    .sc-jUEmfL.bXPgTV{
        padding:10px 15px;
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
        justify-content: space-between;
        height: 50px;
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

    @media (max-width: 700px){
        .grid-container{
            width:95% !important;
        }
        .title-answers{
            padding:0 10px;
        }
        .btn-groups{
            button{
                width:220px;
                margin:0;
            }
            justify-content:space-between;
            /* flex-wrap: wrap; */
            align-items: center !important;/
            .sc-dIUeW.buScyB{
                position:relative;
                top:4px;
                text-align: center;
            }
            .sc-dIUeWJ.buScyB{
                text-align: center;
                margin:0 ;
            }
        }
        .btn-Pview{
            margin:0;
            margin-top:5px;
        }
        .feedback-div{
            flex-direction: column;
            margin:8px 0;
            h4{
                font-size:20px;
                margin:5px 0;
            }
            .feedback{
                margin-top:8px;
            }
            /* background-color: red; */
        }
    }
    @media (max-width: 530px){
        .btn-groups{
            flex-direction: column;
            button{
                margin:4px 0;
            }
        }
    }
`