import styled from "styled-components"
import {mainGreen} from "../../styles/global/colors"

export const WrapperAll = styled.div`
   
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding:10px 60px;
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
    .carouseldiv{
        margin:10px !important;
        padding: 10px !important;
    }
    @media (max-width: 960px){
        .grid_container{
            flex-direction: column-reverse !important;
        }
        .grid_container_inner{
            margin-top:30px;
        }
        padding:10px 10px !important;
    }
    @media (min-width: 1367px){
       width: 1450px;
       margin: 0 auto;
    }
    .imgslid{
        width:150px;
        margin:30px 0;
        border:2px solid red
    }
    
`;

export const ComponentOne = styled.div`
    flex-grow: 1;

    @media (max-width:444px){
        padding:10px 4px;
    }

   
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

            @media (max-width: 1133px){
                font-size:24px;
            }
            @media (max-width: 1045px){
                /* background-color:red; */
                margin-top: 40px;
                width:100%;
                padding:0 20px;
            }
            @media (max-width:500px){
                font-size: 20px;
            }
        }

        img{
            /* min-width:400px; */
            width: 850px;
            // margin-top:140px;
            object-fit: cover;

            // height:938px;
            // margin-top:40px;
            // object-fit: cover;

            @media (max-width: 444px){
                width:280px !important;
                /* background-color:red; */
                
            }
            @media (max-width: 1256px){
                width:460px;
            }
            @media (max-width: 540px){
                width:360px;
            }
        }
    }
`
export const ComponentTwo = styled.div`
    width: 100%;
    padding:10px 20px;

    @media (max-width:440px){
        padding:10px 4px;
        .btn_medida_last{
            // width:250px !important;
            margin-top:10px
        }
        .newst{
            margin-right:50px
        }
    }
    .image_grid_container{
        background-color:red;
    }
    p{
        margin-bottom: 14px;
    }
    .container-2-1{
        padding:20px;
        position:relative;
        top:50%;
        transform:translateY(-50%);
        a{
            width:200px;
        }
    }
    .container-2-1.first{
        @media (max-width:960px){
            /* background-color:red; */
            position:relative;
            top:140px;
            /* margin-top:50px; */
        }
    }
    .title-second-main-container{
        width:100%;
        margin:60px 0;
        font-size:28px;
        font-weight:700;
        text-align:center;

        @media (max-width: 1045px){
            font-size:24px;
        }
        @media (max-width:500px){
            font-size: 20px;
        }

    }
    .title-second-main-container-text{
        width:100%;
        margin:14px 0;
        font-size:22px;
        font-weight:600;
        text-align:left;

        /* @media (max-width: 1045px){
            font-size:24px;
        } */
        @media (max-width:500px){
            font-size: 16px;
        }
        /* p{
            background-color: red;
        } */
        
    }

`
export const ComponentThree = styled.div`
    width:100%;

    @media (max-width:400px){
        padding: 10px 4px;
    }

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
    .vertical-timeline{
        padding:0 !important;
        padding-top:20px !important;
    }
    
`
export const ComponentFour = styled.div`
    width: 100%;
    padding:10px 30px;
    
   .slick__dots li{
       color: red !important;
       background: red !important;
   }

   button{
       background-color: #999 !important;
       border-radius:50%;
       
   }

   li.slick-active button {
			background-color: #326a32 !important;
            border-radius:50%;
	}
    .slick-arrow{
        display: none !important;
    }

    @media (max-width:500px){
        padding: 10px 0px !important;
    }

    .container{
        .title-container{
            padding-left:25px;
            font-weight:600;
        }
    }
    .arrole{
        font-size: 18px;
        margin-right: 15px;
    }
    .link11{
        display:flex;
        color: ${mainGreen};
        margin: 10px 20px;
    }
   .link11 img{
       
       margin-left:5px;
       object-fit:cover
   }

`
export const ContainerLast = styled.div`
    width: 100%;
    padding:40px 0;
    margin-top:20px;
    text-align:center;
    background-color: #F2F8F2;
    .dgHbIl{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bbnMbV {
        display: flex;
        align-items:center;
        justify-content:center;

    }
    .btnlaset{
        margin: 4px 20px 0 0px;
    }
    @media (max-width:440px){
        padding:10px 4px;
        .btnlaset{
            margin-top: 10px;
        }
    }

`