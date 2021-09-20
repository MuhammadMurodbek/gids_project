import styled from "styled-components"

export const Wrapper = styled.div`
    width:${value=>value.width ? value.width : '100%'};
    height: auto;
    margin: 0 auto;
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border: none;
    }
    .sc-dFJtaz.loOXZR{
        svg{
            width:18px;
            color:red !important;
        }
    }
    .sc-fbNZge.eDujWm{
        margin:0;
    }
    .sc-bXDkGd.dkEfrw{
        text-align: center;
        height:auto;
        svg{
            width:40px;
            height:40px;
            margin-top: 3px;
            margin-left: 3px;
        }
    }
`