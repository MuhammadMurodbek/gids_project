import React from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"
// import AnimatedCursor from "./components/atom/animated.cursor"
// import {ToastContainer} from "react-toastify"
function App() {
  return (
    <React.Fragment>
    
      <GlobalStyle/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
