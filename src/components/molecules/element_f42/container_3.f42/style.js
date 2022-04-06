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
    }
    .box_child{
        display: flex;
        flex-direction: column;
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
`
export const TextSpan = styled.div`
display:inline-block;
text-transform:lowercase;
 font-weight:bold;
 &:first-letter {
    text-transform: uppercase;
  }
     
`