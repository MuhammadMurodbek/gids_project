import styled from "styled-components";
import {mainGreen} from "../../styles/global/colors"


export const Wrapper = styled.div`
    width: 100%;
     
    .imgad{
     margin-bottom: 30px;
    }
    .imgBukhara{
        position: relative;
        font-family: Montserrat !important; 
    }
 
    .msa{
      padding:20px;
     }  
  .xitoy-text{
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color:${mainGreen};
  }
  .text-xitoy__more{
      padding: 10px 0 !important;
      /* margin-top: 20px; */
  }
  .addsa{
        
      margin-top:30px;
  }
  .sc-fKFxtB.cNPZrT{
    margin: 0 auto;
  }
  .img0{
    margin-bottom: 3px; 
    margin-left: 30px;
    margin-right: 5px;
  }
  .title-div-text{
      font-weight: 600;
  }
  .imte12{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
  }
  .bukhara{
    position: absolute;
    width: 100%;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: rgba(70, 70, 70, 0.5);
    width: 1033px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 120px;
    line-height: 130%;
        text-align: center;
    text-transform: uppercase;

  }  
  .text-link{
    color:${mainGreen};
    font-size: 20px;
    margin-top: 20px;
  }
  .arrow__readmore{
      font-size: 18px;
      margin-left: 10px;
      margin-bottom: -4px;
  }
  @media (max-width: 1400px){
    .msa2{
        display: none;
    }
    .bukhara{
        font-size: 120px;
       
    }
  }
  @media (max-width: 1000px){
    .bukhara{
        font-size:110px;
         
    }
  }
  @media (max-width: 600px){
    .jXZicw img{
        height:22vh !important;
    }
    .imgTop{
        height:300px !important
    }
    .bukhara{
        font-size:50px;
        
    }
  }
  @media (max-width: 300px){
    .bukhara{
        font-size:40px;
        
    }
  }
 

 `
 export const PerentAB = styled.div`
        width: 100%;
        min-height: 300px;
        /* position: relative; */
 `
 export const AboutB = styled.div`
    width: 90%;
    height: auto;
    margin: 10px auto;
    /* position: relative; */
    /* top: -70px; */
    /* left: 50%; */
    transform:translateY(-50px);
    box-shadow: 0px 20px 20px #EDEDED;
    
    .Abukhara-title{
        background-color:${mainGreen};
        padding:15px;
    }
    .Abuhoro-text{
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #fff;
        margin: 0;
        font-weight: 600;
    }
     .Abukhara-text-more{
         padding: 20px;
     }
     @media (max-width: 600px){
        .Abuhoro-text{
            font-size:16px
        }
        .Abukhara-title{
            padding:5px;

        }

      }

    @media(min-width:1370px){
        width:1266px;
        magin:0 auto;
    }
 `