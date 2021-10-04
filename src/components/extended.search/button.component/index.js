import React from 'react'
import Button from "../../atom/button"
import {Wrapper} from "./index.style"
import SearchIcon from '@material-ui/icons/Search';
// import SearchIcon from "../../../assets/img/search_icon.svg"
const Index = (props) => {
    return (
        <Wrapper>
            <Button width={props.width}>{props.name}</Button>  
            <SearchIcon className="fas fa-search"/>
            {/* <i className="fas fa-search"></i>   */}
            {/* <img src={SearchIcon} alt="search"/>  */}
        </Wrapper>
    )
}

export default Index
