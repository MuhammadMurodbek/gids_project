import styled from "styled-components";
import {mainGreen} from "../../styles/global/colors"


export const Wrapper = styled.div`
    width: 100%;
    .imgad{
     margin-bottom: 30px;
    }
    .imgBukhara{
        position: relative;
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
  .msa2{
      padding:15px;
      margin-left: 15px;
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
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #70777B;
    width: 1033px;
    height: 187px;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 144px;
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


 `
 export const PerentAB = styled.div`
        width: 100%;
        height: 300px;
        position: relative;
 `
 export const AboutB = styled.div`
    width: 90%;
    margin: 10px auto;
    position: absolute;
    top: -70px;
    left: 50%;
    transform:translate(-50%);
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
   
 `