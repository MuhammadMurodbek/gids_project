import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width:${v=>v.width ? v.width:"auto"};
    .error_icon{
        color:red !important;
    }
    .success_icon{
        color:green !important;
    }
    .log_wrap{
        width:100%;
        // background:red;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        &_item{
            // flex:0.5;
            background:#ccc;
            font-size:0.9rem;
            padding:15px 8px;
            position:relative;
            top:3px; left:1px;
            border-top-left-radius:5px;
            border-bottom-left-radius:5px;
        }
    }
`
export const Label = styled.div`
    font-weight: 600;
    font-size:${a=>a.size};
    margin: 10px;
    margin-top: 20px;
    text-align: left;
    font-family: Montserrat;
`
export const Input = styled.input`
    position: relative;
    top:3px;
    width: 100%;
    height: auto;
    padding: 2px 10px;
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
    background-color: transparent;
    z-index: 4;
`
export const InputLabel = styled.span`
    position: absolute;
    top:5px;
    left:19px;
    font-size: 12px;
    color:#212121;
    z-index: 2;
`
export const Eye = styled.div`
    position: absolute;
    right:-10px; top:53px;
    width:50px;
    height:50px;
    z-index:10;
    .far{
        cursor:pointer;
    }
`