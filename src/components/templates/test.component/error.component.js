import React from 'react'
import { Button } from '../../atom/button/index.style'
import ErrorIcon from '@mui/icons-material/Error';
const ErrorComponent = ({ status, statusText, setCallback }) => {
    return (
        <div>
            <div className="text_error">
                <span><ErrorIcon/></span>
                <span>Status: {status}</span>
                <span>StatusText:{statusText}</span>
            </div> <br />
            <Button onClick={setCallback}>Refresh</Button>
        </div>
    )
}

export default ErrorComponent
