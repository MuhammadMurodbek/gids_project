import React from 'react'
import Spinner from "../../../components/atom/loading.spinner.line"
import ErrorComponent from './error.component'
import { Wrapper } from "./style"

const Index = ({ loading, data, error, success, currentJSX, setCallback }) => {
    // console.log(data)
    return (
        <>
            <Wrapper>
                {loading && <div style={{ width: '100%', textAlign: 'center' }}><Spinner width={50} height={50} /></div>}
                {error && <ErrorComponent status={data?.status} statusText={data?.statusText} setCallback={setCallback} />}
            </Wrapper>
            {success && currentJSX}
        </>
    )
}

export default Index
