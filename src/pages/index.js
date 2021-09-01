import React,{useState} from 'react';
import Button from "../components/button"
import Input from "../components/input"
import Select from "../components/select"

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
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:10}}>
                <Input width="200px" placeholder="text..."/>
                <Button>asdfasdfsffg</Button>
                <Select options={options} value={state} onChange={onChange}/>
            </div>
        </>
    )
}

export default Index
