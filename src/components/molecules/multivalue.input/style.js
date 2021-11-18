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
        /* background-color: red; */
        position:absolute;
        bottom:-70px;
        width:100%;
        height:auto;
    }
    .icon_del{
        position:relative;
        top:6px;
        color:#444;
    }
`
