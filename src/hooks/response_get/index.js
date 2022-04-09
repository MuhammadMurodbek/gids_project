import { baseUrl, headers, head_token } from '../../redux/api'
import axios from 'axios'
import toast from 'react-hot-toast'
const token = JSON.parse(localStorage.getItem('user_token'))

export const postRefreshToken = async (data, refreshFunc) => {
    await axios.post( `${ baseUrl }/api/auth/token/refresh/`, {refresh:data?.refresh}, {headers: headers} )
        .then( response => {
            console.log(response.data)
            let obj = {
                ...data,
                access:response?.data?.access
            }
            localStorage.setItem('user_token', JSON.stringify(obj))
            if(refreshFunc) refreshFunc()
        })
        .catch( () => {
            localStorage.clear()
            window.location.href = '/auth'
            // console.log( err)/
        })
}
export const getResponse = async ( url, setState, noToken ) => {
    setState(prev=>{return{...prev, loader:true}})
    let headPart = noToken ? {headers: headers} : head_token
    await axios.get( `${ baseUrl }${ url }`, headPart )
        .then( response => setState( { success: response, error: '', loader:false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, getResponse( url, setState) )
            }
            setState( { success: '', error: err, loader:false } )
        } )
}
export const getApiResponse = async ( url, setState, noToken ) => {
    setState({data:null, error:false, success:false, loading:true})
    let headPart = noToken ? {headers: headers} : head_token
    await axios.get( `${ baseUrl }${ url }`, headPart )
        .then( response => setState( {data:response?.data, success:true, error:false, loading:false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, getApiResponse(  url, setState) )
            }
            setState( { data:err.response, success:false, error:true, loading:false } )
        } )
}
export const postApiResponse = async ( url, data, setState, noToken ) => {
    setState({data:null, error:false, success:false, loading:true})
    let headPart = noToken ? {headers: headers} : head_token
    await axios.post( `${ baseUrl }${ url }`, data, headPart )
        .then( response => setState( {data:response?.data, success:true, error:false, loading:false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, postApiResponse( url, data, setState) )
            }
            setState( { data:err.response, success:false, error:true, loading:false } )
        } )
}
export const putApiResponse = async ( url, data, setState, noToken ) => {
    setState({data:null, error:false, success:false, loading:true})
    let headPart = noToken ? {headers: headers} : head_token
    await axios.put( `${ baseUrl }${ url }`, data, headPart )
        .then( response => setState( {data:response?.data, success:true, error:false, loading:false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, postApiResponse( url, data, setState) )
            }
            setState( { data:err.response, success:false, error:true, loading:false } )
        } )
}
export const getResponseRegion = async ( url ) => {
    await axios.get( `${ url }`, headers )
        .then( response => localStorage.setItem( 'countries', JSON.stringify( response?.data?.data ) ) )
        .catch( err => console.log( err ) )
}
export const getGlobals = async ( token, appNoToken ) => {
    let lang = false
    let country = false
    await axios.get( `${ baseUrl }/api/users/languages/`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${ token?.access }`,
        }
    } )
        .then( response => {
            localStorage.setItem( 'lanGlobal', JSON.stringify( response?.data ) )
            lang = true
        } )
        .catch( err => console.log( err ) )
    await axios.get( `${ baseUrl }/api/users/countries/`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${ token?.access }`,
        }
    } )
        .then( response => {
            localStorage.setItem( 'countryGlobal', JSON.stringify( response?.data ) )
            country = true
        } )
        .catch( err => console.log( err ) )

    if(appNoToken && token?.role === 'simple_user'){
        window.location.href='/application-form'
    }else{
        if(lang && country){
        if(token?.role ==='simple_user')
            window.location.href='/gid-personal?tab=0'
        else    
            window.location.href='/gid-personal-wider?tab=0'
        }
        else
            toast.error("Qaytadan urinib ko'ring")
    }
}
export const checkGlobals = async() => {
    const token = JSON.parse(localStorage.getItem("user_token"))
    await axios.get( `${ baseUrl }/api/users/languages/`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${ token?.access }`,
        }
    } )
        .then( response => {
            localStorage.setItem( 'lanGlobal', JSON.stringify( response?.data ) )
        } )
        .catch( err => console.log( err ) )
    await axios.get( `${ baseUrl }/api/users/countries/`, {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${ token?.access }`,
        }
    } )
        .then( response => {
            localStorage.setItem( 'countryGlobal', JSON.stringify( response?.data ) )
        } )
        .catch( err => console.log( err ) )

}
export const postResponse = async ( url, data, setState, noToken ) => {
    let headPart = noToken ? {headers: headers} : head_token
    return await axios.post( `${ baseUrl }${ url }`, data, headPart )
        .then( response => setState( { success: response, error: '', loading: false } ) )
        .catch( err =>{ 
            if(err.response?.status === 403){
                postRefreshToken(token, postResponse( url, data, setState) )
            }
            setState( { success: '', error: err, loading: false } )
        } )
}
export const putResponse = async ( url, data, setState ) => {
    setState(prev=>{return{...prev, loading:true}})
    return await axios.put( `${ baseUrl }${ url }`, data, head_token )
        .then( response => setState( { success: response, error: '', loading: false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, putResponse(url, data, setState))
            }
            setState( { success: '', error: err, loading: false } ) 
        })
}
export const patchResponse = async ( url, data, setState ) => {
    const formData = new FormData()
    formData.append( 'image', data )
    return await axios.patch( `${ baseUrl }${ url }`, formData, head_token )
        .then( response => setState( { success: response?.data, error: '', loading: false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, patchResponse(url, data, setState))
            }
            setState( { success: '', error: err, loading: false } ) 
        })
}
export const patchResponseNonFile = async ( url, data, setState ) => {
    return await axios.patch( `${ baseUrl }${ url }`, data, head_token )
        .then( response => setState( { success: response?.data, error: '', loading: false } ) )
        .catch( err => {
            if(err.response?.status === 403){
                postRefreshToken(token, patchResponseNonFile(url, data, setState))
            }
            setState( { success: '', error: err, loading: false } ) 
        })
}
export const deleteResponse = async ( url, data, setCallback, setInfo) => {
    return await axios.delete( `${ baseUrl }${ url }`, head_token )
        .then( (response) => {
            setCallback( prev => !prev )
            toast.success( data + " deleted successfully" )
            if(setInfo) setInfo(response)
        } )
        .catch( (error) => {
            if(error.response?.status === 403){
                postRefreshToken(token, deleteResponse(url, data, setCallback, setInfo))
            }else{
                setCallback( prev => !prev )
                toast.error( "Something went wrong" )
                if(setInfo) setInfo(error?.response)
            }
        } )
}