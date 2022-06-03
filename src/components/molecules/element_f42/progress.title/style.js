import styled from "styled-components"
export const Wrapper = styled.div`
    width: 400px;
    height: auto;
     
    padding-right: 10px !important;
    
     @media (max-width:460px){
        &{
            width:300px;
        }
    }
    .progress-bar{
        flex:6;
        /* background-color:red; */
        margin-right:5px;
    }

    .progress-text{
        /* background-color:green; */
        flex:2;
        font-size: 12px;
    }
`