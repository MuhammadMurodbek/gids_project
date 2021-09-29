import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    top:3px;
    width: ${(value)=>value.width} !important;
    padding:${value=>value.paddingX ? value.paddingX:'12px'} 20px;
    background-color: ${value=>value.backgroundColor ? value.backgroundColor : '#fafcfa'} ;
    border-radius: 4px;
    z-index: 5;
   
    .ant-picker-time-panel-column{
            background-color: red !important;

    }
    .ant-picker-focused{
        outline: none !important;
    }

    .time_picker{
        width: 100%;
        border:none;
        background-color:transparent;
        padding:5px 0;
        outline:none;
    }
`