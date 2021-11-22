import React, { useState, useEffect } from 'react'
import { getResponse } from "../../../../hooks/response_get"
import ImageCrop from "../../../../components/organism/image.crop.gallery/new";
import ImageGallery from "../../../../components/molecules/personal.gallery"
import FadeIn from "react-fade-in"
import { Fade } from '@material-ui/core';
const Gallery = () => {
    const [ state, setState ] = useState( { success: '', error: '' } )
    const [ list, setList ] = useState( [] )
    useEffect( () => { getResponse( '/api/gids/edit/gallery/', setState ) }, [] )
    useEffect( () => {
        if ( state?.success !== '' )
        {
            let imagesList = state?.success?.data.map( ( item, index ) => {
                return {
                    id: item.id,
                    src: item.image,
                }
            } )
            setList( imagesList )
        }
    }, [ state ] )
    function onSelectImage ( index, image ) {
        console.log( index, image )
    }
    return (
        <div>
           
            <ImageGallery list={list}/>
            <ImageCrop setState={ setState } state={ state } />
        </div>
    )
}

export default Gallery
