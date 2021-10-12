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
  }
  .img0{
    margin-bottom: 3px; 
    margin-left: 30px;
    margin-right: 5px;
  }
  @media (max-width: 600px){
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