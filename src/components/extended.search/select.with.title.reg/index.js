import React from 'react'
import SelectLang from "../../molecules/select.labeled/lang"
import { Wrapper } from "./index.style"
import {useTranslation} from "react-i18next"
import {validatorState} from "../../../custom/validator"
const Index = ( {title, setCollect, collect, error} ) => {
    const {t} = useTranslation()
    // const options = [
    //     { value: 0, label: 'english' },
    //     { value: 1, label: 'russian' },
    //     { value: 2, label: 'spain' },
    //     { value: 3, label: 'uzbek' },
    //     { value: 4, label: 'arabic' },
    //     { value: 5, label: 'turkish' },
    // ]
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
            />
        </Wrapper>
    )
}

export default Index
