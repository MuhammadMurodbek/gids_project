import React, { useState } from 'react'
import { Wrapper, Label } from './style'
import TextArea from "../../atom/textAreaCom"
const Index = ( props ) => {
    const [ value, setValue ] = useState( null )
    const { width, label, setState, field, name, state } = props
    React.useEffect( () => { setValue( state[ field ] ) }, [ state ] )
    const handleChange = ( e ) => {
        setValue( e.target.value )
        if ( setState )
        {
            setState( prev => { return { ...prev, [ field ]: e.target.value } } )
        }
    }
    return (
        <Wrapper width={ width }>
            <Label>{ label }</Label>
            <TextArea { ...props } rows="10" value={ value } name={ name } onChange={ handleChange } />
        </Wrapper>
    )
}

export default Index
