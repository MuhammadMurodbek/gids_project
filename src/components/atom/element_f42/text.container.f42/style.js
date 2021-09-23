import styled from "styled-components"

export const ContainerBottom = styled.div`
    display: ${value=>value.display ? value.display : 'inline-block'};
    height: auto;
    margin-right:20px;

    i{
        margin-right:10px;
        font-size: 12px;
    }

    .inner-div{
        font-size: 14px;
        span{
            font-size: 13px;
        }
        span.title{
            font-weight: 600;
        }
    }
`