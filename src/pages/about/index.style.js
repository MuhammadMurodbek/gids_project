import styled  from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    padding:10px 85px;
    margin-bottom: 50px;
    @media (min-width: 1367px){
        width: 1400px;
        margin: 0 auto;
     }
 `

export const ComponentTwo = styled.div`
    width: 100%;
    /* padding:10px 20px; */
    p{
        margin-bottom: 14px;
    }
    .container-2-1{
        /* padding:20px; */
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
    
    @media (max-width:540px){
        .title-second-main-container-text{
            font-size: 16px;
        }
        .container-2-1{
            width:100%;
            padding:10px 0;
            .text{
                width:100%;
                background-color:red;
            }
            p{
                font-size: 14px;
            }
        }
        .text_main{
            width:100%;
            /* background-color: red; */
        }
    }
    /* @media (max-width:450px){
        .container-2-1{
            width:250px;
        }
    } */
 

`