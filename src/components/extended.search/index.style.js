import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    width: ${value=>value.width};
    height: auto;
    padding:10px;
    padding-top:55px;
    padding-bottom:25px;
    margin: 25px auto 0;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    
    .title-header{
        width: 100%;
        position: absolute;
        top:0; left:0px;
        padding:15px;
        font-size:16.5px;
        font-weight: 600;
        text-align: center;
        color:#fff;
        background-color: #326A32;
    }

    .button-wrapper{
        text-align: center;
        margin-top:10px;
    }

`