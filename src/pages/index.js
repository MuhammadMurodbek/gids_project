import React,{useState} from 'react';
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"
import Calendar from "../components/calendar"
import Navbar from '../components/navbar';
import Footer from "../components/footer"
import {Wrapper} from "./index.style"
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
const Index = () => {
    const [state, setState] = useState(null)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const onChange = (value) => {
        console.log(value);
        setState(value);
    }
    return (
        <Router>
        <Wrapper>
            <Navbar/>
            <div className="main-part">
                <Input width="200px" placeholder="text..."/>
                <Button>asdfasdfsffg</Button>
                <Select 
                    width="200px" 
                    options={options} 
                    value={state} 
                    onChange={onChange}
                />
                <Calendar width="180px"/>
            </div>
            <Footer/>
        </Wrapper>
        </Router> 
    )
}

export default Index
