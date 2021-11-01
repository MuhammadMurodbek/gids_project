import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    
    .wrapper_no_data{
        position: relative;
        top:30px;
        width: 100%;
        margin:40px 0;
        text-align: center;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        span{
            margin:20px 0 10px;
            font-size: 1.3rem;
        }
        .no_data_img{
            width: 200px;
            margin-right: 20px;
        }
    }
`