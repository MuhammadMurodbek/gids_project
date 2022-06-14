import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding:0 15px;
    .gridCon{
        width: 100%;
    }
    .asddd, .mavzulardd{
        // margin-left:30px
    }
    .classed{
        margin-right: 5px;
    }
    .box{
        display: flex;
        // margin-top:10px;
    }
    .box_child{
        display: flex;
        flex-direction: column;
        font-size:13px !important;
        margin-top:10px;
        // padding-left:10px;
        span{
            font-size:0.9rem;
            line-height:1.3rem;
        }
    }
    .newSpans{
        display:inline;
        
    }
    .bold_text{
        font-weight:bold;
    }
    .text-tt3::first-letter {
        text-transform: uppercase !important;
      }
    .yes_no{
        // font-weight:bold;
        font-size:13px;
        position:relative;
        right:17px;
        margin-top:2px
    }
    .LtUaO{
        margin:0
    }
    .no_data_text{
        position: relative;
        right:17px;
    }

`
export const TextSpan = styled.div`
display:inline-block;
text-transform:lowercase;
 font-weight:bold;
 &:first-letter {
    text-transform: uppercase;
  }
     
`