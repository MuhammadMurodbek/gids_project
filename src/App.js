import React,{useEffect} from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"
import {getGlobals} from "./hooks/response_get"
function App() {
  useEffect(() => {
    getGlobals()
    // getResponseRegion('https://countriesnow.space/api/v0.1/countries')
    // localStorage.setItem('expired',false)
  },[])
  return (
    <React.Fragment>
      <GlobalStyle/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
