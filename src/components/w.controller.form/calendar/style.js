import styled from "styled-components"
export const Container = styled.div`
    padding:8px;
    background-color:#FAFCFA;
    border-radius: 4px;
    .input{
        width:100%;
        border:none;
        padding:8px;
        background:transparent;

        &::-webkit-input-placeholder{
            color:red !important;
        }
    }
    .input::placeholder{
        color:red !important;
    }
    input::placeholder{
        color: #2c2c2c;
    }
`