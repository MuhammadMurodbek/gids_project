import React from 'react'
import {TestComponentStyle} from "./style"
import Spinner from "../../components/molecules/loading.spinner"

const Index = ({data, loading, success, error, children}) => {
    return (
        <TestComponentStyle>
            {loading && <Spinner/>}
            {error && <ErrorComponent/>}
            {success && children}
        </TestComponentStyle>
    )
}

export default Index
