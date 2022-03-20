import React from 'react'
import {TestComponentStyle} from "./style"
import SpinnerModal from "./spinner.modal"
import ErrorComponent from "./error.component"
import SuccessModal from "./success.modal"
const Index = ({data, loading, success, error}) => {
    return (
        <TestComponentStyle>
            {loading &&  <SpinnerModal/>}
            {/* {error && <ErrorComponent data={data}/>} */}
            {error && <SuccessModal data={data}/>}
        </TestComponentStyle>
    )
}

export default Index
