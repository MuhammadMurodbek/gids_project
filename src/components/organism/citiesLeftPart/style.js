import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    box-shadow: 0px 0px 30px #EDEDED;
    margin: 30px 0;
    padding: 10px;

    .text-div{
        padding: 10px 0;
    }
    .text-link{
        color: #326A32;
        display: flex;
        margin-top: 15px;
        text-align: center;
    }
    .arrow__readmore{
        font-size: 15px;
        margin-top: 3px;
        margin-left: 10px;
    }
    @media (max-width: 500px) {
        .text-div{
            font-size: 14px;
        }
    }
`