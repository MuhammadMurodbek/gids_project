import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    /* background-color: green; */

    .slider-component{
        text-align: center;
    }
    .slider-component > div{
        padding: 10px;
    }
    @media (max-width:600px){
        .sc-lmoMya.cWarsQ{
            padding:0;
        }
        .slider-component > div{
        padding: 10px 0;
        /* background-color:red; */
    }
    }
`

export const SliderContainer = styled.div`
    width: 80% !important;
    /* background-color:green; */
    max-width:1000px;
    height: 100%;
    position: relative;
    top:0px;
    border-radius: 4px;
    text-align: center;
    overflow: hidden;
    box-shadow: 5px 6px 10px -7px rgba(0, 0, 0, 0.5);

    @media (min-width:500px){
        .slick_text{
            font-size: 14px;
        }
    }
`
export const stylesBgColor = {
    backgroundColor: 'transparent',
}

export const styleContainer = {
    width:'77%', 
    height:'auto', 
    margin:"0 auto" 
}
export const TimeLineWrapper = styled.div`
    
    @media (max-width: 1045px){
        .timeline-title.title{
            font-size:24px;
        }
    }
    @media (max-width:500px){
        .timeline-title.title{
            font-size: 20px;
        }
        .timeline-part{
            margin:0 !important;
            .wrapper-text{
                width:200px;
            }
            p{
                width:200px;
                /* background-color: red; */
            }
        }
        .wrapper-text{
            font-size: 14px !important; 
        }
    }
    
`