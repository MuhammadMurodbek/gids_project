import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top:15px;
    .pagination{
        text-align: center;
        padding: 20px 0;
    }
    @media (max-width:600px){
        .sc-ehSDrC.iuPqWO{
            /* background-color:red; */
            margin-right:auto;
        }
    }
    .arrow{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .arrowicons{
        margin  : 20px;
        margin-bottom:0;
    }
`  
export const ButtonWrapper = styled.div`
    margin-top: 40px;
`