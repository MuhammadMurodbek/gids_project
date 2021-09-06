import styled from "styled-components"

export const WrapperAll = styled.div`
    width: 100%;
    padding:10px;
`
export const ComponentOne = styled.div`
    margin:20px 0;
    padding:20px 50px;
    .container_one{
        flex:2;
        &-inner{
            width:350px;
            height: auto;
            padding:10px;
            box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.5);
        }
    }
    .container_two{
        flex: 4;
        text-align: center;
    }
`
export const ComponentTwo = styled.div`
    width: 100%;
    padding:10px;
`