import React from 'react'
import {Wrapper} from "./index.style"
import Navbar from '../../components/navbar';
import Footer from "../../components/footer"

const Index = ({children}) => {
    return (
        <Wrapper>
            <Navbar/>
                <div className="main-part">{children}</div>
            <Footer/>
        </Wrapper>
    )
}

export default Index
