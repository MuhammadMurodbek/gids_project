import React from 'react'
import Select from "react-select"

const Index = (props) => {
    const customStyles = {
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 'auto',
          }),
    }
    return (
        <>
            <Select {...props} width='500px'/>            
        </>
    )
}

export default Index
