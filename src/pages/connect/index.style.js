import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;
    padding:10px    ;

    .grid1{
        font-weight: 600;

    }
    .grid2{
        width: 200px;
    }
    .iframe{
        width: 100%;
        border: none;
    }
    .icons{
       margin-left: 20px;
    }
    .modaltitle{
         color:#36BF76;
         font-style: normal;
         font-weight: bold;
         font-size: 32px;
         line-height: 120%;
        }
    .modaldiv{
        padding: 40px;
        padding-top: 10px;
    }
    .closebtn{
        display: flex;
        justify-content: flex-end;
        padding:10px ;
    }
    .pointx{
        cursor: pointer;
    }
    .grid_btn{
        margin-bottom: 50px;
    }
    @media (min-width:1367px){
        width:1250px;
        margin:0 auto;
    }
    @media (max-width: 700px) {
        .sc-lmoMya.fECUXu{
            margin:35px 0;
        }
        .iframe{
            height:400px;
        }
    }
    @media (max-width:550px){
        .iframe{
            height:350px;
        }
    }
 
`
