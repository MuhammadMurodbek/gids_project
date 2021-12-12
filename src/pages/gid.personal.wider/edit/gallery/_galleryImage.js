import React, { useState, useEffect } from 'react'
import { getResponse } from "../../../../hooks/response_get"
import ImageGallery from "../../../../components/molecules/personal.gallery"
const Gallery = ({role}) => {
    const [ state, setState ] = useState( { success: '', error: '' } )
    const [ list, setList ] = useState( [] )
    const [callback,setCallback] = useState(false)
    useEffect( () => { getResponse( `/api/${role}s/edit/gallery/`, setState ) }, [callback] )
    useEffect( () => {
        if ( state?.success !== '' )
        {
            let imagesList = state?.success?.data.map( ( item ) => {
                return {
                    id: item.id,
                    src: item.image,
                }
            } )
            setList( imagesList )
        }
    }, [ state ] )
    return (
        <div>
            <ImageGallery list={list} setCallback={setCallback} role={role}/>
            {/* <ImageCrop setState={ setState } state={ state } /> */}
        </div>
    )
}

export default Gallery
