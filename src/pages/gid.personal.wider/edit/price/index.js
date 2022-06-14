import React from 'react';
import { Wrapper } from './style';
import GidPage from "./gid.page"
import TranslatorPage from "./translator.page"
import WritePage from "./writer.page"

const Index = () => {

    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const { role } = getRole;

    return (
        <Wrapper>
            { role === "gid"?<GidPage />:null }
            { role === "translator"?  <TranslatorPage/> : null}
            { role === "writer"?  <WritePage/> : null}
        </Wrapper>
    )
}

export default Index
