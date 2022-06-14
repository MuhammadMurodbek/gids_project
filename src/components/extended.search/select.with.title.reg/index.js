import React,{useState, useEffect} from 'react'
import SelectLang from "../../molecules/select.labeled/lang"
import { Wrapper } from "./index.style"
import {useTranslation} from "react-i18next"
import {validatorState} from "../../../custom/validator"
import {getLabelLangLocal} from "../../../custom/function"

const Index = ( {title, setCollect, collect, error, defaultValueApi} ) => {
    // console.log(defaultValueApi)
    const [defaultState, setDefaultState] = useState(null)
    useEffect(()=>{
        if(defaultValueApi){
            let mass = defaultValueApi.split(',')
            let clone = mass?.map(a=>{
                return{
                    value:parseInt(a),
                    label:getLabelLangLocal(parseInt(a))
                }
            })
            setDefaultState(clone)
        }
    },[defaultValueApi])
    const {t} = useTranslation()
    return (
        <Wrapper>
            <div className="title">{ title }</div>
            <SelectLang
                setState={ setCollect }
                state={ collect }
                // field="languages" 
                placeholder={ t( "arizaqoldirish.BilishikeralPlac" ) }
                // options={ gid_lang_obj } 
                errorText={ error ? validatorState( collect?.languages, 'array', 0, 'Tillar kiritilmagan' ) : null }
                defaultApiValue={defaultState}
            />
        </Wrapper>
    )
}

export default Index
