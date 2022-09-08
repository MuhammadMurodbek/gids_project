import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
   
    box-shadow: 0px 0px 30px #EDEDED;
    margin: 30px 0;
    padding: 10px;
    /* background-color: red; */
    .text-div{
        padding: 10px 0;
    }
    .text-link{
        color: #326A32;
        display: flex;

        text-align: center;
    }
    .arrow__readmore{
        font-size: 15px;
        margin-top: 3px;
        margin-left: 10px;
    }
    @media (max-width: 500px) {
        .text-div{
            font-size: 14px;
        }
    }
    .penimg{
        width:20px;
        margin-left:5px;
        margin-bottom:3px;
    }
    .div_foot{
        display:flex;
        aligin-items:center;
        justify-content: space-between;
       
    }
 
   
    
`