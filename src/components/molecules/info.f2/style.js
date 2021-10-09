import styled from "styled-components"

export const WrapperInfoF2 = styled.div`
    display: inline-block;
    width:${value=>value.width};
    height:${value=>value.height};
    margin-left:20px;
    margin-top:-20px;
    /* text-align:left; */
    /* background-color: yellow; */
    .info-item{
        width:100%;
        display:flex;
        align-items: center; 
        margin:2px 0;
        /* background-color: green; */
            font-size:14px;
        span{
            font-weight:600;
            margin-left: 5px;
        }
    }
    
`