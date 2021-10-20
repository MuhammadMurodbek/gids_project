import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 50px 30px;

    .msa2{
      background-color: red;
      margin-left:60px;
    }
    .imte12{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
  }
  .img0{
    margin-bottom: 3px; 
    margin-left: 30px;
    margin-right: 5px;
  }
  .text-xitoy__more{
      padding: 0 !important;
      margin-top: 20px;
  }
  .image_adds{
    margin-top: 30px;
  }
  .xitoy-text{
      margin: 0;
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 24px;
      color:#000;
      font-weight: normal;
      font-size: 18px;
      line-height: 140%;
  }
  .imgad{
     margin-bottom: 30px;
    }
    .mualif{
      width: 100%;
      display: flex;
      align-items: center;
      margin: 50px 0;
    }
    .mualif-b{
      margin-right: 10px;
    }
     .mualif-text{
       display: flex;
       width: 100%;
     }
    .del-edit{
      margin-left: 30px;
      padding: 10px;
    }
    .editbtn{
      width:100%;
      display: flex;
      justify-content: flex-end;
     }
    @media (max-width:961px){
      .image_adds{
        display: none;
      }
    }
    @media (max-width:500px){
      &{
        padding:30px 10px;
      }
      .mualif{
        flex-direction: column;
      }
      .editbtn{
        display: flex;
        justify-content: space-around;
        margin-right: auto;
        margin-top: 15px;
      }
      .del-edit{
        width: 100px;
        padding: 7px 0;
        margin:0;
      }
      .mualif-text{
        font-size: 14px;
      }
    }
`