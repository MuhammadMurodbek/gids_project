import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    .info_btn{
        position: absolute;
        width:200px;
        right:0;
        top:-30px;
    }
    @media (max-width:600px){
        .sc-fKFxtB.fMHAxL{
            margin:0 auto;
        }
        .sc-iJuVqt.cyvHhH{
            margin:0;
        }
    }
`

export const WrapperContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 25px;
    padding:20px 5px;
    overflow: hidden;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
    p{
        font-size: 14px;
    }
    p.mini{
        font-size: 13px;
    }
    .gid-info-personal{
            font-size:15px;
        .text{
            font-weight: 600;
            display: inline;
        }
    }
    .gid-info-personal-text{
        font-size: 13px;
        margin-top: 7px;
        .text{
            display: inline;
            font-weight: 600;
        }
    }
    .gid-info-personal-text.top{
        margin-top:10px;
    }
`
export const ContainerBottom = styled.div`
    display:flex;
    width: 100%;
    height: auto;
    .inner-div{
        /* display: inline-block; */
        font-size: 14px;
        span{
            font-size: 13px;
        }
        span.title{
            font-weight: 600;
        }
    }
    .inner-div+.inner-div{
        min-width: 100px;
    }
`