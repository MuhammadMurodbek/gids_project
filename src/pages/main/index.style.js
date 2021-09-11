import styled from "styled-components"

export const WrapperAll = styled.div`
    position: relative;
    width: 100%;
    padding:10px;
    .slider-component{
        background-color:transparent;
    }
    .left-icon{
        position:absolute;
        top:50%; left:0px;
        transform:translateY(-50%); 
        cursor:pointer;
    }
    .right-icon{
        position:absolute;
        top:50%; right:0px;
        transform:translateY(-50%); 
        cursor:pointer;
        z-index: 12;
    }
    .application-last-container{
        background-color: green;
    }
`;

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
        height:74%;
        transform: translateY(190px);
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
            font-weight:bold;
            text-align:center;
            color:#000;
        }
        .timeline-container{
            transform: translateY(-50px);
            /* background-color: red; */
            /* height:435px; */
            /* margin-top: 20px; */
        }
    }
    .vertical-timeline-element--work{
        .wrapper{
            height:250px;
            text-align:center;
            .wrapper-text{
                font-size: 18px;
                font-weight:bold;
                margin:30px 0 10px;
            }
        }
    }
    .sc-idOiZg.peBBw{
        text-align:center;
    }
`
export const ComponentFour = styled.div`
    width: 100%;
    padding:10px 30px;

    .container{
        .title-container{
            padding-left:25px;
            font-weight:600;
        }
    }
`
export const ContainerLast = styled.div`
    width: 100%;
    padding:40px 0;
    margin-top:20px;
    text-align:center;
    background-color: #F2F8F2;

`