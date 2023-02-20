import {lazy, Fragment} from 'react';
import GlobalStyle from "./styles/global"

// const GlobalStyle = lazy(() => import("./styles/global"));
const MainPage = lazy(() => import("./pages"));


const App =()=>{
  // useEffect(() => {
    // getGlobals()
    // getResponseRegion('https://countriesnow.space/api/v0.1/countries')
  // },[])
  return (
    <Fragment>
      <GlobalStyle/>
      <MainPage/>
    </Fragment>
  );
}

export default App;
