import React,{useMemo} from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"
import {getResponseRegion} from "./hooks/response_get"
function App() {
  useMemo(() => {
    getResponseRegion('https://countriesnow.space/api/v0.1/countries')
  },[])
  return (
    <React.Fragment>
      <GlobalStyle/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
