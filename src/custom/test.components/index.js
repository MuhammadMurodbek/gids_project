import React from 'react'
import {TestComponentStyle} from "./style"
import SpinnerModal from "./spinner.modal"
import ErrorComponent from "./error.component"
import toast from 'react-hot-toast';
import SuccessModal from "./success.modal"
const Index = ({data, loading, success, error, stitle, etitle, onSuccess}) => {
    return (
        <TestComponentStyle>
            {loading &&  <SpinnerModal/>}
            {error &&  <ErrorComponent data={data} title={etitle}/>}
            {success && <SuccessModal data={data} title={stitle} onSuccess={onSuccess}/>}
        </TestComponentStyle>
    )
}

export default Index
