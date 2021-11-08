import styled from "styled-components"

export const Calendar = styled.div`
    width:${value=>value.width};
    position:relative;
    .ant-picker-focused{
        box-shadow:none !important;
    }
    .ant-picker-input{
        width:100% !important;
    }
    .ant-space-item{
        background-color:#fafcfa;
        padding: 12px 20px;
        border-radius:4px;
    }
    .ant-space.ant-space-vertical{
        width:100% !important;
    }
`