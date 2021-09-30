import React from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"
// import AnimatedCursor from "./components/atom/animated.cursor"

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      {/* <AnimatedCursor/> */}
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
