import React, { useState, useEffect } from 'react'
import Select from "../../atom/select"
import SelectLabeledCountry from "../../molecules/select.labeled.country"
import SelectLabeledCity from "../../molecules/select.labeled.country/city"
import { Wrapper } from "./index.style"
import { useTranslation } from 'react-i18next'

const Index = (props) => {
    const { state, setState, field1, field2 } = props
    const { t } = useTranslation()
    const [countryId, setCountryId] = useState(null)
    return (
        <Wrapper>
            <SelectLabeledCountry
                className="selects"
                setCountryId={setCountryId}
                setState={setState} 
                state={state}
                placeholder={t("kengaytirlgan_Q.DavlatniTanlang")}
            />
            <SelectLabeledCity
                className="selects"
                countryId={countryId}
                setState={setState}
                state={state} 
                isDisabled={countryId === null ? true:false}
                placeholder={t("kengaytirlgan_Q.ShaharniTanlang")}
            />
        </Wrapper>
    )
}

export default Index
