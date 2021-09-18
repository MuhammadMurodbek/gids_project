import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:30px 70px;
    margin-top:30px;
    margin-bottom:80px;
    .container-shadow{
        position: relative;
        z-index: 10;
    }

    .flex-item-one{
        flex:1;
        text-align: left;
    }
    .flex-item-two{
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
`

export const FlexItem = styled.div`
    /* width: 100%; */
    /* background-color: red;/ */
`