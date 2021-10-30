import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    min-height: 80vh;
`
export const ContainerVerify = styled.div`
    width:500px;
    height: auto;
    padding:10px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
    @media (max-width:500px){
        &{
            width:400px;
        }
    }
    @media (max-width:415px){
        &{
            width:360px;
        }
    }
    @media (max-width:370px){
        &{
            box-shadow: none;
        }
    }
`
