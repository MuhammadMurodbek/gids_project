import React,{useEffect} from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"
import {getGlobals, getResponseRegion} from "./hooks/response_get"
const App =()=>{
  // useEffect(() => {
    // getGlobals()
    // getResponseRegion('https://countriesnow.space/api/v0.1/countries')
  // },[])
  return (
    <React.Fragment>
      <GlobalStyle/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
