import styled from "styled-components"

export const WrapperInfoF2 = styled.div`
    display: inline-block;
    width:${value=>value.width};
    height:${value=>value.height};
    margin-left:20px;
    margin-top:-20px;
    /* text-align:left; */
    /* background-color: yellow; */
    span{
        font-size:12px !important;
        // background:red;
    }
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
    .c_per_day{
        font-size:12px;
        inline-size: 100px;
        display:flex;
        margin-left:8px;
    }
    .comment_count{
        display:inline-block;
        position:relative;
        top:2px;
        font-size:12px !important;
    }
`