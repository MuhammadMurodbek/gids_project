import styled from "styled-components"
 
export const WrapperRoundImage = styled.div`
    .modaldiv{
        position: relative;
    }
    .ant-image-mask{
        border-radius:50% !important;
    }
    .pointx{
        position: absolute;
        top: -30px;
        right: -40px;
        color: #fff;
        font-size: 35px;
        cursor: pointer;
    }

    width:${value=>value.width};
    height:${value=>value.height};
    button{
        position:relative;
        width: auto;
        top:-24px; left:57px;

        outline:none;
        background-color:transparent;
        border:none;
        cursor:pointer;
        border-radius:50%;
    }
    @media (max-width:${a=>a.m_width}){
        width:${a=>a.m_m_width};
    }
    @media (max-width:${a=>a.m_btn_width}){
        button{
            position:relative;
            top:${a=>a.m_btn_top};
            left:${a=>a.m_btn_right};
            /* background-color:red; */
            /* right: ${a=>a.m_btn_right}; */
        }
    }
`