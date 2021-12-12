import React, { useState, useEffect } from 'react'
import { getResponse } from "../../../../hooks/response_get"
// import ImageCrop from "../../../../components/organism/image.crop.gallery/new";
import ImageGallery from "../../../../components/molecules/personal.gallery"
// import FadeIn from "react-fade-in"
// import { Fade } from '@material-ui/core';
const Gallery = ({role}) => {
    const [ state, setState ] = useState( { success: '', error: '' } )
    const [ list, setList ] = useState( [] )
    const [callback,setCallback] = useState(false)
    useEffect( () => { getResponse( `/api/${role}s/edit/about/`, setState ) }, [callback] )
    useEffect( () => {
        if ( state?.success !== '' )
        {
            let imagesList = state?.success?.data?.certificates?.map( ( item ) => {
                return {
                    id: item.id,
                    src:item.image,
                }
            } )
            setList( imagesList )
        }
    }, [ state ] )
    console.log(state)
    // function onSelectImage ( index, image ) {
    //     console.log( index, image )
    // }
    return (
        <div>
            <ImageGallery list={list} setCallback={setCallback} role={role} url="certificate"/>
            {/* <ImageCrop setState={ setState } state={ state } /> */}
        </div>
    )
}

export default Gallery
