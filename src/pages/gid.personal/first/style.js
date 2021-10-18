import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:30px 70px;
    margin-top:30px;
    margin-bottom:80px;
    font-family: Montserrat !important;
    .container-shadow{
        position: relative;
        z-index: 10;
    }

    .flex-item-one{
        flex:1;
        text-align: left;

    }
    .flex-item-two{
        /* text-align: center !important; */
        flex:5;
    }
    .icon-text{
        width:auto;
        display: flex;
        align-items: center;
        div{
            width: auto;
            margin-left: 5px;
        }
    }
    .icon-text.two{
        margin-left: 25px;
    }
    @media (max-width: 738px) {
        &{
            padding:30px 10px;
            margin-top:5px;
        }
        .icon-text{
            /* backgrounds: red; */
            position: relative;
            left:-7px;
            margin:0;
        }
        .sc-fKFxtB.gfiwCH{
            margin:0 auto;
        }
        .flex-item-one{
            padding-top:5px;
        }
        .flex-item-two{
            text-align: center;
            margin-left:0;
            margin:20px auto;
        }
    }
    @media (max-width: 500px) {
        .icon-text{
            margin-top:6px;
            position:relative;
            left:-8px;
        }
        .icon-text.two{
            margin:0;
            margin-top:3px;
        }
    }
`

export const FlexItem = styled.div`
/* text-align: center; */
    /* width: 100%; */
    /* background-color: red; */
`