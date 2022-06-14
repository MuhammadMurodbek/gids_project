import styled from "styled-components"
import {mainGreen} from "../../../styles/global/colors"
export const Container = styled.div`
    display:flex;
    .r_group{
        display:flex;
    }
    .radio{
        color:${mainGreen};
        // background:${mainGreen};
        
    }
    span.Mui-checked{
        color:${mainGreen};
    }
`