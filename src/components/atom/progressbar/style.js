import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    /* background-color:red */
    .title{
        position: absolute;
        top:5px; left:5px;
        font-size: 8px;
        /* font-weight: bold; */
        color:#fff;
    }
    .ant-progress.ant-progress-line.ant-progress-status-normal.ant-progress-show-info.ant-progress-default{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap:1.2rem;
    }
    .ant-progress-text{
        font-size: 13px;
    }
`