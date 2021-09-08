import styled from "styled-components"

export const WrapperAll = styled.div`
    width: 100%;
    padding:10px;
`
export const ComponentOne = styled.div`
    flex-grow: 1;
    .paper{
        padding: theme.spacing(2);
        text-align: 'center';
    }
    .text-center{
        text-align: center !important;
    }
    .right-part{
        text-align: center !important;

        div{
            width:90%;
            margin:25px 0;
            font-size:32px;
            font-weight: 600;
            text-align: center;
            line-height: 1.4em;
        }

        img{
            min-width:400px;
            width: 760px;
            margin-top:65px;
            object-fit: cover;
        }
    }
`
export const ComponentTwo = styled.div`
    width: 100%;
    padding:10px 20px;
    p{
        margin-bottom: 14px;
    }
    .container-2-1{
        padding:20px;
        position:relative;
        top:50%;
        transform:translateY(-50%);
    }
    .title-second-main-container{
        width:100%;
        margin:60px 0;
        font-size:28px;
        font-weight:700;
        text-align:center;
    }
    .title-second-main-container-text{
        width:100%;
        margin:14px 0;
        font-size:22px;
        font-weight:600;
        text-align:left;
    }

`
export const ComponentThree = styled.div`
    width:100%;
    .vertical-timeline::before{
        background:#333;
        height:77%;
        transform: translateY(240px);
    }
    .vertical-timeline-element-content.bounce-in{
        box-shadow:none;
    }
    .timeline-part{
        width:80%;
        margin: 0 auto;
        .timeline-title{
            width:100%;
            margin:60px 0;
            font-size:28px;
            font-weight:700;
            text-align:center;
        }
        .timeline-container{
            margin-top: 20px;
        }
    }
    .vertical-timeline-element--work{
        /* transform: translateY(-40%) !important; */
    }
    .sc-idOiZg.peBBw{
        text-align:center;
    }
`

