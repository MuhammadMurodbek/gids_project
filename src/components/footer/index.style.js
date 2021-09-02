import styled from "styled-components"

export const FooterWrapper = styled.div`
    width: 100%;
    height: auto;
    padding:10px 0 0;
    color:#fafcfa;
    background-color: #244D24;
    .first-container{
        padding:30px 100px;
    }
    .second-container{
        padding:10px;
        margin:15px auto;

        span{
            padding:4px 6px;
            border-radius: 50%;
            background-color:#fff;
            text-align:center;
            i{
                position:relative;
                top:55%; left:50%;
                transform: translate(-50%, 5%);
                font-size: 1.3rem;
                color:black;
                background-color: #fff;
            }
        }
    }
    .flex-items{
        width: 300px;
        span{
            font-weight: 700;
            font-size:15px;
        }
        ul{
            margin-top: 20px;
            li{
                margin:10px 0;
                font-size: 14px;
            }
        }
    }
    .footer-bottom-comp{
        padding:10px;
        text-align: center;
        font-size: 11px;
        background-color:#1D3D1D;
    }
`
