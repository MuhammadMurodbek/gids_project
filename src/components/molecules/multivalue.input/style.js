import styled from "styled-components"
export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    top:19px;

    .input_multi{
    position: relative;
    top:3px;
    width: 100%;
    height: auto;
    padding:18px 10px;
    padding-right: 40px;
    margin-top: 10px;
    border:none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    color:#212121;
    background-color: #fafcfa;
    z-index: 4;
    border-radius: 4px;
    }
    .label{
        font-weight: 600;
        font-size:${a=>a.size? a.size : '15px'};
        margin: 10px;
        margin-top: 20px;
        text-align: left;
        font-family: Montserrat;
    }
    .multiple-value-text-input-item-container{
        background-color: red;
        display:none;
        position:absolute;
        bottom:-70px;
        width:100%;
        height:auto;
    }
    .icon_del{
        position:relative;
        top:3px;
        color:#444;
        cursor:pointer;
    }
`
export const Comment = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width:500px;
    height:auto;
    margin-top: 3px;
    .item{
        display: flex;
        align-items: center;
        padding:4px;
        background-color:#d4d6d4;
        margin:2px 5px;
        border-radius: 3px;
    }
`