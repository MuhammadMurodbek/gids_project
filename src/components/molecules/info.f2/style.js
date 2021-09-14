import styled from "styled-components"

export const WrapperInfoF2 = styled.div`
    width:${value=>value.width};
    height:${value=>value.height};
    margin-left:20px;
    /* background-color: yellow; */
    .info-item{
        width:100%;
        display:flex;
        align-items: center; 
        margin:5px 0;
        /* background-color: green; */
            font-size:14px;
        span{
            font-weight:600;
            margin-left: 5px;
        }
    }
`