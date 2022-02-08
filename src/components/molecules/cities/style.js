import styled from "styled-components";
// import {mainGreen} from "../../styles/global/colors"
import {mainGreen} from "../../../styles/global/colors"


export const Wrapper = styled.div`
    width: 100%;
    /* background-color:red; */
    padding:8px 10px;

    .msa{
      padding:20px;
     }  
    .imte12{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
  }

  .hteg{
    color: #000;
  }

  .xitoy-text{
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color:${mainGreen};
  }
  .title-div-text{
      display: flex;
      font-weight: 600;
      /* background-color:red; */
  }
  .img0{
    margin-bottom: 3px; 
    margin-left: 30px;
    margin-right: 5px;
  }
  .hteg_wrapper{
    width:200px;
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 600px){
    /* .xitoy-text{
      font-size: 12px;
    } */
    .hteg{
      min-width:100px;
      display: flex;
      /* background-color:red; */
      flex-direction: row;
    }
    .title-div-text{
      width:140px;
      overflow: hidden;
      div{
        display: flex;
        font-size: 14px;
      }
    }
    p,
    .title-div-text
    {
      /* display: block; */
      flex-direction: column;
      font-size: 16px !important;
      /* color:red !important; */
    }
  }
` 